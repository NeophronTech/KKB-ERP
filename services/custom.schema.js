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
  area: {type:String},
  state: {type:String},
  address: {type:String},
  postal: {type:String},
  contactPerson: {type:String},
  creditLimit: {type:Number},
  line: {type:String},
  transport: {type:String},
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

var masterFinancialYearSchema = new Schema({
  name: {type:String},
  from: {type:String},
  to: {type:String},
  status: {type:Boolean},
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
/* DELIVERY DISPATCH Model */
var stockBookModel = connObj.model('stockBook', stockBookSchema, 'stockBook');
var deliveryModel = connObj.model('delivery', deliverySchema, 'delivery');
var orderEntryModel = connObj.model('orderEntry', orderEntrySchema, 'orderEntry');

/* USER */
schemaService.userModel = userModel;
/* MASTER */
schemaService.masterPartyModel = masterPartyModel;
schemaService.masterFinancialYearModel = masterFinancialYearModel;
/* DELIVERY DISPATCH */
schemaService.stockBookModel = stockBookModel;
schemaService.deliveryModel = deliveryModel;
schemaService.orderEntryModel = orderEntryModel;

module.exports = schemaService;