const Discord = require('discord.js');

module.exports = {
  name: 'kick',
  description: 'kick',
  aliases: ['kick'],
  run: async (bot, message, args) => {


    if (message.content.startsWith('!!kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.members.resolve(user);
      if (member) {
        member
          .kick({
            reason: 'They were bad!',
          })
          .then(() => {
            const asdembed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle(`**Sikeresen kilett dobva: ${user.tag}.**`,)
            .setFooter(`Köszi hogy engem használsz.`)

            message.channel.send(asdembed);
          })
          .catch(err => {
            const csacsaembed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle(`**Nem lehet kidobni őt!**`,)
            .setFooter(`Köszi hogy engem használsz.`)

            message.channel.send(csacsaembed);
            console.error(err);
          });
      } else {
        const csecsembed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(`**Nincs ilyen felhasználó ezzel a névvel!**`,)
        .setFooter(`Köszi hogy engem használsz.`)

        message.channel.send(csecsembed);
      }
    } else {
        const csocsembed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(`**Kérlek említs meg valakit.**`,)
        .setFooter(`Köszi hogy engem használsz.`)
    
      message.channel.send(csocsembed);
    }
  }
  }
}