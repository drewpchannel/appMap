angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
  //Test scope for Location in Search

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('SearchCtrl', function ($scope) {
  $scope.yourCoords = navigator.geolocation.getCurrentPosition(success);
  function success (pos) {
    $scope.long= pos.coords.longitude;
    $scope.lat= pos.coords.latitude;
/*    $scope.buttonclick=function (e){
      console.log('hello button');
    };*/
    var ref = firebase.database().ref();
    ref.child('main').update({
      long: pos.coords.longitude,
      lat: pos.coords.latitude,
    });
  }
  $scope.subPokemon = function (pokemon) {
/*    var ref = firebase.database().ref();
    ref.child('main').update({
      pokeName: pokemon
    });*/
    var ref = firebase.database().ref();
    ref.child('main').update({
      pokemonName: pokemon
    });
  };
})
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'thi', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});

/*ionicApp.controller("ExampleController", function($scope, $cordovaLocalNotification) {
  $scope.add = function() {
    var alarmTime = new Date();
    alarmTime.setMinutes(alarmTime.getMinutes() + 1);
    $cordovaLocalNotification.add({
      id: "1234",
      date: alarmTime,
      message: "This is a message",
      title: "This is a title",
      autoCancel: true,
      sound: null
    }).then(function () {
      console.log("The notification has been set");
    });
  };

  $scope.isScheduled = function() {
    $cordovaLocalNotification.isScheduled("1234").then(function(isScheduled) {
        alert("Notification 1234 Scheduled: " + isScheduled);
    });
  };
});*/