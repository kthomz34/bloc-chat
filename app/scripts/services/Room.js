(function() {
  function Room($firebaseArray) {
    var Room = {};
      
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
	  
	// messages
	var messageRef = firebase.database().ref().child("messages");
    var messages = $firebaseArray(messageRef);
	  
    Room.all = rooms;
      
    Room.add = function(roomName) {
        rooms.$add({
            name: roomName
        })
    };
	  
	Room.bind = function() {
    	return rooms;
    };  
	
    
    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();