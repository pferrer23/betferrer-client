import DS from 'ember-data';

export default DS.Model.extend({
  tournamentName: DS.attr("string"),
  tournamentDescription: DS.attr("string"),
  tournamentLogo: DS.attr("string"),
  startDate:  DS.attr("date"),
  endDate:   DS.attr("date"),
});
