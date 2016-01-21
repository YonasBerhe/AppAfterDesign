
'use strict';

app.controller('showCtrl', showCtrl);

function showCtrl($scope) {
  $scope.rating = {};
 $scope.rating.rate = 3;
 $scope.rating.max = 5;
}
