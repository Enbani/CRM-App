const _ = require('loadsh');
const { Flow } = require('../models/flow');
const mongoose = require('mongoose');

const addFlow = async (req, res) => {
    let data = _.pick(req.body, ['flowType', 'supported', 'systems']);
    
    let flow = new Flow(data);
    
    try {
        let newFlow = await flow.save();
        
        res.status(200).send({
            message: 'Flow type has been added',
            newFlow
        });
    } catch (err) {
        res.status(400).send({error: err});
    }
};

const updateFlow = async (req, res) => {
    let { flowType } = req.params;
    
    let data = _.pick(req.body, ['flowType', 'supported', 'systems']);
    
    try {
        let flow = await Flow.findOneAndUpdate(
            {flowType},
            {$set: data},
            {new: true}
        );
        
        if (!flow) {
            return res.status(404).send(
                {error: `Info for ${flowType} not available`}
                );
        }
        
        res.status(200).send({
            message: `${flowType} updated successfully`
        });
        
    } catch (err) {
        res.status(400).send({error: err});
    }
};

const deleteFlow = async (req, res) => {
    let { flowType } = req.params;
    
    try {
        let deletedFlow = await Flow.findOneAndRemove({flowType});
        
        if (!deletedFlow) {
            return res.status(404).send({error: `${flowType} is not a valid flow`});
        }
        
        res.status(200).send({
            message: `${flowType} deleted successfully`,
            deletedFlow
        });
    } catch (err) {
        res.status(400).send({error: err});
    }
};

const getFlows = async (req, res) => {
    try {
        let flows = await Flow.find({});
        
        if (!flows) {
            return res.status(404).send({error: 'No available flows.'})
        }
        
        res.status(200).send({flows})
    } catch (err) {
        return res.status(400).send({error: err});
    }
};

module.exports = {
    addFlow,
    updateFlow,
    deleteFlow,
    getFlows
};