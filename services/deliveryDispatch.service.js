var Q=require('q'), moment=require('moment');
var schemaObj = require('./custom.schema');

var masterService = {};

masterService.addStockBook = service_addStockBook;
masterService.getStockBook = service_getStockBook;
masterService.editStockBook = service_editStockBook;
masterService.removeStockBook = service_removeStockBook;
masterService.addDelivery = service_addDelivery;
masterService.getDelivery = service_getDelivery;
masterService.editDelivery = service_editDelivery;
masterService.removeDelivery = service_removeDelivery;
masterService.addOrderEntry = service_addOrderEntry;
masterService.getOrderEntry = service_getOrderEntry;
masterService.editOrderEntry = service_editOrderEntry;
masterService.removeOrderEntry = service_removeOrderEntry;

module.exports = masterService;

function service_addStockBook(obj){
    var deferred = Q.defer();
    obj.active = true;
	schemaObj.stockBookModel.create(obj, function(err, res){
        if(err){
			console.log("ERROR: Add stock book :" + err);
            deferred.reject("ERROR: Add stock book :" + err);
        }
        if(res){			
            deferred.resolve(res);
        }
    });
	return deferred.promise;
}

function service_getStockBook(obj){
	var deferred = Q.defer();
	schemaObj.stockBookModel.find(obj, function(err, res){
        if(err){
            console.log("ERROR: Get stock book :" + err);
            deferred.reject("ERROR: Get stock book :" + err);
        }
        if(res){			
            deferred.resolve(res);
        }
    });
	return deferred.promise;
}

function service_editStockBook(obj){
	var deferred = Q.defer();
	schemaObj.stockBookModel.findOneAndUpdate({_id:obj._id}, obj, function(err, res){
		if(err){
			console.log("ERROR: Edit stock book :" + err);
            deferred.reject("ERROR: Edit stock book :" + err);
		}
		if(res){
			deferred.resolve(res);
		}
	});
	return deferred.promise;
}

function service_removeStockBook(obj){
	var deferred = Q.defer();
	schemaObj.stockBookModel.findOneAndUpdate({_id:obj._id}, {active:false}, function(err, res){
		if(err){
			console.log("ERROR: Remove stock book :" + err);
            deferred.reject("ERROR: Remove stock book :" + err);
		}
		if(res){
			deferred.resolve(res);
		}
	});
	return deferred.promise;
}

function service_addDelivery(obj){
    var deferred = Q.defer();
    obj.active = true;
	schemaObj.deliveryModel.create(obj, function(err, res){
        if(err){
			console.log("ERROR: Add master delivery :" + err);
            deferred.reject("ERROR: Add master delivery :" + err);
        }
        if(res){
			deferred.resolve(res);
        }
    });
	return deferred.promise;
}

function service_getDelivery(obj){
	var deferred = Q.defer();
	schemaObj.deliveryModel.find(obj, function(err, res){
        if(err){
            console.log("ERROR: Get master delivery :" + err);
            deferred.reject("ERROR: Get master delivery :" + err);
        }
        if(res){			
            deferred.resolve(res);
        }
    });
	return deferred.promise;
}

function service_editDelivery(obj){
	var deferred = Q.defer();
	schemaObj.deliveryModel.findOneAndUpdate({_id:obj._id}, obj, function(err, res){
		if(err){
			console.log("ERROR: Edit master delivery :" + err);
            deferred.reject("ERROR: Edit master delivery :" + err);
		}
		if(res){
			deferred.resolve(res);
		}
	});
	return deferred.promise;
}

function service_removeDelivery(obj){
	var deferred = Q.defer();
	schemaObj.deliveryModel.findOneAndUpdate({_id:obj._id}, {active:false}, function(err, res){
		if(err){
			console.log("ERROR: Remove master delivery :" + err);
            deferred.reject("ERROR: Remove master delivery :" + err);
		}
		if(res){
			deferred.resolve(res);
		}
	});
	return deferred.promise;
}

function service_addOrderEntry(obj){
    var deferred = Q.defer();
	obj.active = true;
	schemaObj.orderEntryModel.create(obj, function(err, res){
        if(err){
			console.log("ERROR: Add order entry :" + err);
            deferred.reject("ERROR: Add order entry :" + err);
        }
        if(res){			
            deferred.resolve(res);
        }
    });
	return deferred.promise;
}

function service_getOrderEntry(obj){
	var deferred = Q.defer();
	schemaObj.orderEntryModel.find(obj, function(err, res){
        if(err){
            console.log("ERROR: Get order entry :" + err);
            deferred.reject("ERROR: Get order entry :" + err);
        }
        if(res){			
            deferred.resolve(res);
        }
    });
	return deferred.promise;
}

function service_editOrderEntry(obj){
	var deferred = Q.defer();
	schemaObj.orderEntryModel.findOneAndUpdate({_id:obj._id}, obj, function(err, res){
		if(err){
			console.log("ERROR: Edit order entry :" + err);
            deferred.reject("ERROR: Edit order entry :" + err);
		}
		if(res){
			deferred.resolve(res);
		}
	});
	return deferred.promise;
}

function service_removeOrderEntry(obj){
	var deferred = Q.defer();
	schemaObj.orderEntryModel.findOneAndUpdate({_id:obj._id}, {active:false}, function(err, res){
		if(err){
			console.log("ERROR: Remove order entry :" + err);
            deferred.reject("ERROR: Remove order entry :" + err);
		}
		if(res){
			deferred.resolve(res);
		}
	});
	return deferred.promise;
}