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
            ctrl.currentMessages = Message.getByRoomID(ctrl.currentRoom.$id);
			console.log(ctrl.currentMessages);
        };
		
    }

        
    
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room', 'Message', '$cookies', HomeCtrl]);
})();