angular.module("profile",[])
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/profile", {
            templateUrl: "views/profile/profile.html",
            controller: "profileController"
        })
    }]).controller("profileController", function ($scope) {
        $scope.number = 1;
    })