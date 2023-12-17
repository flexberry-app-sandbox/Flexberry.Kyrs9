import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKyrs9БилетнаяКассаLForm from './forms/i-i-s-kyrs9-билетная-касса-l';
import IISKyrs9Первозчик1LForm from './forms/i-i-s-kyrs9-первозчик1-l';
import IISKyrs9ПокупИлиВозвБLForm from './forms/i-i-s-kyrs9-покуп-или-возв-б-l';
import IISKyrs9ПокупательLForm from './forms/i-i-s-kyrs9-покупатель-l';
import IISKyrs9БилетнаяКассаEForm from './forms/i-i-s-kyrs9-билетная-касса-e';
import IISKyrs9ВозвратБилетаEForm from './forms/i-i-s-kyrs9-возврат-билета-e';
import IISKyrs9Перевозчик1EForm from './forms/i-i-s-kyrs9-перевозчик1-e';
import IISKyrs9ПокупИлиВозвБEForm from './forms/i-i-s-kyrs9-покуп-или-возв-б-e';
import IISKyrs9ПокупательEForm from './forms/i-i-s-kyrs9-покупатель-e';
import IISKyrs9ПокупкаБилетаEForm from './forms/i-i-s-kyrs9-покупка-билета-e';
import IISKyrs9БилетнаяКассаModel from './models/i-i-s-kyrs9-билетная-касса';
import IISKyrs9ВозвратБилетаModel from './models/i-i-s-kyrs9-возврат-билета';
import IISKyrs9Перевозчик1Model from './models/i-i-s-kyrs9-перевозчик1';
import IISKyrs9ПокупИлиВозвБModel from './models/i-i-s-kyrs9-покуп-или-возв-б';
import IISKyrs9ПокупательModel from './models/i-i-s-kyrs9-покупатель';
import IISKyrs9ПокупкаБилетаModel from './models/i-i-s-kyrs9-покупка-билета';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kyrs9-билетная-касса': IISKyrs9БилетнаяКассаModel,
    'i-i-s-kyrs9-возврат-билета': IISKyrs9ВозвратБилетаModel,
    'i-i-s-kyrs9-перевозчик1': IISKyrs9Перевозчик1Model,
    'i-i-s-kyrs9-покуп-или-возв-б': IISKyrs9ПокупИлиВозвБModel,
    'i-i-s-kyrs9-покупатель': IISKyrs9ПокупательModel,
    'i-i-s-kyrs9-покупка-билета': IISKyrs9ПокупкаБилетаModel
  },

  'application-name': '',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': '',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },

      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kyrs9-билетная-касса-l': IISKyrs9БилетнаяКассаLForm,
    'i-i-s-kyrs9-первозчик1-l': IISKyrs9Первозчик1LForm,
    'i-i-s-kyrs9-покуп-или-возв-б-l': IISKyrs9ПокупИлиВозвБLForm,
    'i-i-s-kyrs9-покупатель-l': IISKyrs9ПокупательLForm,
    'i-i-s-kyrs9-билетная-касса-e': IISKyrs9БилетнаяКассаEForm,
    'i-i-s-kyrs9-возврат-билета-e': IISKyrs9ВозвратБилетаEForm,
    'i-i-s-kyrs9-перевозчик1-e': IISKyrs9Перевозчик1EForm,
    'i-i-s-kyrs9-покуп-или-возв-б-e': IISKyrs9ПокупИлиВозвБEForm,
    'i-i-s-kyrs9-покупатель-e': IISKyrs9ПокупательEForm,
    'i-i-s-kyrs9-покупка-билета-e': IISKyrs9ПокупкаБилетаEForm
  },

});

export default translations;
