var mongoose=require('mongoose'), autopopulate=require('mongoose-autopopulate'), Schema=mongoose.Schema, ObjectId  = Schema.ObjectId;
var connObj = require('./conn.service').createConnectionDB();

var schemaService = {};

/* USER SCHEMAS */
var userSchema = new Schema({
  email: {type:String},
  password: {type:String}
},{versionKey: false});

/* MASTER SCHEMAS */
var masterPartySchema = new Schema({
  name: {type:String},
  mail: {type:String},
  phone: {type:String},
  sms: {type:String},
  gstin: {type:String},
  pan: {type:String},
  area: {type:Schema.Types.ObjectId, ref:'master_area', autopopulate:{select:'name'}},
  state: {type:Schema.Types.ObjectId, ref:'master_state', autopopulate:{select:'name'}},
  address: {type:String},
  postal: {type:String},
  contactPerson: {type:String},
  creditLimit: {type:Number},
  line: {type:Schema.Types.ObjectId, ref:'master_line', autopopulate:{select:'name'}},
  transport: {type:Schema.Types.ObjectId, ref:'master_transport', autopopulate:{select:'name'}},
  courier: {type:String},
  bookingPlace: {type:String},
  deliveryDays: {type:Number},
  discount: {type:Number},
  discountDate: {type:String},
  discountRemoveDate: {type:String},
  commission: {type:String},
  status: {type:String},
  remark: {type:String},
  active: {type:Boolean}
}, {versionKey: false});
masterPartySchema.plugin(autopopulate);

var masterFinancialYearSchema = new Schema({
  name: {type:String},
  from: {type:String},
  to: {type:String},
  status: {type:Boolean},
  active: {type:Boolean}
}, {versionKey: false});

var masterStateSchema = new Schema({
  code: {type:String},
  name: {type:String},
  active: {type:Boolean}
}, {versionKey: false});

var masterLineSchema = new Schema({
  code: {type:String},
  name: {type:String},
  active: {type:Boolean}
}, {versionKey: false});

var masterAreaSchema = new Schema({
  code: {type:String},
  name: {type:String},
  line: {type:Schema.Types.ObjectId, ref:'master_line', autopopulate:{select:'name'}},
  active: {type:Boolean}
}, {versionKey: false});
masterAreaSchema.plugin(autopopulate);

var masterTransportSchema = new Schema({
  name: {type:String},
  phone1: {type:String},
  phone2: {type:String},
  active: {type:Boolean}
}, {versionKey: false});

/* DELIVERY DISPATCH SCHEMAS */
var stockBookSchema = new Schema({
  name: {type:String},
  orderDate: {type:String},
  purchaseCost: {type:Number},
  inward: {type:String},
  active: {type:Boolean}
}, {versionKey: false});

var deliverySchema = new Schema({
  orderNo: {type:String},
  totalAmount: {type:Number},
  addition1: {type:String},
  addition2: {type:String},
  discount1: {type:String},
  discount2: {type:String},
  taxAmount: {type:Number},
  netAmount: {type:Number},
  instruction: {type:String},
  billingAddress: {type:String},
  shippingAddress: {type:String},
  roundOff: {type:Number},
  active: {type:Boolean}
}, {versionKey: false});

var orderEntrySchema = new Schema({
  orderNo: {type:String},
  orderDate: {type:String},
  partyName: {type:String},
  partyOrderNo: {type:String},
  priceList: {type:String},
  orderReceived: {type:String},
  instruction: {type:String},
  transportName: {type:String},
  transportPlace: {type:String},
  active: {type:Boolean}
}, {versionKey: false});

/* USER MODEL */
var userModel = connObj.model('user', userSchema, 'user');
/* MASTER MODEL */
var masterPartyModel = connObj.model('master_party', masterPartySchema, 'master_party');
var masterFinancialYearModel = connObj.model('master_financialYear', masterFinancialYearSchema, 'master_financialYear');
var masterStateModel = connObj.model('master_state', masterStateSchema, 'master_state');
var masterLineModel = connObj.model('master_line', masterLineSchema, 'master_line');
var masterAreaModel = connObj.model('master_area', masterAreaSchema, 'master_area');
var masterTransportModel = connObj.model('master_transport', masterTransportSchema, 'master_transport');
/* DELIVERY DISPATCH Model */
var stockBookModel = connObj.model('stockBook', stockBookSchema, 'stockBook');
var deliveryModel = connObj.model('delivery', deliverySchema, 'delivery');
var orderEntryModel = connObj.model('orderEntry', orderEntrySchema, 'orderEntry');

/* USER */
schemaService.userModel = userModel;
/* MASTER */
schemaService.masterPartyModel = masterPartyModel;
schemaService.masterFinancialYearModel = masterFinancialYearModel;
schemaService.masterStateModel = masterStateModel;
schemaService.masterLineModel = masterLineModel;
schemaService.masterAreaModel = masterAreaModel;
schemaService.masterTransportModel = masterTransportModel;
/* DELIVERY DISPATCH */
schemaService.stockBookModel = stockBookModel;
schemaService.deliveryModel = deliveryModel;
schemaService.orderEntryModel = orderEntryModel;

module.exports = schemaService;