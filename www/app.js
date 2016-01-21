'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var app =
  angular
  .module('starter', ['ionic', 'ngOpenFB', 'ionic.rating'])
  .config(config)
  .run(run);

function config($stateProvider, $urlRouterProvider) {
  // console.log('config');

  // if none of the states below are matched, use this as the fallback


  $stateProvider.state('login', {
    url: '/',
    templateUrl: '../templates/login.html',
    controller: 'loginCtrl'
  })


    $stateProvider.state('show', {
        url: '/show',
        templateUrl: '../templates/show.html',
        controller: 'showCtrl'
      })

  $stateProvider.state('forms', {
      url: '/form',
      templateUrl: '../templates/form.html',
      controller: 'formCtrl'
    })



  $urlRouterProvider.otherwise('/');
}

function run($ionicPlatform, ngFB) {

  ngFB.init({
    appId: '1183611635002356'

  });

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    console.log('run');
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}
