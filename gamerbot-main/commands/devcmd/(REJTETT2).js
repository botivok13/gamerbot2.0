const Discord = module.require ("discord.js");
const bot = new Discord.Client();


module.exports = {
    name: "hanyszerveren",
    description: "elmondja hany szeron van bent a bot",
    run: async (bot, message, args) => {
        if(message.author.id !== "521691955663470592") return message.channel.send("Ezt a parancsot csak a bot tulajdonos tudja használni.");
        message.channel.send('Betöltés....').then(m => {
          });
          const report2embed = new Discord.MessageEmbed()
          .setColor("GREEN")
          .setTitle("Ennyi szerveren van bent a bot")
          .setDescription(`${bot.users.cache.size}`)
         await message.channel.send(report2embed)
    }
}