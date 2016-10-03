(function() {
    function HomeCtrl($uibModal, Room, Message) {          
        var ctrl = this;
        ctrl.heroTitle = "Bloc Chat";
        
        ctrl.rooms = Room.all;
		
		ctrl.currentRoom = {};
	
        
        ctrl.open = function() {
            var modalInstance = $uibModal.open({
                animation: ctrl.animationsEnabled,
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl as modalInstance',
            });
        };

//        ctrl.toggleAnimation = function () {
//            ctrl.animationsEnabled = !ctrl.animationsEnabled;
//        };
		
		ctrl.setRoom = function(room) {
            ctrl.currentRoom = room;
            ctrl.messageList = Message.getByRoomID(room.$id);
        };
		
    }

        
    
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room', 'Message', HomeCtrl]);
})();