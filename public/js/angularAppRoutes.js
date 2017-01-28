var appRoutes = angular.module('appRoutes', []);

appRoutes.config(['$urlRouterProvider', '$stateProvider', '$stateParamsProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $stateParamsProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    '': {
                        templateUrl: 'views/home_page.html',
                        controller: HomeController
                    }
                },
                sticky: true,
                dsr: true
            });
        $locationProvider.html5Mode(true);

    }
]);


appRoutes.run(['$rootScope', '$window', '$state', function($rootScope, $window, $state) {
    function message(to, toP, from, fromP) {
        return from.name + angular.toJson(fromP) + " -> " + to.name + angular.toJson(toP);
    }
    $rootScope.$on("$stateChangeStart", function(event, nextState, nextStateParams, fromState, fromStateParams) {
        //Code to change states based on the authentiaction level of the user can be put here
    });
    $rootScope.$on("$stateChangeSuccess", function(evt, to, toP, from, fromP) {});
    $rootScope.$on("$stateChangeError", function(evt, to, toP, from, fromP, err) {

    });
}]);
