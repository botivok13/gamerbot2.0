const Discord = module.require("discord.js");

module.exports = {
   name: "unlock",

   
   run: async(bot, message, args) => {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("Nincs jogod")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        null : ['SEND_MESSAGES'],
     },
    ],);
    const használat2_embed = new Discord.MessageEmbed()
    .setTitle("**Csatorna változott!**")
    .setDescription(`Sikeres feloldás`)
    .setColor("GREEN")
    .setTimestamp();
    await message.channel.send(használat2_embed);
    message.delete();
}
}