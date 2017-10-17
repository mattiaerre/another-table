(function () {
  angular.module('testApp', []).controller('dtp', ['$scope', dtpCtrl])

  function dtpCtrl($scope) {
    $scope.party = [
      '1 Person',
      '2 People',
      '3 People',
      '4 People'
    ];
  }
})();
