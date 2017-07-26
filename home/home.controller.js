(function () {

        angular.module('myApp')
            .component('home', { // the tag for using this is <char-detail>
                templateUrl: "./home/home.temp.html",
                controller: homeController,

                controllerAs: 'vm'

        })
            .config(homePageConfig);

            function homePageConfig($stateProvider){
                $stateProvider.state('home', {
                    url: '/home',
                    template:'<home></home>'
                });
            }
  
        function homeController($scope) {
            var vm = this;
            console.log("in home");
           

        }
            
})();