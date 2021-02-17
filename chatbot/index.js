const axios = require('axios');
const tmi = require('tmi.js');
const fs = require('fs');

const config = JSON.parse(fs.readFileSync("config.json"));

const client = new tmi.Client({
  options: { debug: true },
  connection: { reconnect: true },
  identity: {
    username: process.env.TWITCH_USER,
    password: process.env.TWITCH_TOKEN
  },
  channels: config.channels
});

client.connect();

client.on('message', (channel, tags, message, self) => {
  // Ignore echoed messages.
  if(self) return;
const tokens = message.split(' ');
  const command = tokens[0].toLowerCase();

  if(command === '!clj') {
    console.log(`Replying to message: ${message}, user: ${tags.username}, channel: ${channel}`)

    const code = tokens.slice(1).join(' ');

    axios.post('http://code-evaluator/api/eval', {
      code: code
    })
      .then((res) => `=> ${res.data.result}`)
      .then((mes) => mes.length < 500 ? mes : "Error: It doesn't fit. It's too big")
      .then((mes) => client.say(channel, mes))
      .catch((err) => console.error(err));
  } else if (command === '!color') {
    const color = tokens[1];
    client.color(color);
  } else if (command === '!narwhal') {
    client.say(channel, "Narwhals narwhals swimming in the ocean");
  } else if (command === '!duck') {
    client.say(channel, "...and he waddled awaaay, waddle waddle");
  }
});

