module.exports = {
	name: 'ticket',

	run: async (bot, message, args, prefix) => {
		if(message.guild.channels.cache.find(channel => channel.name === `ticket-${message.author.id}`)) {
			return message.reply('Már van jelenleg egy nyitott hibajegyed! ');
		}

		message.guild.channels.create(`ticket-${message.author.id}`, {
			permissionOverwrites: [
				{
					id: message.author.id,
					allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
				},
				{
					id: message.guild.roles.everyone,
					deny: ['VIEW_CHANNEL'],
				},
			],
			type: 'text',
			// parent: 'category id',
		}).then(async channel => {
			message.reply(`Sikeresen csináltál egy hibajegyet! Katt > ${channel}`);
			channel.send(`Üdv ${message.author}, A Hibajegyedet hamarosan kezelni fogja egy Adminisztrátor! Ahhoz, hogy bezárd: !!delete `);
			let logchannel = message.guild.channels.cache.find(channel => channel.name === `ticket-logs`)
			if(logchannel) {
				logchannel.send(`Új ticket általa: ${message.author.id} Itt: <#${channel.id}>`);
			}
		});
	},
};