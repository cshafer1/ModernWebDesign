function RegisterController() {
    const $ctrl = this;
    
    $ctrl.$onInit = function() {
        $ctrl.error = null;
        $ctrl.user = {
            name: '',
            email: '',
            password: ''
        }
    }
    
    $ctrl.createpUser = function(event) {
        
    }
}

angular
    .module('components.auth')
    .controller('RegisterController', LoginController);