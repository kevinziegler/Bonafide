var express = require('express'),
    router = express.Router();

router.get('/login', function(req, res) {
    res.render('login', {});
});

router.post('/login', function(req, res) {
    console.log('Received login request from '+req.body.email);
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    // TODO: Terminate user's session
    res.redirect('/');
});

module.exports = router;
