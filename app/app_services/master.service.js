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
		masterService.readLoggedFinancialYear = readLoggedFinancialYear;
		masterService.saveFinancialYear = saveFinancialYear;
        masterService.updateFinancialYear = updateFinancialYear;
		masterService.deleteFinancialYear = deleteFinancialYear;
		masterService.readState = readState;
		masterService.saveState = saveState;
        masterService.updateState = updateState;
		masterService.deleteState = deleteState;
		masterService.readLine = readLine;
		masterService.saveLine = saveLine;
        masterService.updateLine = updateLine;
		masterService.deleteLine = deleteLine;
		masterService.readArea = readArea;
		masterService.saveArea = saveArea;
        masterService.updateArea = updateArea;
		masterService.deleteArea = deleteArea;
		masterService.readTransport = readTransport;
		masterService.saveTransport = saveTransport;
        masterService.updateTransport = updateTransport;
		masterService.deleteTransport = deleteTransport;
		
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
		
		function readLoggedFinancialYear(){
			return $http.get('/api/master/readLoggedFinancialYear', ).then(handleSuccess, handleError);
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

		function readState(obj){
			return $http.post('/api/master/readState', obj).then(handleSuccess, handleError);
        }
        
        function saveState(obj) {
			return $http.post('/api/master/saveState', obj).then(handleSuccess, handleError);
		}

		function updateState(obj) {
			return $http.put('/api/master/updateState', obj).then(handleSuccess, handleError);
		}

		function deleteState(obj) {
			return $http.put('/api/master/deleteState', obj).then(handleSuccess, handleError);
		}

		function readLine(obj){
			return $http.post('/api/master/readLine', obj).then(handleSuccess, handleError);
        }
        
        function saveLine(obj) {
			return $http.post('/api/master/saveLine', obj).then(handleSuccess, handleError);
		}

		function updateLine(obj) {
			return $http.put('/api/master/updateLine', obj).then(handleSuccess, handleError);
		}

		function deleteLine(obj) {
			return $http.put('/api/master/deleteLine', obj).then(handleSuccess, handleError);
		}

		function readArea(obj){
			return $http.post('/api/master/readArea', obj).then(handleSuccess, handleError);
        }
        
        function saveArea(obj) {
			return $http.post('/api/master/saveArea', obj).then(handleSuccess, handleError);
		}

		function updateArea(obj) {
			return $http.put('/api/master/updateArea', obj).then(handleSuccess, handleError);
		}

		function deleteArea(obj) {
			return $http.put('/api/master/deleteArea', obj).then(handleSuccess, handleError);
		}

		function readTransport(obj){
			return $http.post('/api/master/readTransport', obj).then(handleSuccess, handleError);
        }
        
        function saveTransport(obj) {
			return $http.post('/api/master/saveTransport', obj).then(handleSuccess, handleError);
		}

		function updateTransport(obj) {
			return $http.put('/api/master/updateTransport', obj).then(handleSuccess, handleError);
		}

		function deleteTransport(obj) {
			return $http.put('/api/master/deleteTransport', obj).then(handleSuccess, handleError);
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