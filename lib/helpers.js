/*
 * Helpers for constious tasks
 *
 */

// Dependencies
const config = require('./config');


// Container for all the helpers
const helpers = {};

// Parse a JSON string to an object in all cases, without throwing
helpers.parseJsonToObject = function(str){
  try{
    const obj = JSON.parse(str);
    return obj;
  } catch(e){
    return {};
  }
};


// Export the module
module.exports = helpers;
