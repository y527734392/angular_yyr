/**
 * Created by muyi on 2017/7/16.
 */
'use strict';
angular.module('app').directive('appArtistAlbum',[function(){
    return {
        restrict:'A',
        replace: true,
        templateUrl:'view/template/artistAlbum.html',
        scope:{
            data: '='
        }
    }
}]);