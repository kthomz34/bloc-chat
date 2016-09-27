(function() {
    function RoomCtrl($uibModal, Room) {
        var ctrl = this;
        
        ctrl.open = function (size) {

            var modalInstance = $uibModal.open({
                animation: ctrl.animationsEnabled,
                templateUrl: '/templates/room.html',
                controller: 'ModalInstanceCtrl as modalInstance',
                size: size,
                resolve: {
                    newRoom: function(){
                        ctrl.newRoom
                    }
                }
            });

        modalInstance.result.then(function (newRoom) {
            Room.addRoom(newRoom);
        }, function () {
            console.log('Room dismissed at: ' + new Date());
        });
        };

        ctrl.toggleAnimation = function () {
            ctrl.animationsEnabled = !ctrl.animationsEnabled;
        };

    }

    function ModalInstanceCtrl($uibModalInstance) {
        var ctrl = this;
       
        ctrl.ok = function () {
            $uibModalInstance.close(ctrl.chatName);
        };

        ctrl.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

     }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$uibModal', 'Room', RoomCtrl])
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();