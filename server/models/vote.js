'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VoteSchema = new Schema({
    note: Number,
    fortune: String,
    created_at: Date
});

mongoose.model('vote', VoteSchema);

var VoteModel = mongoose.model('vote');
module.exports = VoteModel;