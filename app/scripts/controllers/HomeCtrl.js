(function() {
    function HomeCtrl(Room) {
        var ctrl = this;
        ctrl.heroTitle = "Bloc Chat";
        
        ctrl.rooms = Room.all;
        
    };
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();