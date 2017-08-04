angular.module("login",[])
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "/www/views/login/login.html",
            controller: "loginController"
        })
    }]).controller("loginController", function ($scope) {
        $scope.number = 1;
    })