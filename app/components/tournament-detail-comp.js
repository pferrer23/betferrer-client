import Ember from 'ember';
import moment from 'moment';
let {get, set, computed, setProperties } = Ember;
export default Ember.Component.extend({
  store: Ember.inject.service(),
  customMessages: {
    "searchLabel": "Buscar:",
    "tableSummary": "Mostrando %@ - %@ de %@",
    "noDataToShow": "No Hay Registros"
  },
  customClasses: {
    "table": "table table-responsive table-striped",
  },
  groupColumns: [
    {
      "propertyName": "teamName",
      "title": "Equipo",
      "template": "custom/flag-and-name"
    },{
      "propertyName": "playedGames",
      "title": "PJ",
      className: "points-column-small"
    },
    {
      "propertyName": "wonGames",
      "title": "G",
      className: "points-column-small"
    },{
      "propertyName": "drawGames",
      "title": "E",
      className: "points-column-small"
    },
    {
      "propertyName": "lostGames",
      "title": "P",
      className: "points-column-small"
    },{
      "propertyName": "goalDiference",
      "title": "Gls.",
      "sortPrecedence": 1,
      sortedBy: "goalDiference",
      sortDirection: "desc",
      className: "points-column-big",
      "template": "custom/goals-balance"
    }
    ,{
      "propertyName": "points",
      "title": "Pts.",
      "sortPrecedence": 0,
      sortedBy: "points",
      sortDirection: "desc",
      className: "points-column"
    }
  ],

  





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
  compareValues(key, order='asc') {
    return function(a, b) {
      if(!a.hasOwnProperty(key) || 
        !b.hasOwnProperty(key)) {
        return 0; 
      }
      
      const varA = (typeof a[key] === 'string') ? 
        a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ? 
        b[key].toUpperCase() : b[key];
        
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order == 'desc') ? 
        (comparison * -1) : comparison
      );
    };
  },
  groupFases: computed('fasesCharged', function (){
    const tournamentFases = get(this, 'tournamentFases');
    const groupFases = get(this,'fasesCharged') ? tournamentFases.filter((fase)=> {
      return get(fase, 'isGroups') && ! get(fase, 'isQualification');
    }): [];
    if (groupFases.length > 0) {
      const events = get(this, "events");
      groupFases.forEach((faseWithGroup) => {
        const faseGroups = get(faseWithGroup, "faseGroups");
        faseGroups.forEach((group) => {
          get(group, "groupTeams").forEach((team)=> {
            let points = 0, favorGoals= 0, againstGoals= 0, playedGames= 0, wonGames= 0, drawGames= 0, lostGames = 0, goalDiference=0;
            // debugger
            const localEvents = events.filter((event) => {
              if (get(event, "teamOneId") === get(team, "id") && get(group, "id") === get(event, "groupId")) {
                const difference = get(event, "teamOneScore") !== null && get(event, "teamTwoScore") !== null ? get(event, "teamOneScore") - get(event, "teamTwoScore")  : null;
                if (difference !== null) {
                  goalDiference += difference;
                  favorGoals += get(event, "teamOneScore");
                  againstGoals += get(event, "teamTwoScore");
                  playedGames += 1;
                  if (difference > 0) {
                    points += 3;
                    wonGames += 1;
                  }
                  else if (difference === 0) {
                    points += 1;
                    drawGames += 1;
                  }
                  else {
                    lostGames += 1;
                  }
                }
                return true;
              }
              else {return false;}
            });
            const awayEvents = events.filter((event) => {
              if (get(event, "teamTwoId") === get(team, "id") && get(group, "id") === get(event, "groupId")) {
                const difference = get(event, "teamOneScore") !== null && get(event, "teamTwoScore") !== null ? get(event, "teamOneScore") - get(event, "teamTwoScore")  : null;
                if (difference !== null) {
                  goalDiference -= difference;
                  favorGoals += get(event, "teamTwoScore");
                  againstGoals += get(event, "teamOneScore");
                  playedGames += 1;
                  if (difference < 0) {
                    points += 3;
                    wonGames += 1;
                  }
                  else if (difference === 0) {
                    points += 1;
                    drawGames += 1;
                  }
                  else {
                    lostGames += 1;
                  }
                }
                return true;
              }
              else {return false;}
            });
            setProperties(team, {
              localEvents,
              awayEvents,
              favorGoals,
              playedGames,
              points,
              wonGames,
              drawGames,
              lostGames,
              againstGoals,
              goalDiference
            });
          });

          
          get(group, "groupTeams").sort(this.compareValues('points', 'desc'), this.compareValues('goalDiference', 'desc'));
        });
        
      });
    }
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
