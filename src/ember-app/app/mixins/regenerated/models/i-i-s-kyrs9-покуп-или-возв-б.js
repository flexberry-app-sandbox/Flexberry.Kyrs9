import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  пунктНазнач: DS.attr('string'),
  пунктОтправ: DS.attr('string'),
  статус: DS.attr('i-i-s-kyrs9-статус'),
  билетнаяКасса: DS.belongsTo('i-i-s-kyrs9-билетная-касса', { inverse: null, async: false }),
  перевозчик1: DS.belongsTo('i-i-s-kyrs9-перевозчик1', { inverse: null, async: false }),
  покупкаБилета: DS.hasMany('i-i-s-kyrs9-покупка-билета', { inverse: 'покупИлиВозвБ', async: false }),
  возвратБилета: DS.hasMany('i-i-s-kyrs9-возврат-билета', { inverse: 'покупИлиВозвБ', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kyrs9-покуп-или-возв-б.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  пунктНазнач: {
    descriptionKey: 'models.i-i-s-kyrs9-покуп-или-возв-б.validations.пунктНазнач.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  пунктОтправ: {
    descriptionKey: 'models.i-i-s-kyrs9-покуп-или-возв-б.validations.пунктОтправ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-kyrs9-покуп-или-возв-б.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  билетнаяКасса: {
    descriptionKey: 'models.i-i-s-kyrs9-покуп-или-возв-б.validations.билетнаяКасса.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  перевозчик1: {
    descriptionKey: 'models.i-i-s-kyrs9-покуп-или-возв-б.validations.перевозчик1.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  покупкаБилета: {
    descriptionKey: 'models.i-i-s-kyrs9-покуп-или-возв-б.validations.покупкаБилета.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  возвратБилета: {
    descriptionKey: 'models.i-i-s-kyrs9-покуп-или-возв-б.validations.возвратБилета.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПокупИлиВозвБE', 'i-i-s-kyrs9-покуп-или-возв-б', {
    дата: attr('Дата', { index: 0 }),
    пунктОтправ: attr('Пункт отправления', { index: 1 }),
    пунктНазнач: attr('Пункт назначения', { index: 2 }),
    перевозчик1: belongsTo('i-i-s-kyrs9-перевозчик1', '', {
      наименование: attr('Перевозчик', { index: 4 })
    }, { index: 3, displayMemberPath: 'перевозчик' }),
    билетнаяКасса: belongsTo('i-i-s-kyrs9-билетная-касса', 'Место расчета', {
      наименование: attr('Место расчета', { index: 6 }),
      адрес: attr('Адрес расчета', { index: 7 })
    }, { index: 5, displayMemberPath: 'место расчета' }),
    статус: attr('Статус', { index: 8 }),
    покупкаБилета: hasMany('i-i-s-kyrs9-покупка-билета', 'Покупка билета', {
      покупатель: belongsTo('i-i-s-kyrs9-покупатель', 'Покупатель', {
        фИО: attr('Покупатель', { index: 1 }),
        банковскийСчет: attr('Банковский счет', { index: 2 })
      }, { index: 0, displayMemberPath: 'покупатель' }),
      датаПоездки: attr('Дата поездки', { index: 3 }),
      место: attr('Место', { index: 4 })
    }),
    возвратБилета: hasMany('i-i-s-kyrs9-возврат-билета', 'Возврат билета', {
      покупатель: belongsTo('i-i-s-kyrs9-покупатель', 'Покупатель', {
        фИО: attr('Покупатель', { index: 1 }),
        банковскийСчет: attr('Банковский счет', { index: 2 })
      }, { index: 0, displayMemberPath: 'покупатель' }),
      датаПокупки: attr('Дата покупки', { index: 3 }),
      причинаВозв: attr('Причина аозврата', { index: 4 })
    })
  });

  modelClass.defineProjection('ПокупИлиВозвБL', 'i-i-s-kyrs9-покуп-или-возв-б', {
    дата: attr('Дата', { index: 0 }),
    пунктОтправ: attr('Пункт отправления', { index: 1 }),
    пунктНазнач: attr('Пункт назначения', { index: 2 }),
    перевозчик1: belongsTo('i-i-s-kyrs9-перевозчик1', 'Перевозчик', {
      наименование: attr('Перевозчик', { index: 3 })
    }, { index: -1, hidden: true }),
    билетнаяКасса: belongsTo('i-i-s-kyrs9-билетная-касса', 'Место расчета', {
      наименование: attr('Место расчета', { index: 4 }),
      адрес: attr('Адрес расчета', { index: 5 })
    }, { index: -1, hidden: true }),
    статус: attr('Статус', { index: 6 }),
    покупкаБилета: hasMany('i-i-s-kyrs9-покупка-билета', 'Покупка билета', {
      покупатель: belongsTo('i-i-s-kyrs9-покупатель', 'Покупатель', {
        фИО: attr('Покупатель', { index: 1 }),
        банковскийСчет: attr('Банковский счет', { index: 2 })
      }, { index: 0, displayMemberPath: 'покупатель' }),
      датаПоездки: attr('Дата поездки', { index: 3 }),
      место: attr('Место', { index: 4 })
    }),
    возвратБилета: hasMany('i-i-s-kyrs9-возврат-билета', 'Возврат билета', {
      покупатель: belongsTo('i-i-s-kyrs9-покупатель', 'Покупатель', {
        фИО: attr('Покупатель', { index: 1 }),
        банковскийСчет: attr('Банковский счет', { index: 2 })
      }, { index: 0, displayMemberPath: 'покупатель' }),
      датаПокупки: attr('Дата покупки', { index: 3 }),
      причинаВозв: attr('Причина аозврата', { index: 4 })
    })
  });
};
