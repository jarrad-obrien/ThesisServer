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
	var start = new Date();
	var highestPrime = calculatePrimes(req.body.calculateTo);
	var end = new Date() - start;
	res.send('post to /prime. Highest prime up to ' + req.body.calculateTo + ' is: ' + highestPrime + '. It took ' + end + ' to process');
});

module.exports = router;
