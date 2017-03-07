
  var myApp = angular.module('blogApp', ['ngRoute']);
myApp.controller('mainController', function($http) {
      var main=this;
        $http.get("http://www.anapioficeandfire.com/api/books")
        .success(function (response) {
          main.firstData = response;
      }); 
      $http.get("http://www.anapioficeandfire.com/api/houses")
        .success(function (houseResponse) {
          main.houseData = houseResponse;
      });  
      $http.get("http://www.anapioficeandfire.com/api/characters")
        .success(function (characterResponse) {
          main.characterResponse = characterResponse;
      });   
        
    });


myApp.controller('bookDetailsView',['$http','$routeParams',function($http,$routeParams) {
  var main = this;
  main.character = [];
  main.povCharacter = [];
      main.keyWord=$routeParams.search;
      $http.get("http://www.anapioficeandfire.com/api/books").success(function (response) {     
      for(w in response){           
                if(response[w].name == main.keyWord){
                  main.responseData = response[w];
                  for(x in response[w].characters){
                  $http.get(response[w].characters[x]).success(function (data) {
                    main.character.push(data);
                  });
                  }
                  for(x in response[w].povCharacters){
                  $http.get(response[w].povCharacters[x]).success(function (data) {
                    main.povCharacter.push(data);
                  });
                }
                }
        }
       console.log(main.character);
       });
  }// end load all blogs
]); 


myApp.controller('houseDetailsView',['$http','$routeParams',function($http,$routeParams) {
  var main = this;
      main.houseKeyWord=$routeParams.searchHouse;
      $http.get("http://www.anapioficeandfire.com/api/houses").success(function (responseHouseData) {     
      for(w in responseHouseData){ 
                if(responseHouseData[w].name == main.houseKeyWord){
                  main.houseDetails = responseHouseData[w];
                  
                }
            }
          console.log(main.houseDetails);
       });
  }// end load all blogs
]); 