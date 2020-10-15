function RegisterController(AuthService,$state) {
    const $ctrl = this;
    
    $ctrl.$onInit = function() {
        $ctrl.error = null;
        $ctrl.user = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }
    
    $ctrl.createUser = function (event) {
        console.log("Register handler");
    return AuthService
      .register(event.user)
      .then(function () {
        $state.go('app');
      }, function (reason) {
        $ctrl.error = reason.message;
        console.log("Register handler error:" +$ctrl.error);
      });
  };
}

angular
    .module('components.auth')
    .controller('RegisterController', RegisterController);