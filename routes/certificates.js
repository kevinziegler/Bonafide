var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
    res.render('certificates', {});
});

router.get('/configure', function(req, res) {
    res.render('confiugre', {});
});

router.get('/request', function(req, res) {
    res.render('request', {});
});

router.get('/requests/:id', function(req, res) {
    res.render('csr', {});
});

router.get('/:id', function(req, res) {
    res.render('certificate' , {});
});

router.get('/:id/download', function(req, res) {

});

router.get('/:id/sign', function(req, res) {
     
});

module.exports = router;
