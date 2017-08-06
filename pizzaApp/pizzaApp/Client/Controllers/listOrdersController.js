angular.module('main').controller('listOrdersCtrl', function ($scope, $http) {


    $scope.FirstName;
    $scope.LastName;
    $scope.Phone;
    $scope.Date;
    $scope.Qty;
   
        
    $scope.data;



    $scope.refresh = function () {

        ///adding time to each request to avoid request cachin in IE
        var buster = new Date().getTime();

        $http({
            url: '/Api/?buster='+buster,
            method: "GET" ,
            cache: false,
            data: {}
        })
            .then(function (response) {
                // success
                // document.getElementById('test1').innerHTML = response.data[0].FirstName;
                $scope.data = response.data;
            },
            function (response) { // optional
                // failed
                document.getElementById('test1').innerHTML = "did not work correctly";
            });

    };


    
   





});