angular.module('lmuApp')

.controller('ShowsCtrl', function($scope, $rootScope, $ionicLoading, $state, $stateParams, $q, showFactory, venueFactory) {

  /* ------------------------------
  // Data Methods
  // ------------------------------ */
  $scope.getAllShows = function () {
    showFactory.getAllShows()
      .then(function (r) {
        $scope.shows = r.data;
        $scope.stopLoading();
      });
  };

  $scope.getShowsByVenue = function () {
    showFactory.getShowsByVenue($stateParams.venue)
      .then(function (r) {
        $scope.shows = r.data;
        $scope.stopLoading();
      });
  };

  $scope.getShowsByBand = function () {
    showFactory.getShowsByBand($stateParams.band)
      .then(function (r) {
        $scope.shows = r.data;
        $scope.stopLoading();
      });
  };


  /* ------------------------------
  // UI Methods
  // ------------------------------ */
  $scope.stopLoading = function () {
    $ionicLoading.hide();
    $scope.$broadcast('scroll.refreshComplete');
  };


  /* ------------------------------
  // What do we want to see?
  // ------------------------------ */
  $scope.update = function () {
    switch ($state.current.name) {
    case 'app.shows.all':
      $scope.getAllShows();
      $scope.title = 'Tempe, AZ';
      break;
    case 'app.shows.venue':
      $scope.getShowsByVenue();
      $scope.title = $stateParams.venue;
      break;
    case 'app.shows.band':
      $scope.getShowsByBand();
      $scope.title = $stateParams.band;
      break;
    }
  };


  /* ------------------------------
  // Init
  // ------------------------------ */ 
  $ionicLoading.show({
    template: 'Loading...'
  });

  $scope.update();
});