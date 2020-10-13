/*--------------------- Project Grid Component ---------------------*/
const createProject = {
    templateUrl: './createProject.html',
    controller: 'CreateProjectController',
    bindings: {
        projects: '<'
    }
}

angular
    .module('components.createProject')
    .component('createProject', createProject)
    .config(function($stateProvider){
        $stateProvider
            .state('createProject', {
                parent: 'app',
                url: 'createProject',
                component: 'createProject'
        })
    })


/*--------------------- Project Grid Component ---------------------*/