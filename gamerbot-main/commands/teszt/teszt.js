const Discord = require("discord.js");
module.exports = {
    name: "teszt",
    category: "teszt kategória",
    description: "teszt command",
    run: async (bot, message, args) => {
        let jeloles = message.mentions.members.first()
        if (!args[0]) return message.channel.send("**jelölj meg valakit!**")
        const embed = new Discord.MessageEmbed()
        .setAuthor("Teszt")
        .setColor("RANDOM")
        .setTitle(`Üdvözöllek`)
        .setDescription("Kérlek mutatkozz be, és vedd fel a rangjaidat a megfelelő szobákban! Kellemes időtöltést a szerveren!")
        .setFooter(`bot made with <3 by mlndev`, `https://cdn.discordapp.com/avatars/399590980942168065/e73fd13a5b1ce3eee5b655275ca84514.webp`)
        .setTimestamp()
        message.channel.send(embed)
        message.delete()
    }

}