angular.module("search",[])
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/search", {
            templateUrl: "views/search/search.html",
            controller: "searchController"
        })
    }]).controller("searchController", function ($scope) {
        $scope.number = 1;
    })