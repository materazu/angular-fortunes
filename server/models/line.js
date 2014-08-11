'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LineSchema = new Schema({
    user: { type: String, ref: 'user' },
    message: String,
    fortune: { type: String, ref: 'fortune' },
    created_at: Date
});

mongoose.model('line', LineSchema);

var LineModel = mongoose.model('line');
module.exports = LineModel;