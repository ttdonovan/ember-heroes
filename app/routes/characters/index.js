import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },

  model(params) {
    if (Ember.isPresent(params.search)) {
      return this.store.query('character', {
        nameStartsWith: params.search
      });
    } else {
      return this.store.findAll('character');
    }
  },

  actions: {
    search() {
      this.transitionTo('characters.index');
    }
  }
});
