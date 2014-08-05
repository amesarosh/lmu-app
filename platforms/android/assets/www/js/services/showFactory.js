angular.module('lmuApp')

.factory('showFactory', function ($http) {

  var
    showFactory = {},
    baseUrl = 'http://192.34.58.149:9001/api/v1/shows';

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