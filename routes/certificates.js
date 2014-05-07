var express = require('express');
var router = express.Router();

var OrganizationalUnit = require('../models/OrganizationalUnit.js');


router.get('/', function(req, res) {
    res.render('certificates', {});
});

router.get('/configure', function(req, res) {
    OrganizationalUnit.find({}, function(err, ous) {
        res.render('configure', {
            title: 'Certificate Configuration',
            organizational_units : ous, 
        });
    });
});

router.post('/configure/units/add', function(req, res) {
    OrganizationalUnit.create({
        name : req.body.name,
        description : req.body.description
    }, function(err, ou) { 
        if (err) {

        }

        res.redirect('/configure');
    });
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
