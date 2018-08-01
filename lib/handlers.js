//var _data = require('./data');


var handlers = {};


handlers.hello = function(data,callback){
  var acceptableMethods = ['post'];
  if(acceptableMethods.indexOf(data.method) > -1){//if date method exists within the acceptableMethods array
    handlers._hello[data.method](data,callback);
  } else {
    callback(405);//method not allowed
  }
};

// Container for all the hello methods
handlers._hello  = {};

// hello - post
handlers._hello.post = function(data,callback){
  // Check that all required fields are filled out
  var postmanMessage = typeof(data.payload.postmanMessage) == 'string' && data.payload.postmanMessage.trim().length > 0 ? data.payload.postmanMessage.trim() : false;

  // if(postmanMessage){
  //
  //       _data.read('hello',postmanMessage,function(err,data){
  //
  //             if(err){
  //               var helloObject = {
  //                 'postmanMessage' : postmanMessage
  //                 };
  //               }
  //
  //                 _data.create('hello',helloObject,function(err){
  //                   if(!err){
  //                     callback(200, {'Message' : 'Message successfully sent via Postman!'});
  //                   } else {
  //                     console.log(err);
  //                     callback(500,{'Error' : 'Could not create the new message'});
  //                   }
  //                 });
  //       });
  // }


};

handlers.notFound = function(data,callback){
  callback(404);
};

module.exports = handlers;
