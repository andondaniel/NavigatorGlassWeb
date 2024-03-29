'use strict';
/*
Directive that creates tabs elements.
*/
angular.module('navigatorGlassProjectApp')
.directive('tabitem', function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: ["$scope", function($scope) {
            var panes = $scope.panes = [];
            $scope.select = function(pane) {
                angular.forEach(panes, function(item) {
                    item.selected = false;
                });
                pane.selected = true;
            };
            this.addPane = function(pane) {
                if (panes.length == 0) {
                    $scope.select(pane);
                }

                panes.push(pane);
            };
        }],
        template:
            '<div class="tabbable">' +
                '<ul class="nav nav-tabs">' +
                '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">' +
                '<a  ng-click="select(pane)">{{pane.heading}}</a>' +
                '</li>' +
                '</ul>' +
                '<div class="tab-content" ng-transclude></div>' +
             '</div>',
        replace: true
    };
});