'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    created_at: Date
});

mongoose.model('user', UserSchema);

var UserModel = mongoose.model('user');
module.exports = UserModel;