import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': '',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },

      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
