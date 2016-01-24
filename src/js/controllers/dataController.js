/**
 * Created by Kyle on 1/22/16.
 */
angular.module('RDash').directive('fillInput', function(){

})
angular.module('RDash')
    .controller('InvoiceCtrl', ["$scope", '$http', 'dataFactory', '$location', function ($scope, $http, dataFactory, $location) {
        var host = 'http://52.91.246.101:8081'
        $scope.getInvoices = function () {
            $http.get(host + '/invoices').
                success(function (data) {
                    $scope.invoices = data;
                }).error(function (err) {
                    console.log("Could not retrieve invoices");
                });
            ;
        };
        $scope.setInvoice = function (invoiceNo) {
            dataFactory.setSelectedInvoice(invoiceNo)
        }
        $scope.setSelected = function(invoiceNo){
            dataFactory.setSelectedItem(invoiceNo);
        }

        $scope.getInvoice = function (invoiceNo) {
            $http.get(host + '/invoices' + invoiceNo).
                success(function (data) {
                    console.log(data);
                    $scope.invoiceGet = data;
                    return data;
                }).error(function (err) {
                    console.log("Could not retrieve invoices");
                });
            ;
        };

        $scope.invoiceGet = dataFactory.getSelectedInvoice();


        $scope.createInvoice = function (invoice) {
            url = host + '/invoices';
            $http.post(url, invoice).success(function (inv) {
                console.log("Successfully create invoice with id: " + inv.invoiceId)
                $location.path("#/tables");
            }).error(function (err) {
                alert("Failed to update invoice.  All fields must be filled and invoice numbers cannot be the same.");
                console.log(err)
            });
        }

        $scope.updateInvoice = function (invoice) {
            url = host + '/invoices/' + invoice.invoiceNo;
            $http.put(url, invoice).success(function (inv) {
                console.log("Successfully updated invoice with id: " + inv.invoiceId)
                $location.path("#/tables");
            }).error(function (err) {
                alert("Failed to update invoice.  All fields must be filled.");
                console.log("Could not update invoice");
                console.log(err)
            });
        }

        $scope.deleteInvoice = function (invoice) {
            url = host + '/invoices/' + invoice.invoiceNo;
            $http.delete(url).success(function (inv) {
                console.log("Successfully delete invoice")
                $location.path("#/tables");
            }).error(function (err) {
                alert("Failed to delete invoice");
                console.log("Could not delete invoice");
                console.log(err)
            });
        }

        $scope.getInvoices();


    }]);
