restaurantRating.controller('restaurantCtrl', function restaurantCtrl($scope) {
  $scope.restaurants = [
    { name: "Jimbo's Pizza Shoppe", type: "Pizza", price: "$$" },
    { name: "Humble Pie Pizza Co.", type: "Pizza", price: "$$$$" },
    { name: "Bob's Bakery", type: "Pastries", price: "$$$" },
    { name: "Great Wall", type: "Chinese", price: "$" },
    { name: "Hong Kong", type: "Chinese", price: "$$" }
  ];
  $scope.addRestaurant = function() {
    $scope.restaurants.push({name: $scope.restaurantName, type: $scope.restaurantType, price: $scope.restaurantPrice })
    $scope.restaurantName = null;
    $scope.restaurantType = null;
    $scope.restaurantPrice = null;
  };
  $scope.deleteRestaurant = function(restaurant) {
    var index = $scope.restaurants.indexOf(restaurant);
    $scope.restaurants.splice(index, 1);
  };
});
restarauntRating.filter('queryName', function() {

});
