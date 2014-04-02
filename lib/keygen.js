/**
 * Titanious keyGen
 *
 * Copyright(c) 2014 Ruben Aarts <ruben@codeprogressive.com>
 *
 * GPLv3 Licensed
 */

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

function keyGen(){
    
    var self = {};
    
    var keyChars = '';
    
    
    // Set the choosen keyChars
    var setKeyChars = function(type){
        
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
    self.createKey = function(options){
        
        
        
        // Error handling
        var error = {
            status : false,
            code : 0000,
            message : "No error"
        };
        
        // Check  if the pars is more or even of the key length
        if(options.length >= options.parts){
            error.status = true;
            error.code = 0001;
            error.message = 'Not enough characters to break up.';
        }
        
        // Set the keychars
        setKeyChars(options.characterLevel);
        
        
    };
    
}