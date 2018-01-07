// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tabs', {
      url: '/tabs',
      abstract: true,
      templateUrl: 'views/tabs/tabs.html'
    })
    .state('tabs.home', {
      url: '/home',
      views: {
        'home-tab': {
          templateUrl: 'views/home/home.html'
        }
      }
    })
    .state('tabs.resep', {
      url: '/resep',
      views: {
        'resep-tab': {
          templateUrl: 'views/resep/resep.html'
        }
      }
    })

     .state('tabs.special', {
      url: '/special',
      views: {
        'resep-tab': {
          templateUrl: 'views/resep/special.html'
        }
      }
    })

     .state('tabs.hitory', {
      url: '/hitory',
      views: {
        'resep-tab': {
          templateUrl: 'views/resep/history.html'
        }
      }
    })

    .state('tabs.why', {
     url: '/why',
     views: {
       'resep-tab': {
         templateUrl: 'views/resep/why.html'
       }
     }
   })

     .state('tabs.install', {
      url: '/install',
      views: {
        'resep-tab': {
          templateUrl: 'views/resep/install.html'
        }
      }
    })

    .state('tabs.user', {
     url: '/user',
     views: {
       'resep-tab': {
         templateUrl: 'views/resep/user.html'
       }
     }
   })

    .state('tabs.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'views/about/about.html'
        }
      }
    });

  $urlRouterProvider.otherwise('/tabs/home');
})
