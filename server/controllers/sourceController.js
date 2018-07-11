const _ = require('lodash');
const { Source } = require('../models/source');
const mongoose = require('mongoose');

const addSourceInfo = async (req, res) => {
    let data = _.pick(req.body, ['clientMnemonic', 'clientName', 'service', 
    'dm', 'ldm', 'cdm', 'subRegion', 'regionOwningRelationship', 'tier', 
    'clientClass', 'servicePlatform', 'sdTl', 'sdManager', 'sdTeam', 'goLiveDate',
    'accountManager', 'noticeEmail', 'noticeGoLiveDate', 'decomDate', 
    'decommissioned', 'fidUnqiueClientId', 'csTeam', 'csTl', 'qvm', 'serviceLine']);
    
    let source = new Source(data);
    
    try {
        let newSource = await source.save();
        
        res.status(200).send({
            message: 'Source has been added',
            newSource
        });
    } catch (err) {
        res.status(400).send({error: err});
    }
    
};

const getSourceInfo = async (req, res) => {
    let { clientMnemonic } = req.params;
    
    try {
        let source = await Source.find({clientMnemonic});
        
        if (!source) {
            return res.status(404).send({error: `No source info found for ${clientMnemonic}`})
        }
        
        return res.status(200).send({source});
    } catch (err) {
        res.status(400).send({error: err});
    }
};

const updateSourceInfo = async (req, res) => {
    let { clientMnemonic } = req.params;
    
    let data = _.pick(req.body, ['clientMnemonic', 'clientName', 'service', 
    'dm', 'ldm', 'cdm', 'subRegion', 'regionOwningRelationship', 'tier', 
    'clientClass', 'servicePlatform', 'sdTl', 'sdManager', 'sdTeam', 'goLiveDate',
    'accountManager', 'noticeEmail', 'noticeGoLiveDate', 'decomDate', 
    'decommissioned', 'fidUnqiueClientId', 'csTeam', 'csTl', 'qvm', 'serviceLine']);
    
    try {
        let source = await Source.findOneAndUpdate(
            {clientMnemonic},
            {$set: data},
            {new: true}
            );
        
        if (!source) {
            return res.status(404).send({error: `Info for ${data.clientMnemonic} not found.`})
        }
        
        res.status(200).send({
            message: `${data.clientMnemonic} was updated successfully`,
            source
        })
    } catch (err) {
        res.status(400).send({error: err});
    }
    
};


module.exports = {
    addSourceInfo,
    getSourceInfo,
    updateSourceInfo
};

