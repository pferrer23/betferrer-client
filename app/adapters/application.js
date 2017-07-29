import DS from 'ember-data';
import ENV from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
	host: ENV.apiHost,
  authorizer: 'authorizer:application',
  pathForType: function(modelName){
    if (modelName === 'user'){
      return 'account/userInfo';
    }
    else {
      
      return this._super(...arguments);
    }
  },

});

