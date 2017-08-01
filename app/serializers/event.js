import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { events : payload }; 
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
