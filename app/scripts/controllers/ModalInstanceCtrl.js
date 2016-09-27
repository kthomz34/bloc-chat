(function() {
    function ModalInstanceCtrl($uibModalInstance, Room) {
        var ctrl = this;
       
        ctrl.ok = function () {
            console.log(ctrl.chatName);
            Room.add(ctrl.chatName);
            $uibModalInstance.close();
        };

        ctrl.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

     }
    
    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();