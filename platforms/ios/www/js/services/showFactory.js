angular.module('lmuApp')

.factory('showFactory', function (Restangular, venueFactory) {

  return Restangular.withConfig(function (RestangularConfigurer) {
    RestangularConfigurer.extendModel('shows', function (show) {
      venueFactory
        .one(show.venue)
        .get()
        .then(function (r) {
          show.venueName = r.name;
        });
      return show;
    });
  }).all('shows');

});