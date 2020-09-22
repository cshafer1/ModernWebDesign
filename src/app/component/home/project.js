/*--------------------- Project Component ---------------------*/
const project = {
    templateUrl: '/home/project.html',
    //controller: 'ProjectController',
    bindings: {
        project: '<'
    }
}

angular.module('component').component('project', project);

/*

angular.module('app').controller('ProjectController', ['ExampleService', function (ExampleService) {
    const $ctrl = this;
    $ctrl.imageview = true;
    if($ctrl.project["image"] == '' || $ctrl.project["image"] == 'optional')
        $ctrl.imageview = false;
}]);


/*--------------------- Project Component ---------------------*/