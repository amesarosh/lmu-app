angular.module('lmuApp')

.factory('showFactory', function ($http) {

  var
    showFactory = {},
    baseUrl = '/api/v1/shows';

  showFactory.getAllShows = function () {
    return $http.get(baseUrl);
  };

  showFactory.getShowsByVenue = function (venue) {
    return $http.get(baseUrl + '/venue/' + venue);
  };

  showFactory.getShowsByBand = function (band) {
    return $http.get(baseUrl + '/band/' + band);
  };

  return showFactory;

});