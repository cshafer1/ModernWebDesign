/*--------------------- Project Controller ---------------------*/

function ProjectController(){
    const $ctrl = this;
    
    $ctrl.$onInit = function(){
        console.log("control is: ", $ctrl);
        $ctrl.imageview = true;
        if($ctrl.project["image"] == '' || $ctrl.project["image"] == 'optional')
            $ctrl.imageview = false;
    }
}

angular.module('components.projectGrid').controller('ProjectController', ProjectController);


/*--------------------- Project Controller ---------------------*/