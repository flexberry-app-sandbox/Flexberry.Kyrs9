import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПоездки: DS.attr('date'),
  место: DS.attr('number'),
  покупатель: DS.belongsTo('i-i-s-kyrs9-покупатель', { inverse: null, async: false }),
  покупИлиВозвБ: DS.belongsTo('i-i-s-kyrs9-покуп-или-возв-б', { inverse: 'покупкаБилета', async: false })
});

export let ValidationRules = {
  датаПоездки: {
    descriptionKey: 'models.i-i-s-kyrs9-покупка-билета.validations.датаПоездки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  место: {
    descriptionKey: 'models.i-i-s-kyrs9-покупка-билета.validations.место.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  покупатель: {
    descriptionKey: 'models.i-i-s-kyrs9-покупка-билета.validations.покупатель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  покупИлиВозвБ: {
    descriptionKey: 'models.i-i-s-kyrs9-покупка-билета.validations.покупИлиВозвБ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПокупкаБилетаE', 'i-i-s-kyrs9-покупка-билета', {
    покупатель: belongsTo('i-i-s-kyrs9-покупатель', 'Покупатель', {
      фИО: attr('Покупатель', { index: 1 }),
      банковскийСчет: attr('Банковский счет', { index: 2 })
    }, { index: 0, displayMemberPath: 'покупатель' }),
    датаПоездки: attr('Дата поездки', { index: 3 }),
    место: attr('Место', { index: 4 })
  });
};
