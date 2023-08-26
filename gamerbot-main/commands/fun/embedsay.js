const Discord = require(`discord.js`);
const Fs = require('fs');

module.exports = {
    name: "embedsay",
    catgory: "fun",
    description: "Embedben kiírja amit te írsz",
    run: async (client, message, args) => {
        message.delete()
    
        if (!args[0]) return message.channel.send("Te semmit nem írtál!")
        let embed = new Discord.MessageEmbed();
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Neked ehhez nincs jogod")
        embed.setTitle(`Frissítések!`);
        embed.setColor("BLUE")
        embed.setDescription(args.join(" "));
        embed.setFooter(client.user.username, client.user.displayAvatarURL())
        embed.setTimestamp();
        message.channel.send(embed);
        
    }
}