import Ember from 'ember';
import ENV from 'heroes/config/environment';

let _private = ENV.marvelApiPrivateKey;

export default Ember.Service.extend({
  _key: ENV.marvelApiPublicKey,

  setKey (key) {
    this.set('_key', key);
  },

  signature: Em.computed('_key', function() {
    let apiKey = this.get('_key');
    let ts = new Date().valueOf();
    let privKey = _private;
    let hash = md5(ts + privKey + apiKey);

    return `?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
  })
});
