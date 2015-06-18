import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'heroes/tests/helpers/start-app';

let application;

module('Acceptance | Characters', {
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
  click('a:contains("Characters")');

  andThen(function() {
    assert.equal(currentURL(), '/characters');

    const characters = find('.character');
    assert.equal(characters.length, 20);
  });
});

test('visiting /characters and search for \'Iron Man\`', function(assert) {
  assert.expect(2);

  visit('/characters');
  fillIn('input:text', 'Iron Man');
  click('input:submit');

  andThen(function() {
    assert.equal(currentURL(), '/characters?search=Iron%20Man');
    assert.equal(find('.character:contains("Iron Man (Marvel Heroes)")').length, 1);
  });
});
