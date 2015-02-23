restarauntRating.controller('RestarauntCtrl', function RestarauntCtrl($scope) {
  $scope.restaraunt = [
    { name: "Jimbo's Pizza Shoppe" },
    { name: "Humble Pie Pizza Co." }
  ];
  $scope.addRestaraunt = function() {
    $scope.restaraunt.push({name: $scope.restarauntName})
    $scope.restarauntName = null;
  };
  $scope.deleteRestaraunt = function(restaraunt) {
    var index = $scope.restaraunts.indexOf(restaraunt);
    $scope.restaraunts.splice(index, 1);
  };
});
