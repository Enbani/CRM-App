const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const ClientSchema = new mongoose.Schema({
    position: String,
    name: String,
    email: String,
    phone: String,
    mobile: String,
    location: String,
    twitterHandle: String,
    interests: String,
    managerName: String,
    managerTitle: String,
    advocate: String,
    mpid: String,
    comments: String
});

const Client = mongoose.model('Client', ClientSchema);

module.exports = { Client };