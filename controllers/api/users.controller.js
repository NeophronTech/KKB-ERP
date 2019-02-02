var express = require('express');
var router = express.Router();
var userService = require('services/user.service');
const util = require('util');

router.post('/authenticate', authenticateUser);
router.get('/current', getCurrentUser);

module.exports = router;

function authenticateUser(req,res) {
		console.log('inside user.controller - authenticateUser');
		userService.authenticate(req.body.email,req.body.password)
			.then(function(token) {
				console.log("promise token :" + token);
				//console.log('user details :' + res.user);
				if(token) {
					//auth successfull
					res.send({ token: token });
				} else {
					res.status(401).send('Username or password is incorrect');
				}
			})
			.catch(function (err) {
				res.status(400).send(err);
			});
}

function getCurrentUser(req,res) {
	//console.log("request object:" + util.inspect(req.user.sub));
	userService.getById(req.user.sub)
	.then(function(usr) {
		if(usr) {
			res.send(usr);
		} else {
			res.sendStatus(404);
		}
	})
	.catch(function(err) {
		res.status(400).send(err);
	});
}