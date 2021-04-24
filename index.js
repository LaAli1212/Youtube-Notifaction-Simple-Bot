const channelid = "";//ايدي القناه حق اليوتوب

const newvideo = "";//يدي الروم الذي بيرتلس فيه الفيديو

const Discord = require("discord.js")
const client = new Discord.Client()
const Youtube = require('youtube-notification');
const notifier = new Youtube({
    hubCallback: 'https://necessary-probable-slouch.glitch.me/yt',
    secret: 'Thanks_To_Use_MY_ProJect_BY_LA|Ali#1229'
});
notifier.setup();

notifier.on('notified', data => {
    console.log('New Video in ${data.channel.name}');
    client.channels.cache.get(newvideo).send(`New Video Uploaded In ${data.channel.name}, Video: ${data.channel.title},Link: ${data.channel.link}`);

});
notifier.subscribe(channelid);


client.login(process.env.token);
