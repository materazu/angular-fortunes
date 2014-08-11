'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FortuneSchema = new Schema({
    user: { type: String, ref: 'user' },
    context: String,
    created_at: Date,
    lines: [{ type: Schema.Types.ObjectId, ref: 'line' }]
});

mongoose.model('fortune', FortuneSchema);

var FortuneModel = mongoose.model('fortune');
module.exports = FortuneModel;
