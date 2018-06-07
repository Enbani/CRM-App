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
            newContact
        });
        
        
    } catch (err) {
        res.status(400).send({error: err});
    }
};


module.exports = {
    getClientCoverage,
    addCoverageContact
};