/**
 * CP keyGen
 *
 * Copyright(c) 2014 Ruben Aarts <ruben@codeprogressive.com>
 *
 * GPLv3 Licensed
 */

'use strict';

var keyGenClass = require('./lib/keygen.js');

var keyGen = new keyGen();

var options = {
    characterLevel: 2,
    length: 20,
    parts: 4
};

keyGen.createKey(options, function(err, key){
    console.log(err);
    console.log('key: ' + key);
});