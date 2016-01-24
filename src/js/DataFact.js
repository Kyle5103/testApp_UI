/**
 * Created by Kyle on 1/24/16.
 */
angular.module('RDash').factory('dataFactory', function getDataFactory() {
    var selectedItem = 0;
    var selectedInvoice = {};
    var service = {
        getSelectedItem: function () {
            return selectedItem;
        },
        setSelectedItem: function (item) {
            selectedItem = item;
        },

        getSelectedInvoice: function(){
            return selectedInvoice;
        },
        setSelectedInvoice: function(invoice){
            selectedInvoice = invoice;
        }
    };



    return service;
});