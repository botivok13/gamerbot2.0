module.exports = {
	name: 'add',

	run: async (bot, message, args, prefix) => {
		if(message.channel.name.includes('ticket-')) {
			const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(' ') || x.user.username === args[0]);
			if(!member) {
				return message.channel.send(`Kit adjak hozzá?`);
			}
			try{
				message.channel.updateOverwrite(member.user, {
					VIEW_CHANNEL: true,
					SEND_MESSAGES: true,
					ATTACH_FILES: true,
					READ_MESSAGE_HISTORY: true,
				}).then(() => {
					message.channel.send(`Sikeresen hozzáadtam ${member}-t/ot ide: ${message.channel} ! `);
				});
			}
			catch(e) {
				return message.channel.send("Hiba lépett fel!")
			}
		}
	},
}; 