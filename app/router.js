import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tournament-detail', { 
    path: '/tournament-detail/:tournament_id' 
  }, function() {});
});

export default Router;
