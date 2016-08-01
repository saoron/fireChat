angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, messageMain) {


  messageMain().$bindTo($scope, "msgs")


})

.controller('ChatsCtrl', function($scope, userMessages) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  //$scope.chats = Chats.all();
  userMessages().$bindTo($scope, "userMessages")


  $scope.sendMsg = function(){


    var ref = firebase.database().ref("userMessages");
    ref.push({ 'text': $scope.msgBody, 'pic': $scope.randPic() });
    $scope.msgBody = '';



  }

  $scope.randPic = function(){
    return parseInt(Math.random() * (5 - 1) + 1);
  }

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
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
