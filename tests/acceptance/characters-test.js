import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'heroes/tests/helpers/start-app';

var application;

module('Acceptance | characters', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /', function(assert) {
  assert.expect(2);

  visit('/');
  click('a:contains(Characters)');

  andThen(function() {
    assert.equal(currentURL(), '/characters');

    let characters = find('.character');
    assert.equal(characters.length, 20);
  });
});
