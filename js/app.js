angular.module("StarWarsApp", ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/home/home-view.html',
      controller: 'HomeCtrl'
    })
    .state('film', {
      url: '/film/:id',
      templateUrl: 'js/film-detail/film-detail-view.html',
      controller: 'FilmCtrl'
    })
  }]);
