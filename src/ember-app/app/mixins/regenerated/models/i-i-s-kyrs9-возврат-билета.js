import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПокупки: DS.attr('date'),
  причинаВозв: DS.attr('string'),
  покупатель: DS.belongsTo('i-i-s-kyrs9-покупатель', { inverse: null, async: false }),
  покупИлиВозвБ: DS.belongsTo('i-i-s-kyrs9-покуп-или-возв-б', { inverse: 'возвратБилета', async: false })
});

export let ValidationRules = {
  датаПокупки: {
    descriptionKey: 'models.i-i-s-kyrs9-возврат-билета.validations.датаПокупки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  причинаВозв: {
    descriptionKey: 'models.i-i-s-kyrs9-возврат-билета.validations.причинаВозв.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  покупатель: {
    descriptionKey: 'models.i-i-s-kyrs9-возврат-билета.validations.покупатель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  покупИлиВозвБ: {
    descriptionKey: 'models.i-i-s-kyrs9-возврат-билета.validations.покупИлиВозвБ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВозвратБилетаE', 'i-i-s-kyrs9-возврат-билета', {
    покупатель: belongsTo('i-i-s-kyrs9-покупатель', 'Покупатель', {
      фИО: attr('Покупатель', { index: 1 }),
      банковскийСчет: attr('Банковский счет', { index: 2 })
    }, { index: 0, displayMemberPath: 'покупатель' }),
    датаПокупки: attr('Дата покупки', { index: 3 }),
    причинаВозв: attr('Причина аозврата', { index: 4 })
  });
};
