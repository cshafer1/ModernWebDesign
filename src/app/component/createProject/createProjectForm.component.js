/*--------------------- Project Grid Component ---------------------*/


const createProjectForm = {
    templateUrl: '/createProject/createProjectForm.html',
    controller: 'CreateProjectFormController'
}


angular
    .module('components.createProjectForm')
    .component('create', createProjectForm)
    .config(function($stateProvider){
        /* 
        CHANGE FOR FORM
        
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
        */
    })


/*--------------------- Project Grid Component ---------------------*/