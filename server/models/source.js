const mongoose = require('mongoose');

const SourceSchema = new mongoose.Schema({
    clientMnemonic: String,
    clientName: String,
    service: String,
    dm: String,
    ldm: String,
    cdm: String,
    subRegion: String,
    regionOwningRelationship: String,
    tier: String,
    clientClass: String,
    servicePlatform: String,
    sdTl: String,
    sdManager: String,
    sdTeam: String,
    goLiveDate: String,
    accountManager: String,
    noticeEmail: String,
    noticeGoLiveDate: String,
    decomDate: String,
    decommissioned: String,
    fidUnqiueClientId: String,
    csTeam: String,
    csTl: String,
    qvm: String
});

const Source = mongoose.model('Source', SourceSchema);

module.exports = { Source };
