/**
 * Created by muyi on 2017/7/16.
 */
'use strict';

angular.module('app').directive('appPositionList',[function(){
    return {
        restrict:'A',
        replace: true,
        templateUrl:'view/template/positionList.html',
        scope:{
            data: '='
        }
    }
}]);