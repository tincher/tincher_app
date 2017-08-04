angular.module("tincher", [
    "ngRoute",
    "profile",
    "login"
]).config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "views/profile/profile.html",
        controller: "profileController"
    }).otherwise({
        templateUrl: "views/error/error.html"
    })
}])