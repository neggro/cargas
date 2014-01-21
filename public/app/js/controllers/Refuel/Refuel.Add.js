angular.module('Controllers')
.controller('Refuel.Add', [
    '$scope',
    '$location',
    'Refuel',
    'fuels',
    function ($scope, $location, Refuel, fuels) {

        $scope.$parent.menu_selected = 'Refuel';
        $scope.$parent.title = 'Cargar';

        $scope.fuels = fuels;

        $scope.update = function () {
            new Refuel($scope.refuel).$save(function () {
                $location.path('/list');
            });
        };
    }
]);