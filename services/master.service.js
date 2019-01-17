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
masterService.addState = service_addState;
masterService.getState = service_getState;
masterService.editState = service_editState;
masterService.removeState = service_removeState;
masterService.addLine = service_addLine;
masterService.getLine = service_getLine;
masterService.editLine = service_editLine;
masterService.removeLine = service_removeLine;
masterService.addArea = service_addArea;
masterService.getArea = service_getArea;
masterService.editArea = service_editArea;
masterService.removeArea = service_removeArea;
masterService.addTransport = service_addTransport;
masterService.getTransport = service_getTransport;
masterService.editTransport = service_editTransport;
masterService.removeTransport = service_removeTransport;

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

function service_addState(obj){
    var deferred = Q.defer();
    obj.active = true;
	schemaObj.masterStateModel.create(obj, function(err, res){
        if(err){
			console.log("ERROR: Add master state :" + err);
            deferred.reject("ERROR: Add master state :" + err);
        }
        if(res){			
            deferred.resolve(res);
        }
    });
	return deferred.promise;
}

function service_getState(obj){
	var deferred = Q.defer();
	schemaObj.masterStateModel.find(obj, function(err, res){
        if(err){
            console.log("ERROR: Get master state :" + err);
            deferred.reject("ERROR: Get master state :" + err);
        }
        if(res){			
            deferred.resolve(res);
        }
    });
	return deferred.promise;
}

function service_editState(obj){
	var deferred = Q.defer();
	schemaObj.masterStateModel.findOneAndUpdate({_id:obj._id}, obj, function(err, res){
		if(err){
			console.log("ERROR: Edit master state :" + err);
            deferred.reject("ERROR: Edit master state :" + err);
		}
		if(res){
			deferred.resolve(res);
		}
	});
	return deferred.promise;
}

function service_removeState(obj){
	var deferred = Q.defer();
	schemaObj.masterStateModel.findOneAndUpdate({_id:obj._id}, {active:false}, function(err, res){
		if(err){
			console.log("ERROR: Remove master state :" + err);
            deferred.reject("ERROR: Remove master state :" + err);
		}
		if(res){
			deferred.resolve(res);
		}
	});
	return deferred.promise;
}

function service_addLine(obj){
    var deferred = Q.defer();
    obj.active = true;
	schemaObj.masterLineModel.create(obj, function(err, res){
        if(err){
			console.log("ERROR: Add master line :" + err);
            deferred.reject("ERROR: Add master line :" + err);
        }
        if(res){			
            deferred.resolve(res);
        }
    });
	return deferred.promise;
}

function service_getLine(obj){
	var deferred = Q.defer();
	schemaObj.masterLineModel.find(obj, function(err, res){
        if(err){
            console.log("ERROR: Get master line :" + err);
            deferred.reject("ERROR: Get master line :" + err);
        }
        if(res){			
            deferred.resolve(res);
        }
    });
	return deferred.promise;
}

function service_editLine(obj){
	var deferred = Q.defer();
	schemaObj.masterLineModel.findOneAndUpdate({_id:obj._id}, obj, function(err, res){
		if(err){
			console.log("ERROR: Edit master line :" + err);
            deferred.reject("ERROR: Edit master line :" + err);
		}
		if(res){
			deferred.resolve(res);
		}
	});
	return deferred.promise;
}

function service_removeLine(obj){
	var deferred = Q.defer();
	schemaObj.masterLineModel.findOneAndUpdate({_id:obj._id}, {active:false}, function(err, res){
		if(err){
			console.log("ERROR: Remove master line :" + err);
            deferred.reject("ERROR: Remove master line :" + err);
		}
		if(res){
			deferred.resolve(res);
		}
	});
	return deferred.promise;
}

function service_addArea(obj){
    var deferred = Q.defer();
    obj.active = true;
	schemaObj.masterAreaModel.create(obj, function(err, res){
        if(err){
			console.log("ERROR: Add master area :" + err);
            deferred.reject("ERROR: Add master area :" + err);
        }
        if(res){			
            deferred.resolve(res);
        }
    });
	return deferred.promise;
}

function service_getArea(obj){
	var deferred = Q.defer();
	schemaObj.masterAreaModel.find(obj, function(err, res){
        if(err){
            console.log("ERROR: Get master area :" + err);
            deferred.reject("ERROR: Get master area :" + err);
        }
        if(res){			
            deferred.resolve(res);
        }
    });
	return deferred.promise;
}

function service_editArea(obj){
	var deferred = Q.defer();
	schemaObj.masterAreaModel.findOneAndUpdate({_id:obj._id}, obj, function(err, res){
		if(err){
			console.log("ERROR: Edit master area :" + err);
            deferred.reject("ERROR: Edit master area :" + err);
		}
		if(res){
			deferred.resolve(res);
		}
	});
	return deferred.promise;
}

function service_removeArea(obj){
	var deferred = Q.defer();
	schemaObj.masterAreaModel.findOneAndUpdate({_id:obj._id}, {active:false}, function(err, res){
		if(err){
			console.log("ERROR: Remove master area :" + err);
            deferred.reject("ERROR: Remove master area :" + err);
		}
		if(res){
			deferred.resolve(res);
		}
	});
	return deferred.promise;
}

function service_addTransport(obj){
    var deferred = Q.defer();
    obj.active = true;
	schemaObj.masterTransportModel.create(obj, function(err, res){
        if(err){
			console.log("ERROR: Add master transport :" + err);
            deferred.reject("ERROR: Add master transport :" + err);
        }
        if(res){			
            deferred.resolve(res);
        }
    });
	return deferred.promise;
}

function service_getTransport(obj){
	var deferred = Q.defer();
	schemaObj.masterTransportModel.find(obj, function(err, res){
        if(err){
            console.log("ERROR: Get master transport :" + err);
            deferred.reject("ERROR: Get master transport :" + err);
        }
        if(res){			
            deferred.resolve(res);
        }
    });
	return deferred.promise;
}

function service_editTransport(obj){
	var deferred = Q.defer();
	schemaObj.masterTransportModel.findOneAndUpdate({_id:obj._id}, obj, function(err, res){
		if(err){
			console.log("ERROR: Edit master transport :" + err);
            deferred.reject("ERROR: Edit master transport :" + err);
		}
		if(res){
			deferred.resolve(res);
		}
	});
	return deferred.promise;
}

function service_removeTransport(obj){
	var deferred = Q.defer();
	schemaObj.masterTransportModel.findOneAndUpdate({_id:obj._id}, {active:false}, function(err, res){
		if(err){
			console.log("ERROR: Remove master transport :" + err);
            deferred.reject("ERROR: Remove master transport :" + err);
		}
		if(res){
			deferred.resolve(res);
		}
	});
	return deferred.promise;
}