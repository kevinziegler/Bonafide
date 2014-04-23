var express = require('express');
var router = express.Router();
var UserModel = require('../models/User.js'),
    User = UserModel.User;

//var UserModel = require('models/User.js'),
    //User = UserModel.User;

/* GET users listing. */
router.get('/', function(req, res) {
  User.find({}, function(err, users) {
        res.render('users', { 
            title : 'Users',  
            users : users 
        });
  });
});

router.get('/register', function(req, res) {
    res.render('register', {});
});

router.post('/register', function(req, res) {
    console.log('Received registration request: ' + req.body.email);
    user = new User({
        username : req.body.email, 
        email : req.body.email,
        name : {
            first : req.body.first_name,
            last : req.body.last_name,
        }
    });

    User.register(user, req.body.password, function (err, user) {
        if (err) {
            return res.render('register', {user : user});
        }
        
        passport.authenticate('local')(req, res, function() {
            res.redirect('/');
        });
    });
});

router.get('/:id', function(req,res) {

});

module.exports = router;
