'use strict';
var constant =require('./helper/constant.js')
var arraySort = require('array-sort');

module.exports.AllEvents = async (event, context) => {
  var lst=constant.events;
    var d=new Date();
    
    d.setDate(d.getDate()-90);
    
    var filtered = lst.filter(item=>{
        var time = new Date(item.datetime).getTime();
        return time>d.getTime()
    });

    var lst=arraySort(filtered, 'datetime', {reverse: true});
  return {
    statusCode: 200,
    body: JSON.stringify(lst),
  };

  
};

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.mailJson = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ name: 'test', email: 'test@gmail.com', phone: '9791135458', subject: 'my first mail', message: 'hello word', domain: 'test' }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
