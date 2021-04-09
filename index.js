const Discord = require('discord.js');

const bot = new Discord.Client();

const token =  'ODI5Nzk5Mjk0MDIxNTMzNzM3.YG9Y0A.5mECwBXVmavvO5RScWjfG6snsq8'

bot.login(token)

bot.on('ready', () =>{
    console.log('MAICK VIADO')
})

let gala = 0;
bot.on('message', msg => {
    
    if(msg.content === "GALA" || msg.content === 'gala') {
         gala = gala + 1;
        msg.reply(gala)
    }

})

let f = 0;
bot.on('message', msg => {
    
    if(msg.content === "F" || msg.content === 'f') {
        f = f + 1;
        msg.reply(f)
    }

})
/*

parte para contador de bolsonaro
*/

let b = 0;
bot.on('message', msg => {
    
    if(msg.content === "MAICK" || msg.content === 'maick') {
        b = b + 1;
        msg.reply(b , "----bolsonaro")
    }

})

bot.on('message', msg => {
    
    if(msg.content === "DIO" || msg.content === 'Dio'|| msg.content === 'dio') {
        msg.reply("JOTARO")
    }

})


