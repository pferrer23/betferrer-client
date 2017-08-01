export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
  this.timing = 400;      // delay for each request, automatically set to 0 during testing
  this.get('api/account/userInfo', () =>{
    return {
      "id": "akjsdh+asdfasdf-sadf58asdfasdgdfgkj8965+",
      "Email": "Pablo Ferrer B.",
      "HasRegistered": true,
      "LoginProvider": null
    };

  });
  this.post('/token', ()=>{
    return {
      "access_token":"eYWcR2FBs0E3upxx4XWonDoZOjGhcknN-nlpKF6-dPCtVkuoF1wmq-OE8HYpROo1NLGxsRPZjOOOKB9VYhXl-PFptlgjm10GXztwX3_YtFQBGOn0FTGlZrSsihOgvPN6kl_tkysKzgXdqgNJoLHeTLjP3LpBWGhTkMCls0pzalj32v0igCTQ13JhTjsazL6T4y-w-VixV1FX3gUJff95qysh9_LPb8Jsfu06Y41Jj3OcyKoGUcA247Uaxp_wnlWh2K4zgMOQZA0MZ3OhoJHPLSjvYbnOcAuiGvY0nlMODdeVCfjvyw1kFDIBKPaOh-ripwLdm5LHFzAXxqZssgbVyQ8_s1VBINSsZRhyRt2c3DTfP3UZUZ8G0okWCAw1h9-8j-zWWqkP0Jje8bRGaVWDhRl791TGgnVGJCjNkFHZ-MgiXRhkbFya717dwhQJql2ac3TfQOSEMQ4IEjq2ml1bogxVdKWcMeNn5Ih_Emwa9ac",
      "token_type":"bearer",
      "expires_in":1209599,
      "userName":"pablo",
      ".issued":"Mon, 27 Sep 2017 02:21:59 GMT",
      ".expires":"Mon, 03 Oct 2076 02:21:59 GMT",
    };
  });
  this.get('api/tournaments/:id', (db, request) =>{
    const id = request.params.id;
    return {
      id: id,
      tournamentName: "Copa FIFA Mundial",
      tournamentDescription: "Russia 2018",
      tournamentLogo: "https://2.bp.blogspot.com/-Vwr_16qyqsc/WU_KkMCATbI/AAAAAAABJvU/P6SOCMKqzbg3XH4L3gqv42-8KQvTYSXigCLcBGAs/s1600/Copa%2BMundial%2BRusia%2B2018.png",
      startDate: "06-06-2017",
      endDate:  "07-15-2017",
    }   
  });
  this.get('api/tournaments', () =>{
    return [
      {
        id: 1,
        tournamentName: "Copa FIFA Mundial",
        tournamentDescription: "Russia 2018",
        tournamentLogo: "https://2.bp.blogspot.com/-Vwr_16qyqsc/WU_KkMCATbI/AAAAAAABJvU/P6SOCMKqzbg3XH4L3gqv42-8KQvTYSXigCLcBGAs/s1600/Copa%2BMundial%2BRusia%2B2018.png",
        startDate: "06-06-2018",
        endDate:  "07-15-2018",
      },
       {
        id: 2,
        tournamentName: "Liga Aguila Clausura",
        tournamentDescription: "Futbol Profesional Colombiano",
        tournamentLogo: "http://www.laligaaguila.com/sites/all/themes/ligaaguila/img/logo-aguila.png",
        startDate: "06-06-2018",
        endDate:  "07-15-2018",
      }
    ];    
  });
  this.get('api/tournamentFases', (db, re) =>{
    return [
      {
        id: 1,
        tournamentId: 1,
        faseName: "Fase de Grupos",
        pointsFactor: 1,
        isGroups: true,
        isQualification:  false,
        faseGroups: [
          {
            id: 1,
            faseId: 1,
            groupName: "Grupo A",
            groupTeams: [
              {
                id: 1,
                groupId: 1,
                teamName: "Brasil",
                abreviation: "br"
              },
              {
                id: 2,
                groupId: 1,
                teamName: "Argentina",
                abreviation: "ar"
              },
              {
                id: 3,
                groupId: 1,
                teamName: "Colombia",
                abreviation: "co"
              },
              {
                id: 4,
                groupId: 1,
                teamName: "Chile",
                abreviation: "cl"
              }
            ]
          },
          {
            id: 2,
            faseId: 1,
            groupName: "Grupo B",
            groupTeams:  [
              {
                id: 1,
                groupId: 1,
                teamName: "Brasil",
                abreviation: "br"
              },
              {
                id: 2,
                groupId: 1,
                teamName: "Argentina",
                abreviation: "ar"
              },
              {
                id: 3,
                groupId: 1,
                teamName: "Colombia",
                abreviation: "co"
              },
              {
                id: 4,
                groupId: 1,
                teamName: "Chile",
                abreviation: "cl"
              }
            ]
          },
          {
            id: 3,
            faseId: 1,
            groupName: "Grupo C",
            groupTeams:  [
              {
                id: 1,
                groupId: 1,
                teamName: "Brasil",
                abreviation: "br"
              },
              {
                id: 2,
                groupId: 1,
                teamName: "Argentina",
                abreviation: "ar"
              },
              {
                id: 3,
                groupId: 1,
                teamName: "Colombia",
                abreviation: "co"
              },
              {
                id: 4,
                groupId: 1,
                teamName: "Chile",
                abreviation: "cl"
              }
            ]
          }
        ]
      },
      {
        id: 2,
        tournamentId: 1,
        faseName: "Octavos de Final",
        pointsFactor: 1,
        isGroups: false,
        isQualification:  true,
        faseGroups: []
      },
      {
        id: 3,
        tournamentId: 1,
        faseName: "Cuartos de Final",
        pointsFactor: 1,
        isGroups: false,
        isQualification:  true,
        faseGroups: [],
      },
      {
        id: 4,
        tournamentId: 1,
        faseName: "Semifinal",
        pointsFactor: 1,
        isGroups: false,
        isQualification:  true,
        faseGroups: [],
      },
      {
        id: 5,
        tournamentId: 1,
        faseName: "Final",
        pointsFactor: 1,
        isGroups: false,
        isQualification:  true,
        faseGroups: [],
      },
    ];    
  });
  this.get('api/userTournaments', () =>{
    return [
      {
        id: 1,
        tournamentId: 1,
        personalizedName: "Polla #1",
        active: true,
        boucherURL: "",
        tournament: {
          id: 1,
          tournamentName: "Copa FIFA Mundial",
          tournamentDescription: "Russia 2018",
          tournamentLogo: "https://2.bp.blogspot.com/-Vwr_16qyqsc/WU_KkMCATbI/AAAAAAABJvU/P6SOCMKqzbg3XH4L3gqv42-8KQvTYSXigCLcBGAs/s1600/Copa%2BMundial%2BRusia%2B2018.png",
          startDate: "06-06-2018",
          endDate:  "07-15-2018",
        }
      },
      {
        id: 2,
        tournamentId: 2,
        personalizedName: "Polla #2",
        active: false,
        boucherURL: "",
        tournament:  {
          id: 2,
          tournamentName: "Liga Aguila Clausura",
          tournamentDescription: "Futbol Profesional Colombiano",
          tournamentLogo: "http://www.laligaaguila.com/sites/all/themes/ligaaguila/img/logo-aguila.png",
          startDate: "06-06-2018",
          endDate:  "07-15-2018",
        }
      },
      {
        id: 3,
        tournamentId: 1,
        personalizedName: "Polla #3",
        active: false,
        boucherURL: "",
        tournament: {
          id: 1,
          tournamentName: "Copa FIFA Mundial",
          tournamentDescription: "Russia 2018",
          tournamentLogo: "https://2.bp.blogspot.com/-Vwr_16qyqsc/WU_KkMCATbI/AAAAAAABJvU/P6SOCMKqzbg3XH4L3gqv42-8KQvTYSXigCLcBGAs/s1600/Copa%2BMundial%2BRusia%2B2018.png",
          startDate: "06-06-2018",
          endDate:  "07-15-2018",
        }
      },
    ];    
  });

  this.get('api/events', () =>{
    return [
      {
        id: 1,
        tournamentId: 1,
        faseId: 1,
        groupId: 1,
        teamOneId: 1,
        teamOne: {
          id: 1,
          groupId: 1,
          teamName: "Brasil",
          abreviation: "br"
        },
        teamOneScore: 1,
        teamTwoId: 2,
        teamTwo: {
            id: 2,
            groupId: 1,
            teamName: "Argentina",
            abreviation: "ar"   
        },
        teamTwoScore: 1,
        eventStartDate: "06-06-2018",
      },
      {
        id: 2,
        tournamentId: 1,
        faseId: 1,
        groupId: 1,
        teamOneId: 0,
        teamOne: {
                id: 3,
                groupId: 1,
                teamName: "Colombia",
                abreviation: "co"
              },
        teamOneScore: 3,
        teamTwoId: 4,
        teamTwo: {
                id: 4,
                groupId: 1,
                teamName: "Chile",
                abreviation: "cl"
              },
        teamTwoScore: 1,
        eventStartDate: "06-06-2018",
      },
      {
        id: 3,
        tournamentId: 1,
        faseId: 1,
        groupId: 1,
        teamOneId: 1,
        teamOne: {
          id: 1,
          groupId: 1,
          teamName: "Brasil",
          abreviation: "br"
        },
        teamOneScore: 1,
        teamTwoId: 3,
        teamTwo: {
          id: 3,
          groupId: 1,
          teamName: "Colombia",
          abreviation: "co"
        },
        teamTwoScore: 10,
        eventStartDate: "06-06-2018",
      },{
        id: 4,
        tournamentId: 1,
        faseId: 1,
        groupId: 1,
        teamOneId: 2,
        teamOne:{
            id: 2,
            groupId: 1,
            teamName: "Argentina",
            abreviation: "ar"   
        },
        teamOneScore: 1,
        teamTwoId: 4,
        teamTwo: {
                id: 4,
                groupId: 1,
                teamName: "Chile",
                abreviation: "cl"
              },
        teamTwoScore: 5,
        eventStartDate: "06-06-2018",
      },{
        id: 5,
        tournamentId: 1,
        faseId: 1,
        groupId: 1,
        teamOneId: 1,
        teamOne: {
          id: 1,
          groupId: 1,
          teamName: "Brasil",
          abreviation: "br"
        },
        teamOneScore: 0,
        teamTwoId: 4,
        teamTwo: {
                id: 4,
                groupId: 1,
                teamName: "Chile",
                abreviation: "cl"
              },
        teamTwoScore: 4,
        eventStartDate: "06-06-2018",
      }
    ];
  });
}
