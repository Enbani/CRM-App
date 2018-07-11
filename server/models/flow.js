const mongoose = require('mongoose');

const FlowSchema = new mongoose.Schema({
    flowType: String,
    supported: Boolean,
    systems: [String]
});

const Flow = mongoose.model('Flow', FlowSchema);

module.exports = { Flow };

