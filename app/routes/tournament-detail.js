import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    const tournamentId = this.paramsFor('tournament-detail').tournament_id;
    return Ember.RSVP.hash({
      tournament: this.store.findRecord('tournament', tournamentId),
    });
  },
  actions: {
    transitionToHome() {
      this.transitionTo("application");
    }
  }
});