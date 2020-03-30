angular.module("StarWarsApp")
.service("FilmService", ["$http", function($http) {
  // This doesn't interact with the API.
  // this was here to demonstrate how services can accumulate
  // and persist data between page navigation, like shopping carts.
  // var films = [
  //   "A New Hope",
  //   "The Empire Strikes Back",
  //   "Return of the Jedi"
  // ];

  this.getFilms = function() {
    var req = {
      url: 'http://swapi.co/api/films/',
      method: 'GET',
    }
    return $http(req).then(function(res) {
      console.log("RESULTS", res);
      if (res.status !== 200) {
        return [];
      }
      return res.data.results;
    });
  }

  // Old "shopping cart" code
  // this.addFilm = function(name) {
  //   films.push(name);
  // };

  this.getFilmDetails = function(i) {
    // using double equals because i came from
    // the URL query parameters and it's a string.
    if (i == 1) {
      return {
        year: 1977,
        title: "A New Hope",
        plot: "bla bla bla bla blb alba"
      }
    } else {
      return {
        year: 1977,
        title: "Other film",
        plot: "yadda yadda yadda yadda"
      }
    }
  }
}]);
