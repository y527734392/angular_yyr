/**
 * Created by muyi on 2017/7/16.
 */
angular.module('app').controller('mainCtrl',['$http', '$scope',function($http,$scope){

    $http({
        method:'get',
        url:'/data/artist_list.json',
    })
        .then(function(rs){
            console.log(rs.data.data);
            $scope.list = rs.data.data
        },function(err){
            console.log(err);
        });
}]);