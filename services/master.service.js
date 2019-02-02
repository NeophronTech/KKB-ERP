var Q=require('q'), moment=require('moment');
var schemaObj = require('./custom.schema');

var masterService = {};

masterService.addParty = service_addParty;
masterService.getParty = service_getParty;
masterService.editParty = service_editParty;
masterService.removeParty = service_removeParty;
masterService.addFinancialYear = service_addFinancialYear;
masterService.getFinancialYear = service_getFinancialYear;
masterService.editFinancialYear = service_editFinancialYear;
masterService.removeFinancialYear = service_removeFinancialYear;

module.exports = masterService;

function service_addParty(obj){
    var deferred = Q.defer();
    obj.active = true;
	schemaObj.masterPartyModel.create(obj, function(err, res){
        if(err){
			console.log("ERROR: Add master party :" + err);
            deferred.reject("ERROR: Add master party :" + err);
        }
        if(res){			
            deferred.resolve(res);
        }
    });
	return deferred.promise;
}

function service_getParty(obj){
	var deferred = Q.defer();
	schemaObj.masterPartyModel.find(obj, function(err, res){
        if(err){
            console.log("ERROR: Get master party :" + err);
            deferred.reject("ERROR: Get master party :" + err);
        }
        if(res){			
            deferred.resolve(res);
        }
    });
	return deferred.promise;
}

function service_editParty(obj){
	var deferred = Q.defer();
	schemaObj.masterPartyModel.findOneAndUpdate({_id:obj._id}, obj, function(err, res){
		if(err){
			console.log("ERROR: Edit master party :" + err);
            deferred.reject("ERROR: Edit master party :" + err);
		}
		if(res){
			deferred.resolve(res);
		}
	});
	return deferred.promise;
}

function service_removeParty(obj){
	var deferred = Q.defer();
	schemaObj.masterPartyModel.findOneAndUpdate({_id:obj._id}, {active:false}, function(err, res){
		if(err){
			console.log("ERROR: Remove master party :" + err);
            deferred.reject("ERROR: Remove master party :" + err);
		}
		if(res){
			deferred.resolve(res);
		}
	});
	return deferred.promise;
}

function service_addFinancialYear(obj){
    var deferred = Q.defer();
    obj.active = true;
	schemaObj.masterFinancialYearModel.create(obj, function(err, res){
        if(err){
			console.log("ERROR: Add master financial year :" + err);
            deferred.reject("ERROR: Add master financial year :" + err);
        }
        if(res){			
			if(obj.status){
				schemaObj.masterFinancialYearModel.update({$and:[{status:true}, {_id:{$ne:res._id}}]}, {$set:{status:false}}, {multi:true}, function(err1, res1){
					if(err1){
						console.log("ERROR: master Financial year disable other status :" + err1);
						deferred.reject("ERROR: master Financial year disable other status :" + err1);
					}
					if(res1){
						deferred.resolve(res);
					}
				});
			} else{
				deferred.resolve(res);
			}
        }
    });
	return deferred.promise;
}

function service_getFinancialYear(obj){
	var deferred = Q.defer();
	schemaObj.masterFinancialYearModel.find(obj, function(err, res){
        if(err){
            console.log("ERROR: Get master financial year :" + err);
            deferred.reject("ERROR: Get master financial year :" + err);
        }
        if(res){			
            deferred.resolve(res);
        }
    });
	return deferred.promise;
}

function service_editFinancialYear(obj){
	var deferred = Q.defer();
	schemaObj.masterFinancialYearModel.findOneAndUpdate({_id:obj._id}, obj, function(err, res){
		if(err){
			console.log("ERROR: Edit master financial year :" + err);
            deferred.reject("ERROR: Edit master financial year :" + err);
		}
		if(res){
			if(obj.status){
				schemaObj.masterFinancialYearModel.update({$and:[{status:true}, {_id:{$ne:obj._id}}]}, {$set:{status:false}}, {multi:true}, function(err1, res1){
					if(err1){
						console.log("ERROR: master Financial year disable other status :" + err1);
						deferred.reject("ERROR: master Financial year disable other status :" + err1);
					}
					if(res1){
						deferred.resolve(res);
					}
				});
			} else{
				deferred.resolve(res);
			}
		}
	});
	return deferred.promise;
}

function service_removeFinancialYear(obj){
	var deferred = Q.defer();
	schemaObj.masterFinancialYearModel.findOneAndUpdate({_id:obj._id}, {active:false}, function(err, res){
		if(err){
			console.log("ERROR: Remove master financial year :" + err);
            deferred.reject("ERROR: Remove master financial year :" + err);
		}
		if(res){
			deferred.resolve(res);
		}
	});
	return deferred.promise;
}