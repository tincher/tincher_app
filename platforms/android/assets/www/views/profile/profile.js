angular.module("profile",[])
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/profile", {
            templateUrl: "views/profile/profile.html",
            controller: "profileController"
        })
    }]).config(function($httpProvider){
        // $httpProvider.defaults.headers.common['Authorization'] = 'Basic U2FsemtvcGYjMjU5NTpxYXplc2Q='
    }).controller("profileController", function ($scope, $http, $sessionStorage, configurationService, $base64) {
        $scope.profileImageUrl = "https://blzgdapipro-a.akamaihd.net/game/unlocks/0x0250000000000A92.png";
        $scope.username="Salzkopf#2595";
        $scope.password="qazesd";
        $scope.authorizationToken = $base64.encode($scope.username + $scope.password);
        $scope.profile = {};

        $scope.init = function(){
            $scope.testProfile = $http.get("res/exampleprofile.json").then(function(data){
                $scope.profile=data.data;
                console.log($scope.profile);
            })
        }





        $scope.init();

    })
