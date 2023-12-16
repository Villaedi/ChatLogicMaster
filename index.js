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

//aqui
import OpenAI from "openai";

const openai = new OpenAI({
  apikey: [config.OPENAI_API_KEY],
});

async function main() {
    try {
      const completion = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: "dame un numero aleatorio. ",
        max_tokens: 7,
        temperature: 0,
      });
  
      console.log(completion);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  main();