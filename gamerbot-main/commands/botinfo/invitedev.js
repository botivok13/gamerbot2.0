const Discord = require('discord.js');

module.exports = {
        name: 'invitedev', 
        description: 'Küldj hiba üzenetett.',
        aliases: ["hiba"], 
        usage: 'report \`<hiba üzenet>\`', 
        accessableby: "mindenki", 
    run: async (bot, message, args) => {
    const reportmbed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Invite")
    .setDescription("https://discord.gg/zfmf9f9Qwq")
    message.channel.send(reportmbed)
        message.delete()

    }
}