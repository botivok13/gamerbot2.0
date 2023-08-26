  const Discord = require('discord.js');
const math = require('mathjs');

module.exports = {
        name: "calc",
        category: "fun",
    
    run: async (bot, message, args) => {

        if (!args[0]) return message.channel.send("**írd le mit számoljak ki**");

        let result;
        try {
            result = math.evaluate(args.join(" ").replace(/[x]/gi, "*").replace(/[,]/g, ".").replace(/[÷]/gi, "/"));
        } catch (e) {
            return message.channel.send("Csak egyenleteket tudok kiszámítani!");
        }

        let FEKETEembed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setAuthor(`${bot.user.username} Számológép`, message.author.displayAvatarURL({ dynamic: true }))
            .addField("**Egyenlet**", `\`\`\`Js\n${args.join("").replace(/[x]/gi, "*").replace(/[,]/g, ".").replace(/[÷]/gi, "/")}\`\`\``)
            .addField("**Eredmény**", `\`\`\`Js\n${result}\`\`\``)
            .setFooter(message.guild.name, message.guild.iconURL());
        message.channel.send(FEKETEembed);
    }
}