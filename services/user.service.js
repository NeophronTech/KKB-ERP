var Q=require('q'), jwt=require('jsonwebtoken');
var config=require('config.json'), schemaObj=require('./custom.schema');
var schemaObj = require('./custom.schema');
var userService = {};

userService.authenticate = userService_authenticate;

module.exports = userService;

function userService_authenticate(email,password,finYear){
	var deferred = Q.defer();
	schemaObj.userModel.findOne({email:email}, function(err, usr){
		if(err){
			console.log("ERROR: LOGIN EMAIL NOT FOUND");
			deferred.reject("ERROR: LOGIN EMAIL NOT FOUND :" + err);
		}
		if(usr){
			if(usr.password== password){
				console.log("Auth successful");
				schemaObj.masterFinancialYearModel.findOne({_id:finYear}, function(err, retObj){
					if(err){
						deferred.resolve({token: jwt.sign({ sub: usr._id }, config.secret)});
					}
					if(retObj){
						deferred.resolve({token: jwt.sign({ sub: usr._id }, config.secret),fyear: retObj});
					} else{
						deferred.resolve({token: jwt.sign({ sub: usr._id }, config.secret)});
					}
				});
				//deferred.resolve({sub:usr._id});
			}
		} else {
			console.log("Auth failed");
			deferred.resolve();
		}
	});
	return deferred.promise;
}