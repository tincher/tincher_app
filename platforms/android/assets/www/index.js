angular.module("tincher", [
    "ngRoute",
    "ngStorage",
    "profile",
    "login",
    "chats",
    "newsfeed",
    "search",
    "error",
    "configurationService",
    "base64"
]).config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "views/profile/profile.html",
        controller: "profileController"
    }).otherwise({
        templateUrl: "views/error/error.html",
        controller: "errorController"
    })
}])
