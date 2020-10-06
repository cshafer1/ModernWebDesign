function AuthFormController () {
    const $ctrl = this;
    
    $ctrl.$onInit = function() {
        $ctrl.isRegister = ($ctrl.button === 'Sign Up') ? true : false
    }
}