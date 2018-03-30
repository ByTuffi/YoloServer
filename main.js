


const Discord = require('discord.js')
const fs = require('fs')
const Embeds = require('./embed')

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))


var client = new Discord.Client()


client.on('ready', () => {
    console.log(`logged in as ${client.user.username}...`)

})


var cmdmap = {
    say: cmd_say,
    regeln: cmd_regeln,
    team: cmd_team,
    website: cmd_website,
    partner: cmd_partner
}
 
     //Command ausführen   
    function cmd_say(msg, args) {
        
        msg.channel.send(args.join(' '))

    }
    function cmd_regeln(msg, args) {
        Embeds.regeln(msg.channel, 'die Regeln sind im #regeln Text-Channel', 'Regeln')
        console.log(Embeds.regeln)
    }
    function cmd_team(msg, args) {
        Embeds.team(msg.channel, 'Leiter: ByHenn, XaroLP, AgentArdaXTT\nCO-Leiter: ByTuffi\nManager: LM7\nDeveloper: Joshua, FabiSimon\nSupporter: Elite Nova', 'Team')
        console.log(Embeds.team)
    }
    function cmd_website(msg, args) {
        Embeds.website(msg.channel, 'Es existiert im Moment keine Website', 'Website')
        console.log(Embeds.website)
    }
    function cmd_partner(msg, args) {
        Embeds.partner(msg.channel, 'SWAG-Netzwerk:\nhttps://discord.gg/CD2n8b5', 'Partner')
        console.log(Embeds.partner)
    }


client.on('message', (msg) => {

    var cont = msg.content,
        author = msg.member,
        channel = msg.channel,
        guild = msg.guild

        if (author.id != client.user.id && cont.startsWith(config.prefix)) {

            // !say hello world!
            var invoke = cont.split(' ')[0].substr(config.prefix.length),
                args = cont.split(' ').slice(1)

            if (invoke in cmdmap) {
                cmdmap[invoke](msg, args)
            }
            
        }


})


client.login(config.token)