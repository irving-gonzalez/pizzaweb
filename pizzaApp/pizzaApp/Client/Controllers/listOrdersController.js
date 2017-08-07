angular.module('main').controller('listOrdersCtrl', function ($scope, $http) {
        
    $scope.data;


    var sort_desc_date = function (order1, order2) {

        if (order1.Date > order2.Date) return -1;
        if (order1.Date < order2.Date) return 1;
        return 0;
    };

    var sort_desc_id = function (order1, order2) {

        if (order1.ID > order2.ID) return -1;
        if (order1.ID < order2.ID) return 1;
        return 0;
    };




    ///
    var rotate = function () {
       
        var angle = 0;

        var myVar = setInterval(function () {
            angle += 10;
            var icon = document.getElementById('refresh');
            icon.style.transform = "rotate(" + angle + "deg)";
        }, 20);

        return myvar;
    };


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
                $scope.data.sort(sort_desc_id);

             
            },
            function (response) { // optional
                // failed
                document.getElementById('test1').innerHTML = "did not work correctly";
          });


       
    };



});