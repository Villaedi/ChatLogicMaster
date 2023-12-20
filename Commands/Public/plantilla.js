const {SlashCommandBuilder, EmbedBuilder, Client, ChatInputCommandInteraction} = require('discord.js');
const ms = require('ms');
module.exports = {
    cooldown: ms('1m'),
    data: new SlashCommandBuilder()
    .setName('plantilla')
    .setDescription('This command is for testing.'),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {client} client 
     */
    async execute(interaction, client){
        return interaction.reply({content:`Hi ${interaction.user}`,ephemeral:true })
    }
};