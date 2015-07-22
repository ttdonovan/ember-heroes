import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function(serialized) {
    return `${serialized.path}.${serialized.extension}`;
  },

  serialize: function(deserialized) {
    return deserialized;
  }
});
