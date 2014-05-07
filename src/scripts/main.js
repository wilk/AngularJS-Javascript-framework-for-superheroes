bespoke.from('article', {
  keys: true,
  touch: true,
  bullets: 'li, .bullet',
  scale: true,
  hash: true,
  progress: true,
  state: true,
  forms: true
});

angular.module('Presentation', [])
    .controller('DirectiveController', ['$scope', function ($scope) {
        $scope.customer = {
            name: 'Naomi',
            address: '1600 Amphitheatre'
        };
    }])
    .directive('myCustomer', function () {
        return {
            template: '<b>Name</b>: {{customer.name}} <b>Address</b>: {{customer.address}}'
        };
    })
    .controller('ServiceController', ['$scope', 'notify', function ($scope, notify) {
        $scope.notify = notify;
    }])
    .service('notify', ['$window', function ($window) {
        var msgs = [];

        return function (msg) {
            msgs.push(msg);
            if (msgs.length > 2) {
                $window.alert(msgs);
                msgs = [];
            }
        };
    }])
    .controller('FormController', ['$scope', function ($scope) {
        $scope.master = {};
        $scope.update = function (user) {
            $scope.master = angular.copy(user);
        };
        $scope.reset = function () {
            $scope.user = angular.copy($scope.master);
        };
        $scope.isUnchanged = function (user) {
            return angular.equals(user, $scope.master);
        };
        $scope.reset();
    }]);