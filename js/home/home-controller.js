var app = angular.module("StarWarsApp");
app.controller("HomeCtrl", ["$scope", "FilmService",
    function($scope, FilmService) {
  $scope.message = "Home";
  $scope.newFilm = "";

  FilmService.getFilms().then(function(films) {
    console.log("films:", films);
    $scope.films = films;
  });

  $scope.addNewFilm = function() {
    if ($scope.newFilm !== "") {
      FilmService.addFilm($scope.newFilm);
      $scope.films = FilmService.getFilms();
    }
  }
}]);
