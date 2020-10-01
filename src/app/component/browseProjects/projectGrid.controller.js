function PGController(){
    const $ctrl = this;
    
    $ctrl.$onInit = function() {
        console.log($ctrl.projects);
    }
    
    $ctrl.$onChanges = function() {
        console.log("changes");
        console.log(this);
    }
}

angular
    .module('components.projectGrid')
    .controller('ProjectGridController', PGController);