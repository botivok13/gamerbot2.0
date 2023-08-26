const Discord = module.require("discord.js");

module.exports = {
   name: "lock",

   run: async(bot, message, args) => {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("Nincs jogod")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
    const használat_embed = new Discord.MessageEmbed()
    .setTitle("**Csatorna változott!**")
    .setDescription(`Sikeres zárolás`)
    .setColor("GREEN")
    .setTimestamp();
 
    await message.channel.send(használat_embed);
   message.delete();
}
}