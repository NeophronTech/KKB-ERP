var genericService = {};

genericService.isConnected = genericService_isConnected;

module.exports = genericService;

function genericService_isConnected(connObjDB){
	connObjDB.on('open', function(){
		console.log("opened");
	});
	connObjDB.on('connected', function(){
		console.log("connected");
	});
}
