import Ember from 'ember';
const {A, get, set, setProperties} = Ember;

export default Ember.Component.extend({
  store: Ember.inject.service(),
  init() {
    this._super(...arguments);
    return Ember.RSVP.hash({     
      tournaments: get(this, 'store').findAll('tournament'),
      userTournaments: get(this, 'store').findAll('userTournament'),
    })
    .then(hash => {  
      set(this, 'tournaments', hash.tournaments);
      set(this, 'userTournaments', hash.userTournaments);
    });    
  },
});
