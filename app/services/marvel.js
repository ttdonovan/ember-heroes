import Ember from 'ember';
import ENV from 'heroes/config/environment';

const _private = ENV.marvelApiPrivateKey;

export default Ember.Service.extend({
  _key: ENV.marvelApiPublicKey,

  setKey(key) {
    this.set('_key', key);
  },

  signature: Em.computed('_key', function() {
    const apiKey = this.get('_key');
    const ts = new Date().valueOf();
    const privKey = _private;
    const hash = md5(ts + privKey + apiKey);

    return `?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
  })
});
