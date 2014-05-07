var express = require('express');
var router = express.Router();

var OrganizationalUnit = require('../models/OrganizationalUnit.js');
var Organization = require('../models/Organization.js');


router.get('/', function(req, res) {
    res.render('certificates', {});
});

router.get('/configure', function(req, res) {
    OrganizationalUnit.find({}, function(err, ous) {
        Organization.find({}, function(err, orgs) {
            res.render('configure', {
                title: 'Certificate Configuration',
                organizations : orgs,
                organizational_units : ous
            });
        });
    });
});

router.post('/configure/organizations/add', function(req, res) {
    Organization.create({
        name : req.body.name,
        description : req.body.description,
        country : req.body.country,
        state: req.body.state
    }, function(err, org) {
        if (err) {

        }

        res.redirect('/certificates/configure');
    });
});

router.post('/configure/units/add', function(req, res) {
    OrganizationalUnit.create({
        name : req.body.name,
        description : req.body.description
    }, function(err, ou) { 
        if (err) {

        }

        res.redirect('/certificates/configure');
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
