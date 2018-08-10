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
    'coverageEnd', 'mpid', 'active']);
    
    var contact = new Coverage(body);
    
    
    try {
        let newContact = await contact.save();
        
        res.status(200).send({
            message: "The coverage contact you entered was successfully saved.",
            newContact
        });
        
        
    } catch (err) {
        res.status(400).send({error: err});
    }
};

var deleteCoverageContact = async (req, res) => {
    let {id} = req.params;
    try {
        let deletedContact = await Coverage.findOneAndRemove( { _id: id } );
        
        if (!deletedContact) {
            return res.status(404).send({error: 'No coverage with that ID exists.'})
        }
        
        res.status(200).send({
            message: 'The contact was deleted successfully',
            deletedContact
        });
    } catch (err) {
        res.status(400).send({error: err});
    }
};

var updateCoverageContact = async (req, res) => {
    let {id} = req.params;
    let data = _.pick(req.body, ['coverageStart', 'coverageEnd', 'active']);
    
    try{
        let updatedContact = await Coverage.findOneAndUpdate( 
            { _id: id},
            {$set: data});
        
        if (!updatedContact) {
            return res.status(404).send({error: 'No coverage with that ID exists.'})
        }
        res.status(200).send({
            message: 'The contact was deleted successfully',
            updatedContact
        });
    } catch (err) {
        res.status(400).send({error: err});
    }
};

module.exports = {
    getClientCoverage,
    addCoverageContact,
    deleteCoverageContact,
    updateCoverageContact
};