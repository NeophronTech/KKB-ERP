var express=require('express'), router=express.Router();
var deliveryDispatchService = require('services/deliveryDispatch.service');

router.post('/saveStockBook', controller_addStockBook);
router.post('/readStockBook', controller_getStockBook);
router.put('/updateStockBook', controller_editStockBook);
router.put('/deleteStockBook', controller_removeStockBook);
router.post('/saveDelivery', controller_addDelivery);
router.post('/readDelivery', controller_getDelivery);
router.put('/updateDelivery', controller_editDelivery);
router.put('/deleteDelivery', controller_removeDelivery);
router.post('/saveOrderEntry', controller_addOrderEntry);
router.post('/readOrderEntry', controller_getOrderEntry);
router.put('/updateOrderEntry', controller_editOrderEntry);
router.put('/deleteOrderEntry', controller_removeOrderEntry);

module.exports = router;

function controller_addStockBook(req, res){
	deliveryDispatchService.addStockBook(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_getStockBook(req, res){
	deliveryDispatchService.getStockBook(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_editStockBook(req, res){
	deliveryDispatchService.editStockBook(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_removeStockBook(req, res){
	deliveryDispatchService.removeStockBook(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_addDelivery(req, res){
	deliveryDispatchService.addDelivery(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_getDelivery(req, res){
	deliveryDispatchService.getDelivery(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_editDelivery(req, res){
	deliveryDispatchService.editDelivery(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_removeDelivery(req, res){
	deliveryDispatchService.removeDelivery(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_addOrderEntry(req, res){
	deliveryDispatchService.addOrderEntry(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_getOrderEntry(req, res){
	deliveryDispatchService.getOrderEntry(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_editOrderEntry(req, res){
	deliveryDispatchService.editOrderEntry(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_removeOrderEntry(req, res){
	deliveryDispatchService.removeOrderEntry(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}