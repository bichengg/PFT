app.controller('SliderCtrl', function($scope,Chats) {
  console.log(Chats.all());
  $scope.cost = 40;
  $scope.range = {
    min: 30,
    max: 60
  };
  $scope.currencyFormatting = function(value) {
    return"$"+value.toString();
  }
});
