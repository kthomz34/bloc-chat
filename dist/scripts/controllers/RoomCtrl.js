(function() {
    function RoomCtrl($uibModal, Room) {
        var ctrl = this;
        
        ctrl.open = function (size) {

            var modalInstance = $uibModal.open({
                animation: ctrl.animationsEnabled,
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl as modalInstance',
                size: size
            });
        }

        ctrl.toggleAnimation = function () {
            ctrl.animationsEnabled = !ctrl.animationsEnabled;
        };

    }

    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$uibModal', 'Room', RoomCtrl]);
})();