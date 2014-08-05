angular.module('lmuApp')

.factory('venueFactory', function ($http) {

  var
    venueFactory = {},
    baseUrl = 'http://192.34.58.149:9001/api/v1/venues';

  venueFactory.getVenue = function (venue) {
    return $http.get(baseUrl + '/' + venue);
  };

  return venueFactory;

});