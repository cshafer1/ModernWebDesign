/*--------------------- Project Controller ---------------------*/

function ProjectController(){
    const $ctrl = this;
    $ctrl.imageview = true;
    if($ctrl.project["image"] == '' || $ctrl.project["image"] == 'optional')
        $ctrl.imageview = false;
}

angular.module('components.projectGrid').controller('ProjectController', ProjectController);


/*--------------------- Project Controller ---------------------*/