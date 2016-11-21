(function(){
  var app =angular.module("server",["ngRoute"]);

  app.config(function($routeProvider){
    $routeProvider.when("/cat",{
      templateUrl:"views/cat.html"
    });
      $routeProvider.when("/dog",{
        templateUrl:"views/dog.html"
      });


    });


})();
