var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require('../../config/config');

mongoose.connect(config.db);

var userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    lastStatusCode: String,
    accountStatus: String,
    approvalStatus: String,
    socketId: String,
    onlineStatus: String,
    lastLogin: Date,
    socketId: String,
    eaddress: String,
    eemail: String,
    ephone: String,
    elatLoc: Number,
    elongLoc: Number
});


var users = mongoose.model('TestUser', userSchema);







