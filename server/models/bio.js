const mongoose = require('mongoose');


const BioSchema = new mongoose.Schema({
    mpid: {
        type: String,
        unique: true
    },
    mpidDescription: String,
    address: String,
    clientBio: String,
    service: String,
    serviceLine: String,
    region: String,
    clientClass: String,
    platform: String,
    activeDate: String,
    status: String,
    flows: [{
        flowType: String,
        supported: Boolean,
        adjacent: Boolean,
        system: String,
        duration: String
    }]
    
});

const Bio = mongoose.model('Bio', BioSchema);

module.exports = { Bio };

