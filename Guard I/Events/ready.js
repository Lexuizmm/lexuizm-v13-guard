

const { Collection } = require("discord.js");
const { MessageEmbed } = require("discord.js")
const Settings = require("../../settings")
const { joinVoiceChannel } = require("@discordjs/voice");
const client = global.bot;
module.exports = async client => {

  setInterval(async () => {
const VoiceChannel = /*client.channels.cache.get(Settings.Ses) ||*/ client.channels.cache.find(x => x.name === Settings.SesKanalıAdı)
joinVoiceChannel({
   channelId: VoiceChannel.id,
   guildId: VoiceChannel.guild.id,
   adapterCreator: VoiceChannel.guild.voiceAdapterCreator,
   selfDeaf: true,// 
   selfMute: true // 
        });
       }, 5 * 1000)

  setInterval(() => {
    const oynuyor = Settings.Durum;
    const index = Math.floor(Math.random() * (oynuyor.length));
    client.user.setActivity(`${oynuyor[index]}`, {
      url: "https://www.twitch.tv/shewn",
      type: "STREAMING"});

    }, 5 * 1000);

    
  }





    