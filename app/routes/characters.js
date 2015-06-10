import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { name: 'Spider-Man' },
      { name: 'Avengers' },
      { name: 'Iron Man' },
      { name: 'Hulk' }
    ];
  }
});
