/*
 * Request Handlers
 *
 */

// Dependencies
const _data = require('./data');
const helpers = require('./helpers');

// Define all the handlers
const handlers = {};



// Not-Found
handlers.notFound = function(data,callback){
  callback(404);
};

// hello
handlers.hello = function(data,callback){
  const acceptableMethods = ['post','get','put','delete'];
  if(acceptableMethods.indexOf(data.method) > -1){//if date method exists within the macceptabethods array
    handlers._hello[data.method](data,callback);
  } else {
    callback(405);
  }
};

// Container for all the hello methods
handlers._hello  = {};

// hello - post
// Required data: name, userMessage, phone

handlers._hello.post = function(data,callback){
  // Check that all required fields are filled out
  const name = typeof(data.payload.name) == 'string' && data.payload.name.trim().length > 0 ? data.payload.name.trim() : false;
  const userMessage = typeof(data.payload.userMessage) == 'string' && data.payload.userMessage.trim().length > 0 ? data.payload.userMessage.trim() : false;
  const phone = typeof(data.payload.phone) == 'string' && data.payload.phone.trim().length == 10 ? data.payload.phone.trim() : false;



  if(name && userMessage && phone){
    // Make sure the user doesnt already exist
    _data.read('hello',phone,function(err,data){
      if(err){

        // Create the user object

          const userObjects = [{
            'name' : name,
            'userMessage' : userMessage,
            'phone' : phone
          }
        ]

        const postmandMessage = userObjects.map(userObject => `${userObject.userMessage}`);
        const returnedMessage = Object.values(postmandMessage);
        const postmanUser = userObjects.map(userObject => `${userObject.name}`);
        const returnedUser = Object.values(postmanUser);

        //console.log(returnedMessage);
        console.log(`Message from ${returnedUser}: ${returnedMessage} `);
          // Store the hello data
          _data.create('hello',phone,userObjects,function(err){
            if(!err){
              callback(200);
            } else {
              console.log(err);
              callback(500,{'Error' : 'Could not create the new user or message'});
            }
          });
        } else {
        // User alread exists
        callback(400,{'Error' : 'A user with that phone number already exists'});
      }
    });

  } else {
    callback(400,{'Error' : 'Missing required fields'});
  }

};




// Export the handlers
module.exports = handlers;
