var mongoose = require('mongoose');
// var autopopulate = require('mongoose-autopopulate');
var Schema = mongoose.Schema; // ObjectId  = Schema.ObjectId;
var connObj = require('./conn.service').createConnectionDB();

var schemaService = {};

/*USER SCHEMAS*/
var userSchema = new Schema({
  email:{type:String},
  password:{type:String},
},{versionKey: false});

/*USER MODEL*/
var userModel = connObj.model('user', userSchema, 'user');

/*USER*/
schemaService.userModel = userModel;

module.exports = schemaService;