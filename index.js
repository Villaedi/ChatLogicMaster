const { Client, GatewayIntentBits, Partials, Collection, Message } = require('discord.js');

const config = require('./config.json');
const {loadEvents} = require('./Functions/loadEvents');
const {loadCommands} = require('./Functions/loadCommands');
const { CLOSING } = require('ws');

const client = new Client({
    intents:[Object.keys(GatewayIntentBits)],
    Partials:[Object.keys(Partials)],

});

client.commands = new Collection();
client.Events = new Collection();
client.setMaxListeners(0);


client.login(config.token).then(async() => {
    await loadEvents(client);
    await loadCommands(client);
}).catch((err) =>{
    console.log(err)
})