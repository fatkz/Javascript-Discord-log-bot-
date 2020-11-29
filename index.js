const Discord=require("discord.js");
const client=new Discord.Client();
// const proton = require("proton-io");
client.login("");






// var commondfile = "./commond";
// var event = "./eventlar";
// var geliştiriciler = ["456789480553185281"];
// var owner = true;
// var varsayılanKomutlar = ["ping"];

// var komutYükle = new proton(client,commondfile,event,geliştiriciler,{owner,varsayılanKomutlar});
// // var prefix = "!";

// client.on("message",async(msg)=>{
//     komutYükle.message(msg.prefix,{botlaraCevapVer,etiketiPrefixOlarakKullan,etiketiPrefixOgren})
// });



client.once('ready', () => {
	console.log(' sunucusundan Ready!');
});

client.on('messageDelete', message => {
	console.log(`sunucusundan A message by ${message.author.tag}: (${message}) message deleted`);
});
    
client.on('guildBanAdd', async (guild, user) => {
    console.log(` sunucusundan ${user.tag} adlı kişi banladı sunu ${guild.name}.`);
});




// client.on("message",message=>{
//     if(message.author.bot) return;
//     if(message.content.startsWith(prefix+"setnick")){
        
//         let nick = message.content.slice();
//     }
// })

// client.on('message', message => {
//     if (message.content.includes('changeNick')) {
//         client.setNickname({nick: message.content.replace('changeNick ', '')});
//         console.log(`${messageç.author.tag} kişi ${message.content.replace('changeNick')} adını aldı `)
//     }




client.on("message",message=>{
    var date = new Date();
    date.setMonth(date.getMonth())
    // console.log("gelen mesaj"+" "+message.content)
    console.log(`Letmein sunucusundan  kanalından (${date})+"gelen mesaj"`+message.content);
    

    if(message.content === "selam"){
        message.channel.send(":outbox_tray:  ve Aleyküm Selam");
        // if(client.channel.get === "782364406046261258"){
        //     // var fso = new ActiveXObject("Scripting.FileSystemObject");
        //     // var file = fso.OpenTextFile("C:\Users\Devran\Desktop\discord-bot-js\genel-log.txt");
        //     // var write_log = `(${date})+"gelen mesaj(welcome kanalından)"`;
        //     // file.WriteLine(write_log);
        //     // file.Close();
        //     console.log(`(${date})+"gelen mesaj(welcome kanalından)"`)
        // }if(client.channel.get ==="782355702676717570"){
        //     // var fso = new ActiveXObject("Scripting.FileSystemObject");
        //     // var file = fso.OpenTextFile("C:\Users\Devran\Desktop\discord-bot-js\welcome-log.txt");
        //     // var write_log = `(${date})+"gelen mesaj(genel kanalından)"`;
        //     // file.WriteLine(write_log);
        //     // file.Close();
        //     console.log(`(${date})+"gelen mesaj(genel kanalından)"`)
        // }
    // }if(message.content.startsWith === "search"){
    //     var search_github = new Discord.MessageAttachment("https://github.com/"+message.content.split("-"));
    //     message.reply(search_github+" "+`:outbox_tray: | **${member.user.username}** `);
    
    // }if(message.content.startsWith("github")){
    //     const picture = new Discord.MessageAttachment("https://github.com/"+message.content.split("-")[1]+".png?size=80");

    // }if(message.content ==="benim pp ne"){
    //     console.log(`(${date})+"gelen mesaj"`);
    //     message.reply(message.author.displayAvatarURL())

    // }if(message.content === "kes"){
    //     console.log(`(${date})+"gelen mesaj"`);
    //     message.channel.send("asıl sen kes");

    }if(message.content === "!owner"){
        console.log(`Letmein sunucusundan (${date})+"gelen mesaj"`);
        message.channel.send("fatkz#9964");
        message.channel.send("web site: http://fatkz.cf/");
    }
})




// client.on = (member,client) => {
//     var welcome = client.channel.get("782355702676717570");
//     if(member.user.bot==true){
//         welcome.send(`:wink: | <@${member.id}>Rakip geldi hanımm.`)
//     }else{
//         welcome.send(`:inbox_tray: | <@${member.id}>Giriş yaptı`);
//     }

    
// }
    


// client.on = (member,client) => {
//     var welcome = client.channel.get("782355702676717570");
//     if(member.user.bot==true){
//         welcome.send(`:wink: | <@${member.id}>Rakibin eline verdim.`)
//     }else{
//         welcome.send(`:outbox_tray: | **${member.user.username}**Gözüm görmesin. `);
//     }
    
    
//     }
    

//guşildMemberAdd = gelen

// client.on = (member,client) => {
// var welcome = client.channel.get("782355702676717570");
//     welcome.send(`:inbox_tray: | <@${member.id}>Giriş yaptı`);

// }





















