(function() {
  function Message($firebaseArray) {
    var Message = {};
      
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
	  
       
    Message.getByRoomID = function(roomID) {
        return $firebaseArray(ref.orderByChild('roomID').equalTo(roomID));
    };
	  
	Message.send = function(newMessage) {
		messages.$add({ content: content,
						roomID: roomID,
					   	sentAt: sentAt,
						username: username
		});
	};  
    
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();