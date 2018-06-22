const _ = require('lodash');

const { Bio } = require('../models/bio');
const { Client } = require('../models/client');
const { Coverage } = require('../models/coverage');

const mongoose = require('mongoose');

const renderIndexPage = (req, res) => {
    res.sendFile(__dirname + '../public/index.html');
};

const renderMpidPage = async (req, res) => {
    let { mpid } = req.params;
    
    try {
        let bio = await Bio.find({mpid});
        let coverage = await Coverage.find({mpid});
        let client = await Client.find({mpid});
        
        console.log({bio, coverage, client});
        //return res.status(200).send({bio, coverage, client});
        return res.render('show', {bio, client, coverage})
        
    } catch (err) {
        res.status(400).send({error: err});
    }
    
}


module.exports = {
    renderIndexPage,
    renderMpidPage
};