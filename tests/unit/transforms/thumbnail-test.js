import { moduleFor, test } from 'ember-qunit';

moduleFor('transform:thumbnail', 'Unit | Transform | thumbnail', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

test('it transforms the provided object into a single url', function(assert) {
  const transform = this.subject();
  const obj = {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
    extension: 'jpg'
  };

  const uri = transform.deserialize(obj);
  assert.equal(uri, 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg');
});
