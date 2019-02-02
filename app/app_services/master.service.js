(function () {
	'use strict';
	angular.module('KKB').factory('MasterService', MasterService);

	function MasterService($http, $q, $window) {
		
        var masterService = {};
        
        masterService.readParty = readParty;
		masterService.saveParty = saveParty;
        masterService.updateParty = updateParty;
		masterService.deleteParty = deleteParty;
		masterService.readFinancialYear = readFinancialYear;
		masterService.saveFinancialYear = saveFinancialYear;
        masterService.updateFinancialYear = updateFinancialYear;
		masterService.deleteFinancialYear = deleteFinancialYear;
		
        return masterService;
        
        function readParty(obj){
			return $http.post('/api/master/readParty', obj).then(handleSuccess, handleError);
        }
        
        function saveParty(obj) {
			return $http.post('/api/master/saveParty', obj).then(handleSuccess, handleError);
		}

		function updateParty(obj) {
			return $http.put('/api/master/updateParty', obj).then(handleSuccess, handleError);
		}

		function deleteParty(obj) {
			return $http.put('/api/master/deleteParty', obj).then(handleSuccess, handleError);
		}

		function readFinancialYear(obj){
			return $http.post('/api/master/readFinancialYear', obj).then(handleSuccess, handleError);
        }
        
        function saveFinancialYear(obj) {
			return $http.post('/api/master/saveFinancialYear', obj).then(handleSuccess, handleError);
		}

		function updateFinancialYear(obj) {
			return $http.put('/api/master/updateFinancialYear', obj).then(handleSuccess, handleError);
		}

		function deleteFinancialYear(obj) {
			return $http.put('/api/master/deleteFinancialYear', obj).then(handleSuccess, handleError);
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