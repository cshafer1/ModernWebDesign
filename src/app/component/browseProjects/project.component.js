/*--------------------- Project Component ---------------------*/
const project = {
    templateUrl: './project.html',
    controller: 'ProjectController',
    bindings: {
        project: '<'
    }
}

angular.module('components.projectGrid').component('project', project);


/*--------------------- Project Component ---------------------*/