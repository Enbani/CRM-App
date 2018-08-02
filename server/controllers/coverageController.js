const _ = require('lodash');
const { Coverage } = require('../models/coverage');
const mongoose = require('mongoose');

// controller to get all contacts for a specified MPID
var getClientCoverage = async (req, res) => {
    let { mpid } = req.query;
    
    try {
        let contacts = await Coverage.find({mpid})
        
        if (!contacts) {
          return res.stastus(404).send({error: "No coverage contacts found"});
        }
        
        res.status(200).send({contacts});
        
    } catch (err) {
        res.status(400).send({error: err});
    }
};

// controller to add a coverage contact
var addCoverageContact = async (req, res) => {
    
    let body = _.pick(req.body, ['position', 'name', 'coverageStart', 
    'coverageEnd', 'mpid']);
    
    var contact = new Coverage(body);
    
    
    try {
        let newContact = await contact.save();
        
        res.status(200).send({
            message: "The coverage contact you entered was successfully saved.",
            payload: newContact
        });
        
        
    } catch (err) {
        res.status(400).send({error: err});
    }
};



var updateCoverageContact = async (req, res) => {
    let contactId = req.params.id;
    
    let data = _.pick(req.body, ['position', 'name', 'coverageStart', 
    'coverageEnd', 'mpid']);
    
    try {
        let updatedCoverage = await Coverage.findOneAndUpdate(
            {_id: contactId},
            {$set: data},
            {new: true}
        );
        
        if (!updatedCoverage) {
            return res.status(404).send({error: 'No contact with that ID'});
        }
        
        res.status(200).send({
            message: 'updated',
            payload: updatedCoverage
        });
    } catch (err) {
        res.status(400).send({error: err});
    }
};


var deleteCoverageContact = async (req, res) => {
    let contactId = req.params.id;
    
    try {
        let deletedContact = await Coverage.findOneAndRemove({_id: contactId});
        
        if (!deletedContact) {
           return res.status(404).send({error: 'No contact with that ID exists'}); 
        }
        
        res.status(200).send({
            message: 'The contact was deleted successfully',
            payload: deletedContact
        })
    } catch (err) {
        return res.status(400).send({error: err});
    }
}


module.exports = {
    getClientCoverage,
    addCoverageContact,
    updateCoverageContact,
    deleteCoverageContact
};