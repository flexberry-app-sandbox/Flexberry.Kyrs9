import {
  defineNamespace,
  defineProjections,
  Model as ВозвратБилетаMixin
} from '../mixins/regenerated/models/i-i-s-kyrs9-возврат-билета';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ВозвратБилетаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
