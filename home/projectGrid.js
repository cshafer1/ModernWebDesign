/*--------------------- Project Grid Component ---------------------*/
const projectGrid = {
    templateUrl: '/home/projectGrid.html',
    controller: 'ProjectGridController'
}

angular.module('app').component('pgrid', projectGrid);


angular.module('app').controller('ProjectGridController', ['ExampleService', function (ExampleService) {
    const $ctrl = this;
    console.log('example service: ', ExampleService);
    ExampleService.getData().then(function (result) {
        console.log('result: ', result)
        $ctrl.projects = result.data;
        console.log('example variable: ', $ctrl.projects[0]);
    });
}]);

function ExampleService($http) {
    // Services are Singletons
    // Properties
    // Methods
    this.getData = getData;
    // Function to get data from 3rd party api
    function getData() {
        return $http({
            method: 'GET',
            url: './createProject/project_data.json'
        })
    }
}
ExampleService.$inject = ['$http'];
angular.module('app').service('ExampleService', ExampleService)
/*--------------------- Project Grid Component ---------------------*/