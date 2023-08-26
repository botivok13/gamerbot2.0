const Discord = require('discord.js');

module.exports = {
        name: 'report', // parancs neve.
        description: 'Küldj hiba üzenetett.', // leírás.
        aliases: ["hiba"], // Egyébb elöhivása a parancsnak.
        usage: 'report \`<hiba üzenet>\`', // használat.
        accessableby: "mindenki", // ki használhssa?
    run: async (bot, message, args) => {
      const hiba = args.join(" "); // amit írsz azt másolja.

    if (!hiba) return message.channel.send("Ird le milyen hibát találtál."); //válassz ha csak a paracsot irod.
    const reportembed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Sikeres művelet!✔")
    .setDescription("Sikeresen elküldtük a hibát!")
    message.channel.send(reportembed)
    message.delete()

    const Embed = new Discord.MessageEmbed() // embedet küld 

      .setColor("BLUE") // szin 
      .setTitle(`Hibát jelentette: ${message.author.username} `) //cím
      .setDescription(`**Probléma:** ${hiba}`) // leírás
      .setFooter(`Küldő: ${message.author.username}`) //lábléc
      bot.users.cache.get('521691955663470592').send(Embed);
    }
}