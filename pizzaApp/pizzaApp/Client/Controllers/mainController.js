var app = angular.module("main", ["ngRoute"]);


app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/Client/Views/index.html",
            controller: "orderCtrl"

        }).when("/Orders", {
            templateUrl: "/Client/Views/Orders.html"
        });
});





app.controller('mainCtrl', function ($scope, $http) {

    $scope.input1 = "controlling from main";
    $scope.input2 = "controlling from main";
});















