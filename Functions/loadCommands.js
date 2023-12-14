async function loadCommands(client) {
    const ascii = require('ascii-table');
    const fs = require('fs')
    const table = new ascii().setHeading('Commands', 'Status');
    await client.commands.clear();

    //crear un Array
    let commandsArray = [];

    //Varibles que tendra todos los nombres de la carpeta de los comandos
    const commandFolder = fs.readdirSync('./Commands');
    for (const folder of commandFolder) {
        const commandsFiles = fs.readdirSync(`./Commands/${folder}`).filter((file) => file.endsWith("js"));
        for (const file of commandsFiles) {
            const commandFile = require(`../Commands/${folder}/${file}`);

            const properties = {folder, ...commandFile};
            client.commands.set(commandFile.data.name, properties);

            //agregamos datos para la Array = >  commandsArray
            commandsArray.push(commandFile.data.toJSON());
            table.addRow(file, 'loaded');
            continue;

        }
    }
    client.application.commands.set(commandsArray);
    return console.log(table.toString(), "\nLoaded Commands");
}

module.exports = {loadCommands}