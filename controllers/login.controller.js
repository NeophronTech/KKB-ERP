var express=require('express'), router=express.Router(), request=require('request'), config=require('../config.json');

//render login page
router.get('/', function(req, res){
	//logout user
	delete req.session.token;
	//move success message into local variable so it only appears once (Single read)
	var viewData = {success:req.session.success};
	delete req.session.success;
	console.log('inside login.controller GET');
	res.render('kkb/login', viewData);
});

router.post('/', function(req, res){
	console.log("Inside login.controller POST");
	//authenticate using api to maintain clean separation between layers
	request.post({
		url: config.apiUrl + '/users/authenticate',
		form : req.body,
		json :true
	}, function(error, response, body){
		if(error){
			console.log('login.controller - POST - callback error');
			return res.render('kkb/login', {error : 'An error occured'});
		}
		if(!body.token){
			console.log('login.controller - POST - not of body.token');
			return res.render('kkb/login', {error:body, email:req.body.email});
		}
		//Save JWT token in the session to make it available to angular app
		req.session.token = body.token;
		console.log('login.controller - POST - body.token');
		console.log(req.query);
		var returnUrl = req.query.returnUrl && decodeURIComponent(req.query.returnUrl) || '/';
		res.redirect(returnUrl);
	});
});

module.exports = router;