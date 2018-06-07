const _ = require('lodash');
const { Client } = require('../models/client');
const mongoose = require('mongoose');


// controller to get client contacts
var getClientContacts = async (req, res) => {
    let { mpid } = req.query;
    
    try {
        let contacts = await Client.find({mpid});
         if (!contacts) {
             return res.status(404).send({error: `No contacts found for ${mpid}`});
         }
         
         return res.status(200).send({contacts});
    } catch (err) {
        res.status(400).send({error: err});
    }
};

// controller to add a new client for an mpid
var addClientContact = async (req, res) => {
    let data = _.pick(req.body, ['position', 'name', 'email', 'phone', 'mobile',
    'location', 'twitterHandle', 'interests', 'managerName', 'managerTitle',
    'fidessaAdvocate', 'mpid', 'comments']);
    
    let contact = new Client(data);
    
    try {
        let newContact = await contact.save();
        
        res.status(200).send({
            message: 'The new client contact has been added.',
            newContact
        });
    } catch (err) {
        res.status(400).send({error: err});
    }
    
};


// controller to update a client

var updateClientContact = async (req, res) => {
    let contactId = req.params.id;
    
    let data = _.pick(req.body, ['position', 'name', 'email', 'phone', 'mobile',
    'location', 'twitterHandle', 'interests', 'managerName', 'managerTitle',
    'fidessaAdvocate', 'mpid', 'comments']);
    
    try {
        let updatedContact = await Client.findOneAndUpdate(
            {_id: contactId},
            {$set: data},
            {new: true}
        );
        
        if (!updatedContact) {
            return res.status(404).send({error: 'No contact found with that ID.'});
        }
        
        res.status(200).send({
            message: `${data.name} from ${data.mpid} was updated successfully!`,
            updatedContact
        })
    } catch (err) {
        res.status(400).send({error: err});
    }
};


// controller to delete a client contact

var deleteClientContact = async (req, res) => {
    let contactId = req.params.id;
    
    try {
        let deletedContact = await Client.findOneAndRemove({_id: contactId})
        
        if (!deletedContact) {
            return res.status(404).send({error: 'No client with that ID exists.'})
        }
        
        res.status(200).send({
            message: 'The contact was deleted successfully',
            deletedContact
        })
    } catch (err) {
        res.status(400).send({error: err});
    }
};


module.exports = {
    getClientContacts,
    addClientContact,
    updateClientContact,
    deleteClientContact
}