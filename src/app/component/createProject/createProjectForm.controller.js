function CreateProjectFormController($scope){
    const $ctrl = this;
    $ctrl.$onInit = function() {
        // Something
    }
    $scope.saveProject = function($event){
        const Project = Parse.Object.extend("Project");
        const project = new Project();
        if(!("image" in $scope.project))
            $scope.project["image"] = "optional";
        if(!("private" in $scope.project))
            $scope.project["private"] = false;
        console.log($scope.project);
        project.save($scope.project).then((proj) => {
            window.location.href = '/#!/'
        }, (error) => {
          // Save fails
            alert('Failed to create new object, with error code: ' + error.message);
            console.log(error);
        });
    }
}

angular
    .module('components.createProject')
    .controller('CreateProjectFormController', ['$scope', CreateProjectFormController]);