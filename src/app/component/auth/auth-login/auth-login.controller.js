function LoginController(AuthService,$state) {
    const $ctrl = this;
    
    $ctrl.$onInit = function() {
        $ctrl.user = {
            email: '',
            password: ''
        }
    }
    
    $ctrl.loginUser = function (event) {
        return AuthService
          .login(event.user)
          .then(function () {
            $state.go('app');
          }, function (reason) {
            $ctrl.error = reason.message;
          });
        };
    }


angular
    .module('components.auth')
    .controller('LoginController', LoginController);