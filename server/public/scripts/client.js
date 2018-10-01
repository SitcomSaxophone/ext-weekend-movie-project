console.log('js');

const app = angular.module('MovieApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // .when('/home', {
    //     template: 'Welcome!',
    //     controller: 'HomeController as vm'
    // })

        //movies
        .when('/movies', {
            templateUrl: '../views/movies.html',
            controller: 'MovieController as vm'
        })

        // genres
        .when('/genres', {
            templateUrl: '../views/genres.html',
            controller: 'GenreController as vm'
        })

}]);