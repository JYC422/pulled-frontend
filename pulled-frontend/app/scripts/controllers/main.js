'use strict';

angular.module('pulledApp')
  .controller('MainCtrl',[ 'Categories', function (Categories) {


    Categories.get(function(data){
      console.log(data);
    }, function(responseHeaders){
      console.log(responseHeaders);
    })


    Categories.subCategories ( {id: 1} , function(data){
      console.log(data);
    }, function(responseHeaders){
      console.log(responseHeaders);
    })
}]);
