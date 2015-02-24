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

  $scope.priceIncludes = [];
  $scope.includePrice = function(price) {
      if ($scope.priceIncludes.indexOf(price) > -1) {
        $scope.priceIncludes.splice($scope.priceIncludes.indexOf(price), 1);
      } else {
        $scope.priceIncludes.push(price);
      }
  }

});

restaurantRating.filter('matchPrice', function() {
  return function(restaurants, prices) {
    var returns = [];
    restaurants.forEach(function(r) {
      if ($scope.priceIncludes.indexOf(r.price) > -1) {
        returns.push(r);
      }
    return returns;
    });
  }
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
