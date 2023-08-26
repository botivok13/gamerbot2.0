const { MessageEmbed } = require('discord.js');
const db = require('quick.db')

module.exports = {
        name: "ban",
        aliases: ["!!"],
        category: "commands",
        description: "Jelölj meg valakit hogy bannolhatsd!",
    run: async (bot, message, args) => {
            if (!message.member.hasPermission("BAN_MEMBERS") && !ownerID .includes(message.author.id)) return message.channel.send("**You Dont Have The Permissions To Ban Users! - [BAN_MEMBERS]**");
            if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("**Ehhez nincs jogod! - [Kitiltás jog szükséges]**");
            if (!args[0]) return message.channel.send("**Tagelj meg valakit hogy bannolhass!**")

            let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            if (!banMember) return message.channel.send("**Nincs a szerveren az illető**");
            if (banMember === message.member) return message.channel.send("**Hülye...**")

            var reason = args.slice(1).join(" ");

            if (!banMember.bannable) return message.channel.send("**Can`t Ban That User**")
            try {
            message.guild.members.ban(banMember)
            banMember.send(`**Üdv, kilettél bannolva erről a szerverről: ${message.guild.name} Indok: - ${reason || "Indokolatlan"}**`).catch(() => null)
            } catch {
                message.guild.members.ban(banMember)
            }
            if (reason) {
            var sembed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`**${banMember.user.username}** bannolva lett! Indok: ${reason}`)
            message.channel.send(sembed)
            } else {
                var sembed2 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`**${banMember.user.username}** bannolva lett!`)
            message.channel.send(sembed2)
            }

    }
};