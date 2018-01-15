/*jshint esversion: 6 */

module.exports = function(mongoose)
{
  const q1   = require('./modelq1');
  const q2   = require('./modelq2');
  const q3   = require('./modelq3');

  let userrubs = function(callback){
    q1.model.find({}, function(err,result){
      if(!err) callback(null, result);
      else callback(err, null);
    });
  };

  let usersflowend = function(callback){
    q2.model.find({}, function(err,result){
      if(!err) callback(null, result);
      else callback(err, null);
    });
  };

  let flowsstart = function(callback){
    q3.model.find({status: "start"}).sort({quant:-1}).exec(function(err,result){
      if(!err) callback(null, result);
      else callback(err, null);
    });
  };

  let flowsend = function(callback){
    q3.model.find({status: "end"}).sort({quant:-1}).exec(function(err,result){
      if(!err) callback(null, result);
      else callback(err, null);
    });
  };

  let regress = {
                  "userrubs"    : userrubs,
                  "usersflowend": usersflowend,
                  "flowsstart"  : flowsstart,
                  "flowsend"    : flowsend
                };

  return regress;
};
