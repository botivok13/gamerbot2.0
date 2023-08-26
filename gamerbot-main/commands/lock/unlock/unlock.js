const discord = require(`discord.js`)

module.exports.run = async (bot, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return 
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return discord.Message.channel.send("Nincs jogod ehhez a parancshoz!")

    let msg = await message.channel.send("Betöltés...")

    try {
        message.channel.updateOverwrite(message.guild.roles.cache.fine(e => e.name.toLowerCase().trim() == "@everyone"), {
                SEND_MESSAGES: true,
                ADD_REACTIONS: true
        })
        msg.edit("Sikeresen fellett oldva a szoba!")
    }catch(e) {
        console.log(e)
    }
    }

    module.exports.help = {
        name: `unlock`,
        aliases: []
    }