(function() {
    function RoomCtrl($uibModal, Room, Message) {
        var ctrl = this;
		ctrl.all = Room.all;
//		ctrl.currentRoom = ;
        
        ctrl.open = function (size) {

            var modalInstance = $uibModal.open({
                animation: ctrl.animationsEnabled,
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl as modalInstance',
                size: size
            });
        };

        ctrl.toggleAnimation = function () {
            ctrl.animationsEnabled = !ctrl.animationsEnabled;
        };
		
		ctrl.getMessages = function(room) {
			ctrl.messages = Message.getByRoom(room);	
		}

    }

    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$uibModal', 'Room', 'Message', RoomCtrl]);
})();