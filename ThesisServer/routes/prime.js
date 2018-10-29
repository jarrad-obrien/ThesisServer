'use strict';
var express = require('express');
var router = express.Router();
var calculatePrimes = require('../functions/calculatePrimes.js');

/* GET users listing. */
router.get('/', function (req, res) {
    var test = calculatePrimes(100000);
    res.send('respond with a resource ' + test);
});

/* 
 * API call to get the highest prime 
 * 
 * https://blog.abelotech.com/posts/measure-execution-time-nodejs-javascript/
 */
router.post('/', function (req, res) {
	var startTime = new Date();
	var highestPrime = calculatePrimes(req.body.calculateTo);
	var endTime = new Date() - startTime;
	res.json({ highestPrime: highestPrime, time: endTime });
});

module.exports = router;
