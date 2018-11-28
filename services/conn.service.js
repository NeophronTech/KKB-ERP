var config=require('config.json'), mongoose=require('mongoose');
var dbService = {};

dbService.createConnectionDB = dbService_createConnectionDB;

module.exports = dbService;

function dbService_createConnectionDB(){
	return mongoose.createConnection(config.connectionString + 'kkb', {useNewUrlParser:true});
}