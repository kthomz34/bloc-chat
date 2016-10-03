(function() {
    function HomeCtrl($uibModal, Room, Message, $cookies) {          
        var ctrl = this;
        ctrl.heroTitle = "Bloc Chat";
		ctrl.user = $cookies.get('blocChatCurrentUser');
        
        ctrl.rooms = Room.all;
		
		ctrl.currentRoom = {};
	
        
        ctrl.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl as modalInstance',
            });
        };
		
		ctrl.setRoom = function(room) {
            ctrl.currentRoom = room;
			console.log(room.name);
            ctrl.messages = Message.getByRoomID(ctrl.currentRoom.$id);
        };
		
    }

        
    
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room', 'Message', '$cookies', HomeCtrl]);
})();