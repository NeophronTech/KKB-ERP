var express=require('express'), router=express.Router();
var masterService = require('services/master.service');

router.post('/saveParty', controller_addParty);
router.post('/readParty', controller_getParty);
router.put('/updateParty', controller_editParty);
router.put('/deleteParty', controller_removeParty);
router.post('/saveFinancialYear', controller_addFinancialYear);
router.post('/readFinancialYear', controller_getFinancialYear);
router.put('/updateFinancialYear', controller_editFinancialYear);
router.put('/deleteFinancialYear', controller_removeFinancialYear);

module.exports = router;

function controller_addParty(req, res){
	masterService.addParty(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_getParty(req, res){
	masterService.getParty(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_editParty(req, res){
	masterService.editParty(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_removeParty(req, res){
	masterService.removeParty(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_addFinancialYear(req, res){
	masterService.addFinancialYear(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_getFinancialYear(req, res){
	masterService.getFinancialYear(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_editFinancialYear(req, res){
	masterService.editFinancialYear(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_removeFinancialYear(req, res){
	masterService.removeFinancialYear(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}