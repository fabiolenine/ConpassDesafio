var mongoose = require('mongoose');

// create a schema for our links
var q1Schema = new mongoose.Schema({  quant : Number,
                                      step : String,
                                      title_step : String,
                                      flow : String,
                                      title_flow : String
                                    });

exports.model = mongoose.model('q1final',q1Schema);
