angular.module('lmuApp')

.factory('venueFactory', function ($http) {

  var
    venueFactory = {},
    baseUrl = '/api/v1/venues';

  venueFactory.getVenue = function (venue) {
    return $http.get(baseUrl + '/' + venue);
  };

  return venueFactory;

});