const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzM2NTQxODIzNDU1MDY4MjMx.XxwUBg.NU2WK5BhipLEq8ZaaHpDe4gyHX8';
const PREFIX = "!"

bot.on('ready', MessageChannel=>{
    console.log('Bot włączony')
})

bot.on('message', message =>{

    let args = message.content.substring(PREFIX.lenght).split(" ");

    switch(args[0]){
        case 'kod':
                message.channel.send("Youtube-Jacux");
        break;
    }

})

bot.login(token);