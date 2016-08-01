angular.module('starter.services', ['firebase'])




.factory("messageMain", ["$firebaseObject",
  function($firebaseObject) {
    return function() {
      // create a reference to the database node where we will store our data
      var ref = firebase.database().ref("msgs");


      // return it as a synchronized object
      return $firebaseObject(ref);
    }
  }
])

.factory("userMessages", ["$firebaseObject",
  function($firebaseObject) {
    return function() {
      // create a reference to the database node where we will store our data
      var ref = firebase.database().ref("userMessages");


      // return it as a synchronized object
      return $firebaseObject(ref);
    }
  }
])






























.factory("ticTacBoard", ["$firebaseObject",
  function($firebaseObject) {
    return function() {
      // create a reference to the database node where we will store our data
      var ref = firebase.database().ref("ticTak");


      // return it as a synchronized object
      return $firebaseObject(ref);
    }
  }
]);
