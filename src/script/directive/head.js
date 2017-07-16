/**
 * Created by muyi on 2017/7/16.
 */
'use strict';

angular.module('app').directive('appHead',[function(){
    return {
        restrict:'A',
        replace: true,
        templateUrl:'view/template/head.html',
        scope:{
            title: '@',
            back:'@',
            bar:'@'
        },
        link:function($scope){
            $scope.goback = function(){
                if(this.back !=='false'){
                    location.href = this.back;
                }else{
                    window.history.back();
                }
            }
        }
    }
}]);