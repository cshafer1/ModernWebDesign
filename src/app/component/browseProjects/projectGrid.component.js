/*--------------------- Project Grid Component ---------------------*/
const projectGrid = {
    templateUrl: './projectGrid.html',
    controller: 'ProjectGridController',
    bindings: {
        projects: '<'
    }
}

angular
    .module('components.projectGrid')
    .component('pgrid', projectGrid)
    .config(function($stateProvider){
        $stateProvider
            .state('projectGrid', {
                url: '/projectGrid',
                component: 'pgrid',
                resolve: {
                    projects: function($rootScope, ProjectModel){
                        if (ProjectModel.collection.length > 0)
                            return ProjectModel.collection;
                        else
                            return ProjectModel.getAllProjects();
                   } 
                }
        })
    })


/*--------------------- Project Grid Component ---------------------*/