'use strict';
var express = require('express');
var router = express.Router();
var calculatePrimes = require('../functions/calculatePrimes.js');

/* GET users listing. */
router.get('/', function (req, res) {
    var test = calculatePrimes(100000);
    res.send('respond with a resource ' + test);
});

router.post('/', function (req, res) {
    console.log(req.body);
    res.send('post to /prime ' + req.body.calculateTo);
});

module.exports = router;
