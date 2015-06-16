import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'heroes/tests/helpers/start-app';

let application;

module('Acceptance | Character', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /character/1009610 show character detail for Spider-Man', function(assert) {
  assert.expect(2);

  visit('/characters/1009610');

  andThen(function() {
    assert.equal(currentURL(), '/characters/1009610');
    assert.equal(find('h2:contains("Spider-Man")').length, 1);
  });
});
