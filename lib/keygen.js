/**
 * CP keyGen
 *
 * Copyright(c) 2014 Ruben Aarts <ruben@codeprogressive.com>
 *
 * GPLv3 Licensed
 */

'use strict';

/**
 * Current version of the Titanious keyGen module
 *
 * @type {string}
 */
exports.version = "0.0.1";

// expose titanious-() as the module

exports = module.exports = keyGen;


/**
 * The keyGen module object
 */

var keyGen = function(){
    
};
    
    // Set the choosen keyChars
    keyGen.prototype.setKeyChars = function(type){
        
        var keyChars = '';
        
        switch(type){
            case 0:
                // Alphabetic
                keyChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            break;
            case 1:
                // Numeric
                keyChars = '0123456789';
            break;
            case 2:
                // Alphanumeric
                keyChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            break;
            case 3: 
                // Alphanumeric with special chars
                keyChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()}{:|\;<>?/-=~`';
            break;
        };
        
        return keyChars;
        
    };
    
    
    /**
    * The keyGen module object
    * 
    * <code>
    * options: {
    * 
    *       characterLevel : Int
    *       
    *           0 : It will return a alphabetic key
    *           1 : It will return a numeric key
    *           2 : It will return a alphanumeric key
    *           3 : It will return a alphanumeric with special chars key
    *           default 2
    *       
    *       length : Int
    *           The length of the key that will be generated       
    *       
    *       parts : Int
    *           The key will be break up in parts    
    *           
    *       
    * }
    * </code>
    * 
    * @param {Object} options
    */
    keyGen.prototype.createKey = function(options, fn){
        
        // Error handling
        var error = {
            status : false,
            code : 0000,
            message : "No error"
        };
        
        // Check  if the pars is more or even of the key length
        if(options.length < options.parts){
            error.status = true;
            error.code = 0001;
            error.message = 'Not enough characters to break up.';
        };
        
        // Calculate the chars for a part
        var totalCharsByPart = Math.floor(options.length / options.parts);
        
        // Set and get the keychars
        var chars = setKeyChars(options.characterLevel);
        
        var key = '';
        
        // Create the parts
        for(var i = 0; i < options.parts; i++){

            // Set the dash
            if(i === 0){
                var begin = '';
            } else {
                var begin = '-';
            }
            
            var part = '';
            
            // Create the characters
            for(var k=0; k < totalCharsByPart; k++){
                part += chars.charAt(Math.floor(Math.random() * chars.length));
                
            };
            
            key += begin + part;
        };
    
    fn(error, key);

}