var app = angular.module("StarWarsApp");
app.controller("FilmCtrl", ["$scope", "$stateParams", "FilmService",
    function($scope, $stateParams, FilmService) {
  $scope.message = "FilmCtrl " + $stateParams.id;
  $scope.film = FilmService.getFilmDetails($stateParams.id);
}]);
