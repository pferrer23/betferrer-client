import DS from 'ember-data';

export default DS.Model.extend({
  tournamentId: DS.attr("number"),
  faseName: DS.attr("string"),
  pointsFactor: DS.attr("number"),
  isGroups: DS.attr("boolean"),
  isQualification: DS.attr("boolean"),
  faseGroups: DS.attr(),
});
