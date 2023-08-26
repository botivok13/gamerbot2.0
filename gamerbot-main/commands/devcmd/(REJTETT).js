const Discord = module.require ("discord.js");
const bot = new Discord.Client();


module.exports = {
    name: "shutdown",
    description: "leallitja a botot",
    run: async (bot, message, args) => {
        if(message.author.id !== "521691955663470592") return message.channel.send("Ezt a parancsot csak a bot tulajdonos tudja használni.");
        message.channel.send('Leállítás....').then(m => {
            bot.destroy();
          });
          const report23embed = new Discord.MessageEmbed()
          .setColor("GREEN")
          .setTitle("Művelet:")
          .setDescription(`Sikeres! A bot offline.`)
         await message.channel.send(report23embed)
    }
}