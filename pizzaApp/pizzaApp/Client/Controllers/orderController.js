angular.module('main').controller('orderCtrl',function ($scope, $http) {

    $scope.total = 40.00;
    $scope.quantity = 1;
    $scope.price = 20.00;
      

    $scope.quantityChanged = function () {
        document.getElementById('firstName').value="changed in angular";
    };


    $scope.AreOrders = function () {
        if ($scope.quantity < 1)
            return true
        else return false;
    };

    $scope.sendForm = function () {

        //get values from the form
       var first = document.getElementById('firstName').value;
       var last = document.getElementById('lastName').value;
       var phone = document.getElementById('phone').value;
       var qty = document.getElementById('qty').value;  

        //use valios from the form to create object
       var d =new Date("October 13, 2014 11:13:00");

       var order = {
           FirstName: first,
           LastName: last,
           Phone: phone,
           Date: d,
           Qty: qty
       };
   

        /*
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
        */
        //post the order to the server to be stored in database
       $http({
           url: '/Api/',
           method: "POST",
           data: order
       })
           .then(function (response) {
               // success
               document.getElementById('firstName').value = response.data;
           },
           function (response) { // optional
               // failed
               document.getElementById('firstName').value = "did not work correctly";
           });



    };




});