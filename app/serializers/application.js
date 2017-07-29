import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend({
  serializeIntoHash: function(data, type, record, options) {
    Ember.merge(data , this.serialize(record, options));
  },
  serialize: function(record) {
    const recordId = record.id;
    const json = this._super.apply(this, arguments); // Get default serialization
    if (recordId) {
      json.id = record.id;  // tack on the id
    }
    return json;
  }
});