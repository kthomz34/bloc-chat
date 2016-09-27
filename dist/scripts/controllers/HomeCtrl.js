(function() {
    function HomeCtrl($uibModal, Room) {
        var ctrl = this;
        ctrl.heroTitle = "Bloc Chat";
        
        ctrl.rooms = Room.all;
        
        ctrl.open = function() {
            $uibModal.open({
                templateURL: '/templates/room.html',
                controller: 'RoomCtrl',
                size: 'sm'
            });
        };
        
    };
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room', HomeCtrl]);
})();