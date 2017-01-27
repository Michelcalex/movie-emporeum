const app = angular.module('MovieApp', []);


app.controller('GetMoviesController', function($scope, MovieService) {
    $scope.movies = MovieService.getAll();
});

app.factory('MovieService', function($http) {
    const movies = [];

    $http.get('https://api.themoviedb.org/3/discover/movie?api_key=1c3ab4a786313cd93564b50c97e21734&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1').then(function (response) {
        angular.copy(response.data.results, movies);
    });

    return {
        add(movie) {
            movies.push(movie);
        },
        getAll() {
            return movies;
        },
    }
});