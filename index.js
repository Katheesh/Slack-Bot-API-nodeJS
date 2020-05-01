const SlackBot = require('slackbots');
const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

const bot = new SlackBot({
    token: 'xoxb-1087119664342-1079344220295-JaWNYbSsNzJ0Z73PBC9wSSPX',//`${process.env.BOT_TOKEN}`,
    name: 'webmessage'
})

// Start Handler
bot.on('start', () => {
    const params = {
        icon_emoji: ':robot_face:'
    }

    bot.postMessageToChannel(
        'random',
        'Get inspired while working with @webmessage',
        params
    );
})

// Error Handler
bot.on('error', (err) => {
    console.log(err);
})

