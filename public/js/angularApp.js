var webApp = angular.module('webApp', ['ui.router', 'appRoutes', 'appServices', 'appFilters','appDirectives', 'appControllers']);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['webApp']);
});
