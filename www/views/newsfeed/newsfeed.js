angular.module("newsfeed",[])
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/newsfeed", {
            templateUrl: "views/newsfeed/newsfeed.html",
            controller: "newsfeedController"
        })
    }]).controller("newsfeedController", function ($scope) {
        $scope.number = 1;
    })