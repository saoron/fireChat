angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, messageMain) {


  messageMain().$bindTo($scope, "msgs")


})

.controller('ChatsCtrl', function($scope, $firebaseArray) {

  // userMessages().$bindTo($scope, "userMessages")
  var userMessages = firebase.database().ref().child("userMessages");
  $scope.userMessages = $firebaseArray(userMessages);


  $scope.sendMsg = function(){


    var ref = firebase.database().ref("userMessages");
    ref.push({ 'text': $scope.msgBody, 'pic': $scope.randPic(1,5) });
    $scope.msgBody = '';



  }
  //generate random number between min & max
  $scope.randPic = function(min, max){
    return parseInt(Math.random() * (max - min) + min);
  }

})

.controller('ChatDetailCtrl', function($scope, $stateParams) {
  
})










































.controller('TicCtrl', function($scope, $ionicPopup, ticTacBoard) {
     

     ticTacBoard().$bindTo($scope, "board");

      $scope.cellClick = function(row, column){

        $scope.board[row][column] = $scope.name.charAt(0);


      }


     $scope.resetBoard = function(row, column){

        for (var i=0;i<=2;i++)
          for (var j=0;j<=2;j++)
            $scope.board[i][j] = '-';
         

      }

      $scope.showPopup = function() {
        $scope.data = {};

        // An elaborate, custom popup
        var namePopup = $ionicPopup.show({
          template: '<input type="name" ng-model="data.name">',
          title: 'Who do you choose?',
          subTitle: 'You can choose Pokemon that are curently in your bag!',
          scope: $scope,
          buttons: [
            { text: 'Cancel' },
            {
              text: '<b>Save</b>',
              type: 'button-positive',
              onTap: function(e) {

                if (!$scope.data.name) {
                  //don't allow the user to close unless he enters wifi password
                  e.preventDefault();
                } else {
                  $scope.name = $scope.data.name;
 
                  return $scope.data.name;
                }
              }
            }
          ]
        });

        namePopup.then(function(res) {
          console.log('Tapped!', res);
        });

       };

});
