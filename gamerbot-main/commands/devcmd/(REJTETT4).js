const Discord = require(`discord.js`);
const Fs = require('fs');

module.exports = {
    name: "embedsay",
    catgory: "fun",
    description: "Embedben kiírja amit te írsz",
    run: async (client, message, args) => {

        if(message.author.id !== "521691955663470592") return message.channel.send("Ezt a parancsot csak a bot tulajdonos tudja használni.");
        message.delete()
    
        if (!args[0]) return message.channel.send("Te semmit nem írtál!")
        let embed = new Discord.MessageEmbed();
        let iras = (args.join(" "));
        embed.setTitle(`Frissítések!`);
        embed.setColor("BLUE")
        embed.setDescription(iras)
        embed.setFooter(client.user.username, client.user.displayAvatarURL())
        embed.setTimestamp();
        message.channel.send(embed);
        
    }
}