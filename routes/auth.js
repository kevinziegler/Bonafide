var express = require('express'),
    router = express.Router();
var passport = require('passport');

router.get('/login', function(req, res) {
    res.render('login', {});
});

router.post('/login', passport.authenticate('local', { 
    successfulRedirect : '/',
    failureRedirect : '/auth/login'
}));

router.get('/logout', function(req, res) {
    // TODO: Terminate user's session
    res.redirect('/');
});

module.exports = router;
