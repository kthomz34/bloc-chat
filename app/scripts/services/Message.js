(function() {
  function Message($firebaseArray) {
    var Message = {};
      
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
      
       
    Message.getByRoom = function(room) {
		console.log(room.$id);
        var m = $firebaseArray(ref.orderByChild('roomID').equalTo(room.$id));
		console.log(m);
    };
    
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();