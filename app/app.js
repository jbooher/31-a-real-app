import angular from 'angular';
import uiRouter from 'angular-ui-router';

import firebase from 'firebase';
import angularFire from 'angularfire';
import ngMap from 'ngmap';

import user from './modules/user';
import locations from './modules/locations';

let App = angular.module('app', [
  'ui.router',
  'firebase',
  'ngMap',

  'jb.user',
  'jb.locations'
]);

function config($urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
}

App.config(config);
