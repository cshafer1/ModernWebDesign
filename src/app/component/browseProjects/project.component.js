/*--------------------- Project Component ---------------------*/
const project = {
    templateUrl: '/component/browseProjects/project.html',
    controller: 'ProjectController',
    bindings: {
        project: '<'
    }
}

angular.module('components.projectGrid').component('project', project);


/*--------------------- Project Component ---------------------*/