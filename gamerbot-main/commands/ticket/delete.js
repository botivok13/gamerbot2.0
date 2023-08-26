module.exports = {
	name: 'delete',

	run: async (bot, message, args) => {
		if(message.channel.name.includes('ticket-')) {
			message.channel.delete();
		}
		else {
			return message.reply('Helytelen használat!');
		}
	},
}; 