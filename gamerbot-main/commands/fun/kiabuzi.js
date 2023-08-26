const Discord = require('discord.js');

module.exports = {
        name: 'kiabuzi', 
        description: 'Küldj hiba üzenetett.',
        aliases: ["hiba"], 
        usage: 'report \`<hiba üzenet>\`', 
        accessableby: "mindenki", 
    run: async (bot, message, args) => {
    const reportmbed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Ki a buzi?")
    .setDescription("Ádám!")
    message.channel.send(reportmbed)


    }
}