angular.module('lmuApp')

.factory('venueFactory', function (Restangular) {

  var venueFactory = Restangular.one('venues');
  
  return venueFactory;

});