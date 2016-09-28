(function() {
  function Room($firebaseArray) {
    var Room = {};
      
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    var refM = firebase.database().ref().child("messages");
    var messages = $firebaseArray(refM);
      
     
    Room.all = rooms;
      
    Room.add = function(roomName) {
        rooms.$add({
            name: roomName
        })
    };
      
    Room.getMessages = function(roomId) {
        messages.orderByChild('roomId').equalTo(chatRoomId))  
    };
    
    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();