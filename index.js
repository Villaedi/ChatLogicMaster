const { Client, GatewayIntentBits, Partials, Collection, Message } = require('discord.js');
const config = require('./config.json');
const { CLOSING } = require('ws');

const client = new Client({
    intents:[Object.keys(GatewayIntentBits)],
    Partials:[Object.keys(Partials)],

});

client.setMaxListeners(0);


client.on('messageCreate', async(message) =>{
    if(message.content === '!ip'){
        return message.reply({content: 'Hola, Como estas?'})
    }
    
    console.log(message);
});


client.login(config.token).then(() => {
    console.log(`${client.user.username} Esta Online.`); 
}).catch((err) =>{
    console.log(err)
})
