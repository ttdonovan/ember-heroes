import { moduleFor, test } from 'ember-qunit';

moduleFor('service:marvel', 'Unit | Service | marvel', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

test('it has a signature', function(assert) {
  const service = this.subject();
  service.setKey('MARVEL_API_PUBLIC_KEY');
  assert.ok(service.get('signature').match(/\?ts=\d+\&apikey=MARVEL_API_PUBLIC_KEY\&hash=[a-z0-9]+/));
});
