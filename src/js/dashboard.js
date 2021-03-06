angular.module("RDash", ["ui.bootstrap", "ui.router", "ngCookies"]);
"use strict";
angular.module("RDash").config(["$stateProvider", "$urlRouterProvider", function (t, e) {
    e.otherwise("/"), t.state("index", {
        url: "/",
        templateUrl: "templates/tables.html"
    }).state("tables", {url: "/tables", templateUrl: "templates/tables.html"})
        .state("addInvoice", {url: "/addInvoice", templateUrl: "templates/addInvoice.html"})
        .state("editInvoice", {url: "/editInvoice", templateUrl: "templates/editInvoice.html"})

}]);
function AlertsCtrl(e) {
    e.alerts = [], e.addAlert = function () {
        e.alerts.push({msg: "Another alert!"})
    },
        e.closeAlert = function (t) {
            e.alerts.splice(t, 1)
        }
}
angular.module("RDash").controller("AlertsCtrl", ["$scope", AlertsCtrl]);
function MasterCtrl(t, e) {
    var g = 992;
    t.getWidth = function () {
        return window.innerWidth
    }, t.$watch(t.getWidth, function (o, n) {
        o >= g ? angular.isDefined(e.get("toggle")) ? t.toggle = e.get("toggle") ? !0 : !1 : t.toggle = !0 : t.toggle = !1
    }), t.toggleSidebar = function () {
        t.toggle = !t.toggle, e.put("toggle", t.toggle)
    }, window.onresize = function () {
        t.$apply()
    }
}
angular.module("RDash").controller("MasterCtrl", ["$scope", "$cookieStore", MasterCtrl]);
function rdLoading() {
    var d = {
        restrict: "AE",
        template: '<div class="loading"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'
    };
    return d
}
angular.module("RDash").directive("rdLoading", rdLoading);
function rdWidgetBody() {
    var d = {
        requires: "^rdWidget",
        scope: {loading: "@?", classes: "@?"},
        transclude: !0,
        template: '<div class="widget-body" ng-class="classes"><rd-loading ng-show="loading"></rd-loading><div ng-hide="loading" class="widget-content" ng-transclude></div></div>',
        restrict: "E"
    };
    return d
}
angular.module("RDash").directive("rdWidgetBody", rdWidgetBody);
function rdWidgetFooter() {
    var e = {
        requires: "^rdWidget",
        transclude: !0,
        template: '<div class="widget-footer" ng-transclude></div>',
        restrict: "E"
    };
    return e
}
angular.module("RDash").directive("rdWidgetFooter", rdWidgetFooter);
function rdWidgetTitle() {
    var i = {
        requires: "^rdWidget",
        scope: {title: "@", icon: "@"},
        transclude: !0,
        template: '<div class="widget-header"><div class="row"><div class="pull-left"><i class="fa" ng-class="icon"></i> {{title}} </div><div class="pull-right col-xs-6 col-sm-4" ng-transclude></div></div></div>',
        restrict: "E"
    };
    return i
}
angular.module("RDash").directive("rdWidgetHeader", rdWidgetTitle);
function rdWidget() {
    var d = {transclude: !0, template: '<div class="widget" ng-transclude></div>', restrict: "EA"};
    return d
}

angular.module("RDash").directive("rdWidget", rdWidget);