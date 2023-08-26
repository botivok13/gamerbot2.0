const Discord = require("discord.js")

const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")




module.exports = {
    name: "botinfo",
  description: "Sends detailed info about the client",
  run: async (bot, message, args) => {
  //command
  let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
      if (err) {
          return console.log(err);
      }
      const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
      const botinfo = new Discord.MessageEmbed()
          .setTitle("__**Státusz:**__")
          .setColor("ff0000          ")
          .addField(":hourglass_flowing_sand: Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
          .addField("⌚️ Üzemidő", `${duration}`, true)
          .addField(":file_folder: Emberek", `${bot.users.cache.size}`, true)
          .addField(":file_folder: Szerverek", `${bot.guilds.cache.size}`, true)
          .addField(":file_folder: Csatornák ", `${bot.channels.cache.size}`, true)
          .addField(":space_invader: Discord.js", `v${version}`, true)
          .addField(":robot: Node", `${process.version}`, true)
          .addField(":robot: CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
          .addField(":robot: CPU használata", `\`${percent.toFixed(2)}%\``, true)
          .addField(":robot: Arch", `\`${os.arch()}\``, true)
          .addField(":computer: Platform", `\`\`${os.platform()}\`\``, true)
          .addField("API Késleltetés", `${(bot.ws.ping)}ms`)  
      message.channel.send(botinfo)
  });
  }
  };