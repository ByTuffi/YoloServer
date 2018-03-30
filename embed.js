const { RichEmbed } = require('discord.js')


const COLORS = {
    red: 0xe74c3c,
    green: 0x2ecc71,
    yellow: 0xf1c40f,
    blue: 0x2980b9
}
    exports.test = 'test'
    

module.exports = {

    regeln(chan, cont, title) {
        var message
        var emb = new RichEmbed()
        .setColor(COLORS.red)
        .setDescription(cont)

        if (title) {
            emb.setTitle(title)
        }
        chan.send(' ', emb).then((m) => {
            message = m
        })
        return message
    },

    team(chan, cont, title) {
        var message
        var emb = new RichEmbed()
        .setColor(COLORS.green)
        .setDescription(cont)

        if (title) {
            emb.setTitle(title)
        }
        chan.send(' ', emb).then((m) => {
            message = m
        })
        return message
    },
    website(chan, cont, title) {
        var message
        var emb = new RichEmbed()
        .setColor(COLORS.yellow)
        .setDescription(cont)

        if (title) {
            emb.setTitle(title)
        }
        chan.send(' ', emb).then((m) => {
            message = m
        })
        return message

    
    },
    partner(chan, cont, title) {
        var message
        var emb = new RichEmbed()
        .setColor(COLORS.blue)
        .setDescription(cont)

        if (title) {
            emb.setTitle(title)
        }
        chan.send(' ', emb).then((m) => {
            message = m
        })
        return message

    
    }



}