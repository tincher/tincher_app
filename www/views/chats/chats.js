angular.module("chats",[])
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/chats", {
            templateUrl: "views/chats/chats.html",
            controller: "chatsController"
        })
    }]).controller("chatsController", function ($scope) {
        $scope.chats = {};
        
        
    })