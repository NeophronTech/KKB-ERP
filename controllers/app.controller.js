var express = require('express');
var router = express.Router();

router.use('/', function(req, res, next){
	if(req.path !== '/login' && !req.session.token){
		// console.log("inside app.controller - req.path != /login && !req.session.token");
		return res.redirect('/login');
	} 
	next();
});

// router.get('/', function(req,res) {
// 	var viewData = {success : req.session.success}; //move success message into local variable so it only appears once (Single read)
// 	// userService.logOut();
// 	req.session.destroy(function(err) {
// 		if(err) {
// 			console.log(err);
// 		} else {
// 			console.log('Session deleted');
// 			res.render('kkb/login', viewData.success);
// 		}
// 	});
// });

//make JWT token available to angular app
router.get('/token', function(req, res){
	res.send(req.session.token);
});

//serve angular app folder files from the '/app/' route
router.use('/', express.static('app'));
 
module.exports = router;