import DS from 'ember-data';
import Ember from 'ember';
let {get, computed } = Ember;

export default DS.Model.extend({
  tournamentId: DS.attr('number'),
  faseId: DS.attr('number'),
  groupId: DS.attr('number'),
  teamOneId: DS.attr('number'),
  teamOne: DS.attr(),
  teamOneScore: DS.attr('number'),
  teamTwoId: DS.attr('number'),
  teamTwo: DS.attr(),
  teamTwoScore: DS.attr('number'),
  goalDiference: computed('teamOneScore','teamTwoScore', function() {
    return get(this, 'teamOneScore') &&  get(this, 'teamTwoScore') ? get(this, 'teamOneScore') - get(this, 'teamTwoScore') : null;
  }),
  eventStartDate: DS.attr('string')
});
