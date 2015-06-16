import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  marvel: Em.inject.service('marvel'),

  host: 'http://gateway.marvel.com:80',
  namespace: 'v1/public',

  buildURL(type, id, snapshot) {
    return this._super(type, id, snapshot) + this.get('marvel.signature');
  }
});
