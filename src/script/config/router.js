/**
 * Created by muyi on 2017/7/16.
 */


angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main',{
            url:'/main',
            templateUrl:'view/main.html',
            controller:'mainCtrl'
        })
        .state('artist',{
            url:'/artist/:id',
            templateUrl:'view/artist.html',
            controller:'artistCtrl'
        });

    $urlRouterProvider.otherwise('main')
}]);