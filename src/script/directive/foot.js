/**
 * Created by muyi on 2017/7/16.
 */
'use strict';

angular.module('app').directive('appFoot',[function(){
    return {
        restrict:'A',
        replace: true,
        templateUrl:'view/template/foot.html',
        scope:{
            'open':'@',
            'buy':'@',
        }
    }
}]);