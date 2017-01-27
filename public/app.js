(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const app = angular.module('MovieApp', []);


app.controller('AddMovieController', function ($scope, MovieService) {
    console.log('Add Movie Controller here');
    $scope.name = '';
    $scope.releaseDate = '';
    $scope.genre = '';

    $scope.movies = MovieService.getMovies();

    $scope.addMovie = function () {
        const eachMovie = MovieService.addMovie($scope.name, $scope.releaseDate, $scope.genre)
        $scope.name = '';
        $scope.releaseDate = '';
        $scope.genre = '';
    }

   // console.log(MovieService.getMovies());
});


app.controller('ListMovieController', function ($scope, MovieService) {
    $scope.movies = MovieService.getMovies();

    $scope.remove = function(id) {
        $scope.movies.splice(id, 1);
    };

    $scope.ratingBtn = function (thought, target) {
        console.log('You are clicking on rating');
        
        target.rating = thought;
    }   
});




app.factory('MovieService', function() {
    let movies = [];

    return {
        addMovie: function(name, date, genre) {
            let movie = {
                name,
                date,
                genre, 
                rating: null,
            };
            movies.push(movie);
        },

        getMovies: function() {
            return movies;
        },
    };
});
},{}]},{},[1]);
