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
    
    console.log('this was the request \n\n\n', req);
    
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
    console.log('made it to the server');
    let { mpid } = req.params;
    
    
     let data = _.pick(req.body, ['mpid', 'mpidDescription', 'address', 'clientBio',
    'service', 'serviceLine', 'region', 'clientClass', 'platform', 'activeDate',
    'status', 'flows']);
    
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

var addFlows = async (req, res) => {
    // come back and check why comment isn't updating
	let { mpid } = req.params;
    
    let data = _.pick(req.body, ['flowType', 'supported', 'system', 'adjacent', 'comment']);

	try {
	    let updatedFlows = await Bio.findOneAndUpdate(
	    {mpid},
	    {$addToSet : {"flows" : data}},
	    {new: true}
	    );
	    
	    console.log('this is the updated flows', updatedFlows);
	    
	    if (!updatedFlows) {
	        return res.status(404).send({error: 'That mpid not found'});
	    }
	    
	    res.status(200).send({
            message: `${mpid} was updated successfully.`,
            updatedFlows 
	        
	    });
    } catch (err) {
        res.status(400).send({error: err});
    }
};

var deleteFlows = async(req, res) => {
    let { mpid } = req.params;
    let id = _.pick(req.body, ['id']);
    try {
        let deletedFlow = await Bio.findOneAndUpdate( 
        {mpid},
        {$pull: { "flows": {$elemMatch: { "_id": id.id }}}} );
        
        if (!deletedFlow) {
            return res.status(404).send({error: `${id} is not a valid flow`});
        }
        
        res.status(200).send({
            message: `deleted successfully`,
            deletedFlow,
        });
    } catch (err) {
        res.status(400).send({error: err});
    }
};

var updateFlows = async(req, res) => {
    let { mpid } = req.params;

    let {id, comment} = req.body;

    console.log(`this is id: ${id} \n\n and this is comment: ${comment}\n\n`)
    
    try {
        let updatedFlow = await Bio.findOneAndUpdate(
        {
            mpid,
            "flows._id": id
        },
        {
            $set: {"flows.$.comment": comment}
            
        },
        {new: true}
        );
        
        if (!updatedFlow) {
            return res.status(404).send({error: 'there was an error with the req'})
        }
        
        res.status(200).send({
            message: `${mpid} was updated successfully.`,
            updatedFlow 
        });
    }
    catch (err) {
        res.status(400).send({error: err});
    }
};


module.exports = {
    addClientInfo,
    getClientInfo,
    updateClientInfo,
    deleteClientInfo,
    addFlows,
    deleteFlows,
    updateFlows,
}
;