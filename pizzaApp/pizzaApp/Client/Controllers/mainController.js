var app = angular.module("main", ["ngRoute"]);






app.config(function ($routeProvider) {
    $routeProvider
        .when("/PlaceOrder", {
            templateUrl: "/Client/Views/index.html",
            controller: "orderCtrl"

        }).when("/Orders", {
            templateUrl: "/Client/Views/Orders.html",
            controller: "listOrdersCtrl" 
        });
});





app.controller('mainCtrl', function ($scope, $http) {

});















