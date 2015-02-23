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

restaurantRating.filter('uniqueTypes', function() {
  return function(input) {
    var types = [];
    input.forEach( function(restaurant) {
      if (types.indexOf(restaurant.type) === -1) {
        types.push(restaurant.type);
      }
    });
    return types;
  };
});
