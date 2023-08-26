const Discord = require('discord.js');

module.exports = {
        name: 'ötlet', // parancs neve.
        description: 'Küldj hiba üzenetett.', // leírás.
        aliases: ["ö"], // Egyébb elöhivása a parancsnak.
        usage: 'ötlet \`<hiba üzenet>\`', // használat.
        accessableby: "mindenki", // ki használhssa?
    run: async (client, message, args) => {
      const hiba = args.join(" "); // amit írsz azt másolja.

    if (!hiba) return message.channel.send("Írd le mi az ötleted a bottal kapcsolatban!"); //válassz ha csak a paracsot irod.
    const reportembed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Sikeres művelet!✔")
    .setDescription("Sikeresen elküldtük az ötleted!")
    message.channel.send(reportembed)
    message.delete()

    const Embed = new Discord.MessageEmbed() // embedet küld 

      .setColor("BLUE") // szin 
      .setTitle(`Ötletet jelentette: ${message.author.username} `) //cím
      .setDescription(`**Ötlet:** ${hiba}`) // leírás
      .setFooter(`Küldő: ${message.author.username}`) //lábléc
      client.users.cache.get('521691955663470592').send(Embed);
    }
}