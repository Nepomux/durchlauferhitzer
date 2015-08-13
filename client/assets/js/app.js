(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

    angular.module('application')
        .controller('MyController', MyController)
    ;
    MyController.$inject = ['$scope', '$stateParams', '$state', '$controller', '$http'];
    function MyController($scope, $stateParams, $state, $controller, $http) {
        angular.extend(this, $controller('DefaultController', {$scope: $scope, $stateParams: $stateParams, $state: $state, $http: $http}));


        $scope.test = 'durchlauferhitzer';

        $scope.locations = [];
        $http.get('data.json')
            .then(function(res) {
                $scope.locations=res.data;
                console.log(res.data);
            }, function(error) {
                console.log('error')
            })
    }

   //   directives

   //   angular.module('application').directive('tableRow',function(){
   //       return {
   //           templatePath: 'assets/templates/tableRow.html',
   //           scope: {
   //               data: '=data'
   //           }
   //       };
   //   })

})();


