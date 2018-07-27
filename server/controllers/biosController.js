const _ = require('lodash');
const { Bio } = require('../models/bio');
const mongoose = require('mongoose');


// controller to add an MPID and associated information
var addClientInfo = async (req, res) => {
    let data = _.pick(req.body, ['mpid', 'mpidDescription', 'address', 'clientBio',
    'service', 'serviceLine', 'region', 'clientClass', 'platform', 'activeDate',
    'status', 'flows']);
    
    let bio = new Bio(data);
    
    try {
        let newBio = await bio.save();
        
        res.status(200).send({
            message: 'Bio has been added',
            newBio
        });
        
    } catch (err) {
        res.status(400).send({error: err});
    }
    
};


// controller to get client bio information for a specific client
var getClientInfo = async (req, res) => {
    let { mpid } = req.query;
    
    try {
        let bio = await Bio.find({mpid});
        
        if (!bio) {
            return res.status(404).send({error: `No bio found for ${mpid}`});
        }
        
        return res.status(200).send({bio});
        
    } catch (err) {
        res.status(400).send({error: err});
    }
};


// controller to update information for a client
var updateClientInfo = async (req, res) => {
    let { mpid } = req.params;
    
     let data = _.pick(req.body, ['mpid', 'mpidDescription', 'address', 'clientBio',
    'service', 'serviceLine', 'region', 'clientClass', 'platform', 'activeDate',
    'status']);
    
    try {
        let updatedBio = await Bio.findOneAndUpdate(
            {mpid},
            {$set: data},
            {new: true}
        );
        
        if (!updatedBio) {
            return res.status(404).send({error: `${mpid} not found.`});
        }
        
        res.status(200).send({
            message: `${mpid} was updated successfully.`,
            updatedBio
        });
        
    } catch (err) {
        res.status(400).send({error: err})
    }
};


// controller to delete information tied to a client
var deleteClientInfo = async (req, res) => {
    let { mpid } = req.params;
    
    try {
        let deletedBio = await Bio.findOneAndRemove({mpid});
        
        if (!deletedBio) {
            return res.status(404).send({error: `${mpid} does not exist.`})
        }
        
        res.status(200).send({
            message: `${mpid} was removed successfully.`,
            deletedBio
        });
        
    } catch (err) {
        res.status(400).send({error: err});
    }
};


module.exports = {
    addClientInfo,
    getClientInfo,
    updateClientInfo,
    deleteClientInfo
}
;