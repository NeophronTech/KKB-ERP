var express=require('express'), router=express.Router();
var masterService = require('services/master.service');

router.post('/saveParty', controller_addParty);
router.post('/readParty', controller_getParty);
router.put('/updateParty', controller_editParty);
router.put('/deleteParty', controller_removeParty);
router.post('/saveFinancialYear', controller_addFinancialYear);
router.post('/readFinancialYear', controller_getFinancialYear);
router.get('/readLoggedFinancialYear', controller_getLoggedFinancialYear);
router.put('/updateFinancialYear', controller_editFinancialYear);
router.put('/deleteFinancialYear', controller_removeFinancialYear);
router.post('/saveState', controller_addState);
router.post('/readState', controller_getState);
router.put('/updateState', controller_editState);
router.put('/deleteState', controller_removeState);
router.post('/saveLine', controller_addLine);
router.post('/readLine', controller_getLine);
router.put('/updateLine', controller_editLine);
router.put('/deleteLine', controller_removeLine);
router.post('/saveArea', controller_addArea);
router.post('/readArea', controller_getArea);
router.put('/updateArea', controller_editArea);
router.put('/deleteArea', controller_removeArea);
router.post('/saveTransport', controller_addTransport);
router.post('/readTransport', controller_getTransport);
router.put('/updateTransport', controller_editTransport);
router.put('/deleteTransport', controller_removeTransport);

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

function controller_getLoggedFinancialYear(req, res){
	res.send(req.session.fyear);
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

function controller_addState(req, res){
	masterService.addState(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_getState(req, res){
	masterService.getState(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_editState(req, res){
	masterService.editState(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_removeState(req, res){
	masterService.removeState(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_addLine(req, res){
	masterService.addLine(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_getLine(req, res){
	masterService.getLine(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_editLine(req, res){
	masterService.editLine(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_removeLine(req, res){
	masterService.removeLine(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_addArea(req, res){
	masterService.addArea(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_getArea(req, res){
	masterService.getArea(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_editArea(req, res){
	masterService.editArea(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_removeArea(req, res){
	masterService.removeArea(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_addTransport(req, res){
	masterService.addTransport(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_getTransport(req, res){
	masterService.getTransport(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_editTransport(req, res){
	masterService.editTransport(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}

function controller_removeTransport(req, res){
	masterService.removeTransport(req.body).then(function(retObj){
		if(retObj){
			res.send(retObj);
		} else{
			res.sendStatus(404);
		}
	}).catch(function(err){
		res.status(503).send(err);
	});
}