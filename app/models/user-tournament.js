import DS from 'ember-data';

export default DS.Model.extend({
  tournamentId: DS.attr("number"),
  personalizedName:  DS.attr("string"),
  active: DS.attr("boolean"),
  boucherURL: DS.attr("string"),
  tournament:  DS.attr(),
});
