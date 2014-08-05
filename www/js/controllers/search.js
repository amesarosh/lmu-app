angular.module('lmuApp')

.controller('SearchCtrl', function ($scope) {

  $scope.search = function () {

    $scope.searchResults = [
      {
        'name': 'Rogue Bar',
        'url': '/app/shows/venue/rogue_bar'
      }
    ];
  };

});