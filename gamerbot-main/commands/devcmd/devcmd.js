const { MessageEmbed } = require('discord.js');
const os = require('os');
const internal = require('stream');
const { alap } = require("../../botconfig");







module.exports = {
    name: `devcmd`,
    aliases: [`dc`],
    category: 'bot',
    run: async (client, message, args) => {

        if(message.author.id !== "521691955663470592") return message.channel.send("Ezt a parancsot csak a bot tulajdonos tudja használni.");
            let help1_Embed = new MessageEmbed()
            .setTitle("DEVELOPER COMMAND PANEL")
            .setColor("fc2146")
            .addFields(
                {
                    name: "SIMA DEVCMD",
                    value: "`shutdown\nhanyszerveren\nreload`",

                },
            )
            .setImage(`https://cdn.discordapp.com/attachments/892504110409064451/917785580799139910/devcmd.png`)


            message.channel.send(help1_Embed)
        }
    }