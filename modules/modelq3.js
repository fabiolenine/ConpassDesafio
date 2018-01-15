var mongoose = require('mongoose');

// create a schema for our links
var q3Schema = new mongoose.Schema({quant : Number,
                                    flow_id: String,
                                    status: String,
                                    flow_title: String
                                  });

exports.model = mongoose.model('q3final',q3Schema);
