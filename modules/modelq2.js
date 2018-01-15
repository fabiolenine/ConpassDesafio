var mongoose = require('mongoose');

// create a schema for our links
var q2Schema = new mongoose.Schema({  flows: [String],
                                      user_id : String,
                                      user_name : String,
                                      user_email : String,
                                      user_alias : String
                                    });

exports.model = mongoose.model('q2final',q2Schema);
