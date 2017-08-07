angular.module('main').controller('orderCtrl', function ($window,$scope, $http) {

    $scope.total = 40.00;    
    $scope.quantity = 1;
    $scope.price = 20.00;
    $scope.date = '';
    $scope.phone = '';

    //array to store validation errors
    $scope.validationList = "";

  //array to store validation errors right side list
    $scope.validationList2 = "";



    //validate phone format
    $scope.$watch('phone', function (newVal, oldVal) {

  
        if (newVal.length === 3 || newVal.length === 7 )
            $scope.phone = newVal + '-';
    });


    //display table with order info if there are orders
    $scope.AreOrders = function () {
        if ($scope.quantity < 1)
            return true;
        else return false;
    };





    ////get data from forms and send it to save the order in database
    $scope.sendForm = function () {

        //get values from the form
       var first = document.getElementById('firstName').value;
       var last = document.getElementById('lastName').value;
       var phone = document.getElementById('phone').value;
       var qty = document.getElementById('qty').value;  
       var day = document.getElementById('day').value;
       var month = document.getElementById('month').value;
       var hours = document.getElementById('hours').value;
       var minutes = document.getElementById('minutes').value;
        //use valios from the form to create object
       var d =  new Date(2017, month-1, day, hours, minutes, 0, 0);

       var order = {
           FirstName: first,
           LastName: last,
           Phone: phone,
           Date: d,
           Qty: qty
       };


        ///check if validate return true meaning no errors
       if (validate()) {
          //post the order to the server to be stored in database
        //takes order object as parameter
           HttpPost(order);
           
       }

   
       

    };

     //check all the input fields, validate, and return array with list of errors
    var validate = function () {


        var validationList = new Array();
        var validationList2 = new Array();

        //get values from the form
        var first = document.getElementById('firstName').value;
        var last = document.getElementById('lastName').value;
        var phone = document.getElementById('phone').value;
        var qty = document.getElementById('qty').value;
        var day = document.getElementById('day').value;
        var month = document.getElementById('month').value;
        var hours = document.getElementById('hours').value;
        var minutes = document.getElementById('minutes').value;

        if (first === "") {
            validationList.push('first name required');
        }

        if (last === "") {
            validationList.push('last name required');
        }

        //validate phone number
        var pattern = /\d{3}-\d{3}-\d{4}/;
        if (phone === "")
            validationList.push('phone is required');

        ///check phone format
        if (!pattern.test(phone)) {
            validationList.push('invalid phone number');
        }

        $scope.validationList = validationList;

        /////////////////////////////////////////////
        ///now validate right side
        if (qty < 1 ) {
            validationList2.push('invalid quantity');
        }

        //validate date 
        if (day>31 || day ==="")
        {
            validationList2.push('invalid day');
        }
        if (month > 12 || month === "") {
            validationList2.push('invalid month');
        }

    

        if (hours > 24 || hours === "") {
            validationList2.push('invalid hour');
        }
        if (minutes > 60 || minutes === "") {
            validationList2.push('invalid minutes');
        }

        $scope.validationList2 = validationList2;

        /////////////////////////////////////////////////////

        if (validationList.length > 0 || validationList2.length > 0)
            return false;

        else return true;
    };



    /// send a get request
    var HttpPost = function (order) {

        //post the order to the server to be stored in database
        $http({
            url: '/Api/',
            method: "POST",
            data: order
        })
            .then(function (response) {
                // success
                alert('Sending order');
                $window.location.href = '#!Orders';
            },
            function (response) { // optional
                // failed
            });

    };





});