myApp.directive("bookData",function(){
	return {
		resrtict : "E",
		templateUrl : "./views/book-data.html",
		controller : function($scope,$http){
			$http.get("http://www.anapioficeandfire.com/api/books").success(function (response) {
		        $scope.firstData = response;
		    }); 
		}
	}
});
myApp.directive("houseData",function(){
	return {
		resrtict : "E",
		templateUrl : "./views/house-data.html",
		controller : function($scope,$http){
			$http.get("http://www.anapioficeandfire.com/api/houses").success(function (houseResponse) {
          		$scope.houseData = houseResponse;
      		}); 
		}
	}
});
myApp.directive("characterData",function(){
	return {
		resrtict : "E",
		templateUrl : "./views/character-data.html",
		controller : function($scope,$http){
			$http.get("http://www.anapioficeandfire.com/api/characters").success(function (characterResponse) {
          		$scope.characterData = characterResponse;
      		}); 
		}
	}
});
