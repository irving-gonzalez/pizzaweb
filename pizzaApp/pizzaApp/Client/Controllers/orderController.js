angular.module('main').controller('orderCtrl',function ($scope, $http) {




    $scope.sendForm = function () {

        //get values from the form
       var first = document.getElementById('firstName').value;
       var last = document.getElementById('lastName').value;
       var phone = document.getElementById('phone').value;

        //use valios from the form to create object
       var d =new Date("October 13, 2014 11:13:00");

       var order = {
           FirstName: first,
           LastName: last,
           Phone: phone,
           Date: d
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