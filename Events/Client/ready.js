const {client} = require('discord.js');
const mongoose = require('mongoose');
const config = require('../../config.json');
require('colors')
module.exports = {
    name:"ready",
    once:true,
    /**
     * 
     * @param {Client} client 
     */
    async execute(client){
        mongoose.set('strictQuery', true);
        await mongoose.connect(config.databaseURL,{
            keepAlive:true,
        }).then(() => {
            console.log('[MONGODB]conect DATABASE :D'.green);
        }).catch((err) =>{
            console.log(`Could not connect to the database: ${err}`.red)
        })
        console.log(`El ${client.user.username} is online!`)
    }
};