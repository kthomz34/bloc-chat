(function() {
  function Message($firebaseArray) {
    var Message = {};
      
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
	  
       
    Message.getByRoomID = function(roomID) {
        return $firebaseArray(ref.orderByChild('roomID').equalTo(roomID));
    };
	  
	Message.send = function(message) {
		messages.$add({ content: message.content,
						roomID: message.roomID,
					   	sentAt: message.sentAt,
						username: message.username
					  });
	};  
    
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();