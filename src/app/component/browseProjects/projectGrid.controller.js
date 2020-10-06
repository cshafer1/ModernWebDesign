function PGController(){
    const $ctrl = this;
    
    $ctrl.$onInit = function() {
        console.log($ctrl.projects);
    }
    
    $ctrl.$onChanges = function(changes) {
        console.log("changes $onChanges" ,changes);
        console.log($ctrl.projects);
    }
}

angular
    .module('components.projectGrid')
    .controller('ProjectGridController', PGController);