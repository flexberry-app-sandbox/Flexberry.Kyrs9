import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kyrs9-перевозчик1', 'Unit | Serializer | i-i-s-kyrs9-перевозчик1', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kyrs9-перевозчик1',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kyrs9-статус',

    'model:i-i-s-kyrs9-билетная-касса',
    'model:i-i-s-kyrs9-возврат-билета',
    'model:i-i-s-kyrs9-перевозчик1',
    'model:i-i-s-kyrs9-покуп-или-возв-б',
    'model:i-i-s-kyrs9-покупатель',
    'model:i-i-s-kyrs9-покупка-билета',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
