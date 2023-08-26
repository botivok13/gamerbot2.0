const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../../botconfig.json").prefix;

module.exports = {
  name: "help",
  aliases : ['h'],
  
  run: async (client, message, args) => {


    const roleColor =
      message.guild.me.displayHexColor === "#37FF00"
        ? "#37FF00"
        : message.guild.me.displayHexColor;

    if (!args[0]) {
      let categories = [];

      readdirSync("./commands/").forEach((dir) => {
        const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
          file.endsWith(".js")
        );

        const cmds = commands.map((command) => {
          let file = require(`../../commands/${dir}/${command}`);

          if (!file.name) return "Nincs parancs név.";

          let name = file.name.replace(".js", "");

          return `\`${name}\``;
        });

        let data = new Object();

        data = {
          name: dir.toUpperCase(),
          value: cmds.length === 0 ? "Folyamatban..." : cmds.join(" "),
        };

        categories.push(data);
      });

      const embed = new MessageEmbed()
        .setTitle("📬 Kell segítség? Itt vannak a parancsaim:")
        .addFields(categories)
        .setDescription(
          `Ha bővebb információt akarsz megtudni egy parancsról akkor használd: ${prefix}help <parancs neve>`
        )
        .setFooter(
          ` A segítséget kérte: ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor(roleColor);
      return message.channel.send(embed);
    } else {
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (!command) {
        const embed = new MessageEmbed()
          .setTitle(`Helytelen használat! Használd: \`${prefix}help\` az összes parancsomhoz!`)
          .setColor("FF0000");
        return message.channel.send(embed);
      }

      const embed = new MessageEmbed()
        .setTitle("Parancs részletek:")
        .addField("Prefix:", `\`${prefix}\``)
        .addField(
          "Parancs:",
          command.name ? `\`${command.name}\`` : "Nincs neve ennek a parancsnak."
        )
        .addField(
          "\"Becenevek\":",
          command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "Nincs \"beceneve\" ennek a parancsnak."
        )
        .addField(
          "Hasznlálat:",
          command.usage
            ? `\`${prefix}${command.name} ${command.usage}\``
            : `\`${prefix}${command.name}\``
        )
        .addField(
          "Leírás:",
          command.description
            ? command.description
            : "Nincs leírása ennek a parancsnak."
        )
        .setFooter(
          `Kérte: ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor(roleColor);
      return message.channel.send(embed);
    }
  },
};