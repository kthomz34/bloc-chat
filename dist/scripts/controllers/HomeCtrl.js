(function() {
    function HomeCtrl($uibModal, Room, Message, $cookies) {          
        var ctrl = this;
        ctrl.heroTitle = "Bloc Chat";
		ctrl.user = $cookies.get('blocChatCurrentUser');
        
        ctrl.rooms = Room.all;
		
		ctrl.currentRoom = null;
		
		ctrl.animationsEnabled = true;
	
        
        ctrl.open = function() {
             	$uibModal.open({
				animation: ctrl.animationsEnabled,
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl as modalInstance',
            });
        };
		
		ctrl.setRoom = function(room) {
            ctrl.currentRoom = room;
            ctrl.currentMessages = Message.getByRoomID(ctrl.currentRoom.$id);
        };
		
		ctrl.sendMessage = function(message) {
			message.username = ctrl.user;
			message.roomID = ctrl.currentRoom.$id;
			Message.send(message);
		};
		
		ctrl.toggleAnimation = function() {
			ctrl.animationsEnabled = !ctrl.animationsEnabled;
		};
    }

        
    
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room', 'Message', '$cookies', HomeCtrl]);
})();