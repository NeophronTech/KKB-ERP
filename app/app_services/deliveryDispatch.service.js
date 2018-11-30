(function () {
	'use strict';
	angular.module('KKB').factory('DeliveryDispatchService', DeliveryDispatchService);

	function DeliveryDispatchService($http, $q, $window) {
		
        var deliveryDispatchService = {};
        
        deliveryDispatchService.readStockBook = readStockBook;
		deliveryDispatchService.saveStockBook = saveStockBook;
        deliveryDispatchService.updateStockBook = updateStockBook;
		deliveryDispatchService.deleteStockBook = deleteStockBook;
		deliveryDispatchService.readDelivery = readDelivery;
		deliveryDispatchService.saveDelivery = saveDelivery;
        deliveryDispatchService.updateDelivery = updateDelivery;
		deliveryDispatchService.deleteDelivery = deleteDelivery;
		deliveryDispatchService.readOrderEntry = readOrderEntry;
		deliveryDispatchService.saveOrderEntry = saveOrderEntry;
        deliveryDispatchService.updateOrderEntry = updateOrderEntry;
		deliveryDispatchService.deleteOrderEntry = deleteOrderEntry;
		
        return deliveryDispatchService;
        
        function readStockBook(obj){
			return $http.post('/api/deliveryDispatch/readStockBook', obj).then(handleSuccess, handleError);
        }
        
        function saveStockBook(obj) {
			return $http.post('/api/deliveryDispatch/saveStockBook', obj).then(handleSuccess, handleError);
		}

		function updateStockBook(obj) {
			return $http.put('/api/deliveryDispatch/updateStockBook', obj).then(handleSuccess, handleError);
		}

		function deleteStockBook(obj) {
			return $http.put('/api/deliveryDispatch/deleteStockBook', obj).then(handleSuccess, handleError);
		}

		function readDelivery(obj){
			return $http.post('/api/deliveryDispatch/readDelivery', obj).then(handleSuccess, handleError);
        }
        
        function saveDelivery(obj) {
			return $http.post('/api/deliveryDispatch/saveDelivery', obj).then(handleSuccess, handleError);
		}

		function updateDelivery(obj) {
			return $http.put('/api/deliveryDispatch/updateDelivery', obj).then(handleSuccess, handleError);
		}

		function deleteDelivery(obj) {
			return $http.put('/api/deliveryDispatch/deleteDelivery', obj).then(handleSuccess, handleError);
		}

		function readOrderEntry(obj){
			return $http.post('/api/deliveryDispatch/readOrderEntry', obj).then(handleSuccess, handleError);
        }
        
        function saveOrderEntry(obj) {
			return $http.post('/api/deliveryDispatch/saveOrderEntry', obj).then(handleSuccess, handleError);
		}

		function updateOrderEntry(obj) {
			return $http.put('/api/deliveryDispatch/updateOrderEntry', obj).then(handleSuccess, handleError);
		}

		function deleteOrderEntry(obj) {
			return $http.put('/api/deliveryDispatch/deleteOrderEntry', obj).then(handleSuccess, handleError);
		}

        function handleSuccess(res) {
           	return res;
        }
        
        function handleError(res) {
        	if(!res.data.redirect) {
        		// swal({
	            //     title: '***Server***',
	            //     text: 'Inside Handle Success Error',
	            //     type: 'warning',
	            //     showCancelButton: false,
	            //     confirmButtonColor: '#3085d6',
	            //     cancelButtonColor: '#d33',
	            //     confirmButtonText: 'Ok!',
	            //     confirmButtonClass: 'btn btn-warning',
	            //     buttonsStyling: false
            	// });
        		return $q.reject(res);
        	} else {
        		console.log('INFO: Explicit redirection from server to: ' + res.data.redirect);
        		$window.location = res.data.redirect;
        	}
        }		
	}

})();