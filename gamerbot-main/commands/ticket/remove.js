module.exports = {
	name: 'remove',

	run: async (bot, message, args, prefix) => {
		if(message.channel.name.includes('ticket-')) {
			const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(' ') || x.user.username === args[0]);
			if(!member) {
				return message.channel.send(`Kit töröljek a beszélgetésből?`);
			}
			try{
				message.channel.updateOverwrite(member.user, {
					VIEW_CHANNEL: false,
					SEND_MESSAGES: false,
					ATTACH_FILES: false,
					READ_MESSAGE_HISTORY: false,
				}).then(() => {
					message.channel.send(`Sikeresen töröltem ${member}-t/ot  innen: ${message.channel}!`);
				});
			}
			catch(e) {
				return message.channel.send('Hiba lépett fel!');
			}
		}
	},
}; 