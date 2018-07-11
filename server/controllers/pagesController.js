const _ = require('lodash');

const { Bio } = require('../models/bio');
const { Client } = require('../models/client');
const { Coverage } = require('../models/coverage');
const { Source } = require('../models/source');

const mongoose = require('mongoose');

const renderIndexPage = async (req, res) => {
    // res.sendFile(__dirname + '../public/index.html');
    
    try {
        let source = await Source.find({}, {clientMnemonic: 1, clientClass: 1, dm: 1});
        
        return res.render('index', {source});
    } catch (err) {
        res.status(400).send({error: err});
    }
};

const renderMpidPage = async (req, res) => {
    let { mpid } = req.params;
    
    try {
        let bio = await Bio.find({mpid});
        let coverage = await Coverage.find({mpid});
        let client = await Client.find({mpid});
        let source = await Source.find({clientMnemonic: mpid});
        
        
        console.log({bio, coverage, client, source});
        // return res.status(200).send({bio, coverage, client, source});
        return res.render('show', {bio, client, coverage, source})
        
    } catch (err) {
        res.status(400).send({error: 'the request was bad...'});
    }
    
}


module.exports = {
    renderIndexPage,
    renderMpidPage
};