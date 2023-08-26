const { Message } = require('discord.js')

module.exports=  {
    name : 'unmute',
    description: "Leszedi a némítást a megjelölt emberről!",
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Nincs jogod ezt a parancsot használni!')
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!Member) return message.channel.send('Akit megjelöltél nem taláható!')

        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

        await Member.roles.remove(role)
        const report2311embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Művelet:")
        .setDescription(`Sikeres! ${Member.displayName} némítása fel lett oldva!`)
        message.channel.send(report2311embed)
    }
}