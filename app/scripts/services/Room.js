(function() {
  function Room($firebaseArray) {
    var Room = {};
    var Messages = {};
      
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    var refM = firebase.database().ref().child("messages");
    var messages = $firebaseArray(refM);
      
// Room
	  
    Room.all = rooms;
      
    Room.add = function(roomName) {
        rooms.$add({
            name: roomName
        })
    };
       
    Room.getMessages = function(roomID) {
        messages.orderByChild('roomID').equalTo(roomID) 
    };
    
    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();