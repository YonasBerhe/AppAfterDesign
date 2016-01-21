app.controller('loginCtrl', loginCtrl);


function loginCtrl($scope, ngFB) {
console.log("loginCtrl");
  $scope.fbLogin = function () {
      ngFB.login({scope: 'email, publish_actions'}).then(
          function (response) {
              if (response.status === 'connected') {
                  console.log('Facebook login succeeded');
                  // $scope.closeLogin();
              } else {
                  alert('Facebook login failed');
              }
          });
  };


}
