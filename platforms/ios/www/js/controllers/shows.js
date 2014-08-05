angular.module('lmuApp')

.controller('ShowsCtrl', function($scope, $rootScope, $ionicLoading, $state, $stateParams, showFactory, venueFactory) {

  /* ------------------------------
  // Data Methods
  // ------------------------------ */
  $scope.getAllShows = function () {
    showFactory
      .getList()
      .then(function (shows) {
        $scope.shows = shows;
        $scope.stopLoading();
      });
  };

  $scope.getShowsByVenue = function () {
    showFactory
      .one('venue')
      .getList($stateParams.venue)
      .then(function (venueShows) {
        $scope.shows = venueShows;
        $scope.stopLoading();
      });
  };

  $scope.getShowsByBand = function () {
    showFactory
      .one('band')
      .getList($stateParams.band)
      .then(function (bandShows) {
        $scope.shows = bandShows;
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
      $scope.title = 'Shows';
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