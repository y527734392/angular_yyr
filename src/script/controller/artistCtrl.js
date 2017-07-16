/**
 * Created by muyi on 2017/7/16.
 */
angular.module('app').controller('artistCtrl',['$http', '$scope',function($http,$scope){

    $http({
        method:'get',
        url:'/data/artist_info.json',
    })
        .then(function(rs){
            console.log(rs.data.data);
            $scope.artistInfo = rs.data.data
        },function(err){
            console.log(err);
        });
}]);