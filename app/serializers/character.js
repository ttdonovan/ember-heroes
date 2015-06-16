import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extract(store, type, payload, id, requestType) {
    const results = {};
    results['characters'] = payload.data.results;
    return this._super(store, type, results, id, requestType);
  },

  extractSingle(store, type, payload, id) {
    const results = {};
    results['character'] = payload.characters[0];
    return this._super(store, type, results, id);
  }
});
