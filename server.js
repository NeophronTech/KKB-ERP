require('rootpath')();
var express=require('express'), app=express(), path=require('path'), session=require('express-session'), bodyParser=require('body-parser'), expressJwt=require('express-jwt');
var config=require('config.json');

// support json encoded bodies
app.use(bodyParser.json({limit:'10mb', extended:true}))
app.use(bodyParser.urlencoded({limit:'10mb', extended:true})) 

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//create session 
app.use(session({secret:config.secret, name:'sessionID', resave:true, saveUninitialized:true, rolling:true, cookie:{secure:false, maxAge:100*100*100*18}}));

//use JWT auth to secure the api except '/api/users/authenticate' and '/api/users/register''
app.use('/api', expressJwt({secret:config.secret}).unless({path:['/api/users/authenticate']}));

//used in .html file to load assets statically
app.use(express.static(path.join(__dirname, 'assets'))); 

//routes
app.use('/login', require('./controllers/login.controller'));
app.use('/app', require('./controllers/app.controller'));
app.use('/api/users', require('./controllers/api/users.controller'));

//Redirect to app controller
app.get('/',function(req,res){
	return res.redirect('/app');
});

//start web sserver
var server = app.listen(5000, function(){
	console.log('KKB server listening at http://' + server.address().address + ':' + server.address().port);
});
