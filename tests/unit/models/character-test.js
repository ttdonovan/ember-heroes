import { moduleForModel, test } from 'ember-qunit';

moduleForModel('character', 'Unit | Model | character', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  const model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
