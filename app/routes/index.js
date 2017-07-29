import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    transitionToTrounamentDetail(model) {
      this.transitionTo("tournament-detail", model.id);
    }
  }
});
