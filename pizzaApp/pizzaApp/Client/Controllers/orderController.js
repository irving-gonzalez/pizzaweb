angular.module('main').controller('orderCtrl',function ($scope, $http) {

    $scope.input1 = "controlling from order";
    $scope.input2 = "controlling from order";


    $scope.sendForm = function () {

       var first = document.getElementById('firstName').value;
       var last = document.getElementById('lastName').value;
       var phone = document.getElementById('phone').value;

       var order = {
           firstName: first,
           lastName: last,
           phone : phone
       };
     ///  document.getElementById('firstName').value = "done correctly";

       $http({
           url: '/Content/item.json',
           method: "GET",
           data: order
       })
           .then(function (response) {
               // success
               document.getElementById('firstName').value = response.data.name;
           },
           function (response) { // optional
               // failed
               document.getElementById('firstName').value = "did not work correctly";
           });



    };




});