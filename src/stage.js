const Discord = require("discord.js")
const client = new Discord.Client()

class Stage() {
  constructor(token) {
    this.token = token;
  }
  async stop() {
    client.destroy();
  }
}

module.exports = Stage;
