import Ember from 'ember';
import moment from 'moment';
let {get, set, computed } = Ember;
export default Ember.Component.extend({
  store: Ember.inject.service(),
  didReceiveAttrs() {
    this._super(...arguments);
    const tournamentId = get(this, 'tournament').id;
    return Ember.RSVP.hash({     
      tournamentFases: get(this, 'store').query('tournamentFase', {tournamentId: tournamentId}),
    })
    .then(hash => {  
      set(this, 'tournamentFases', hash.tournamentFases);
      set(this, "fasesCharged", true);
    });    
  },
  groupFases: computed('fasesCharged', function (){
    const tournamentFases = get(this, 'tournamentFases');
    const groupFases = get(this,'fasesCharged') ? tournamentFases.filter((fase)=> {
      return get(fase, 'isGroups') && ! get(fase, 'isQualification');
    }): [];
    return groupFases;
  }),
  qualificationFases: computed('fasesCharged', function (){
    const tournamentFases = get(this, 'tournamentFases');
    const groupFases = get(this,'fasesCharged') ? tournamentFases.filter((fase)=> {
      return get(fase, 'isQualification');
    }): [];
    return groupFases;
  }),
  progressValue: computed('tournament.startDate', 'tournament.endDate', 'tournament', function (){
    const tournament = get(this, 'tournament');
    const startDate = get(tournament, 'startDate');
    const endDate = get(tournament, 'endDate');
    const nowDate = new Date();
    const duration = moment(endDate).diff(startDate, 'days');
    const daysToNow = moment(nowDate).diff(startDate, 'days');
    return duration === 0 ? "0%" : (daysToNow > duration ? "100%" : parseInt((daysToNow / duration) * 100 ).toString() + "%");
  }),


});
