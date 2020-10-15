angular
    .module('components.auth',[
        'ui.router'
    ])
    .run(function ($transitions, $state, AuthService) {

        $transitions.onStart({
            to: function (state) {
                return !!(state.data && state.data.requiredAuth);
            }
        }, function() {
            return AuthService
                .requireAuthentication() /*
                .then(function () {
                    return $state.target($state);
                }) */
                .catch(function () {
                    console.log("Failed log in");
                    return $state.target('auth.login');
                });
        });

        $transitions.onStart({
            to: 'auth.*'
        }, function () {
            
            if (AuthService.isAuthenticated()) {
                return $state.target('app');
            }
        });
    });