(function () {

        angular.module('myApp')
            .component('projects', { // the tag for using this is <char-detail>
                templateUrl: "./projects/projects.temp.html",
                controller: projectsController,

                controllerAs: 'vm'

        })
            .config(projectsPageConfig);

            function projectsPageConfig($stateProvider){
                $stateProvider.state('projects', {
                    url: '/projects',
                    template:'<projects></projects>'
                });
            }
  
        function projectsController($scope) {
            var vm = this;
            console.log("in projects");
           

        }
            
})();