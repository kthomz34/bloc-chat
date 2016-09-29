(function() {
    function HomeCtrl(Room, Messages) {          
        var ctrl = this;
        ctrl.heroTitle = "Bloc Chat";
        
        ctrl.rooms = Room.all;
        ctrl.messageList = Room.getMessages;
        
    };
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();