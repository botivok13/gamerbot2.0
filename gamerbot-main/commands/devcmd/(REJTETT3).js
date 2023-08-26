const djs = require('discord.js')

module.exports = {
 name: 'reload',
 description: 'Reloades a command',
 category: 'owner',

 run: async(client, message, args) => {
 
 if(message.author.id !== "521691955663470592") return message.channel.send("Ezt a parancsot csak a bot tulajdonos tudja használni.");
 
 if(!args[0]) return message.channel.send('Kérlek adj meg egy kategória nevet.');
 if(!args[1]) return message.channel.send('Kérlek adj meg egy parancsot amit újra töltsek.');

 let category = args[0];
 let commandName = args[1];

 try { 
 delete require.cache[require.resolve(`../../commands/${category}/${commandName}.js`)];
client.commands.delete(commandName);
 const pull = require(`../../commands/${category}/${commandName}.js`);
 client.commands.set(commandName, pull);
 
 const embed = new djs.MessageEmbed()
 .setTitle('Újratöltés parancs.')
 .setColor('BLACK')
 .setDescription(`Sikeresen újratöltöttem a : \`${args[1].toUpperCase()}\` parancsot.`)
 
 return message.channel.send(embed);
 } catch(e) {
 return message.channel.send(`${e}\nBetötlés közbeni parancs error : \`${args[1].toUpperCase()}\` parancs.`);
 }
     }
          };