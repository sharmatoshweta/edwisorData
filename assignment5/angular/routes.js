myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl     : 'views/index-view.html',
            controller      : 'mainController',
            controllerAs    : 'dataToPresent'
        })
        .when('/bookDetails/:search',{
            templateUrl     : 'views/bookDetails-view.html',
            controller      : 'bookDetailsView',
            controllerAs    : 'bookDetails'
        })
        .when('/houseDetails/:searchHouse',{
            templateUrl     : 'views/houseDetails-view.html',
            controller      : 'houseDetailsView',
            controllerAs    : 'houseDetails'
        })
        .otherwise(
            {
                templateUrl     : 'views/index-view.html'
            }
        );
}]);