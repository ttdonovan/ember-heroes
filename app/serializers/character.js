import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extract (store, type, payload, id, requestType) {
    let results = {};
    results['characters'] = payload.data.results;
    return this._super(store, type, results, id, requestType);
  }
});
