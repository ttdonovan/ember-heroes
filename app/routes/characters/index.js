import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },

  model(params) {
    if (Ember.isPresent(params.search)) {
      return this.store.find('character', {
        nameStartsWith: params.search
      });
    } else {
      return this.store.find('character');
    }
  },

  actions: {
    search() {
      this.transitionTo('characters.index');
    }
  }
});
