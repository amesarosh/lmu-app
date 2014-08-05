angular.module('lmuApp', ['ionic', 'angularMoment', 'autocomplete'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: "templates/menu.html"
    })

    .state('app.shows', {
      url: "/shows",
      abstract: true,
      template: '<ui-view/>',
    })
    
    .state('app.shows.all', {
      url: "/all",
      views: {
        'menuContent@app' : {
          templateUrl: "templates/shows.html",
          controller: 'ShowsCtrl'
        }
      }
    })
  
    .state('app.shows.venue', {
      url: "/venue/:venue",
      views: {
        'menuContent@app' : {
          templateUrl: "templates/shows.html",
          controller: 'ShowsCtrl'
        }
      }
    })
    
    .state('app.shows.band', {
      url: "/band/:band",
      views: {
        'menuContent@app' : {
          templateUrl: "templates/shows.html",
          controller: 'ShowsCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/shows/all');
});

