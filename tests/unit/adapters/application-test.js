import { moduleFor, test } from 'ember-qunit';

let adapter;

moduleFor('adapter:application', 'Unit | Adapter | application', {
  // Specify the other units that are required for this test.
  needs: ['service:marvel'],
  beforeEach() {
    adapter = this.subject();
  }
});

test('it must have a host', function(assert) {
  assert.equal(adapter.get('host'), 'http://gateway.marvel.com:80');
});

test('it must have a namespace', function(assert) {
  assert.equal(adapter.get('namespace'), 'v1/public');
});

test('it must build a url', function(assert) {
  var marvel = adapter.get('marvel');
  marvel.setKey('MARVEL_API_PUBLIC_KEY');
  assert.ok(adapter.buildURL('character').match(/http:\/\/gateway.marvel.com:80\/v1\/public\/characters\?ts=\d+\&apikey=MARVEL_API_PUBLIC_KEY\&hash=[a-z0-9]+/));
});
