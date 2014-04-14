var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/certificates', function(req, res) {

});

router.get('/certificates/configure', function(req, res) {

});

router.get('/certificates/request', function(req, res) {

});

router.get('/certificates/request/:id', function(req, res) {

});

router.get('/certificates/:id', function(req, res) {

});

router.get('/certificates/:id/download', function(req, res) {

});

router.get('/certifcites/:id/sign', function(req, res) {

});

router.get('/user/:id', function(req,res) {

});


module.exports = router;
