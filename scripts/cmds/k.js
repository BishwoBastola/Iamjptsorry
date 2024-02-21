module.exports = {
    config: {
        name: "k xa",
       aliases: [],
        version: "1.0",
        author: "Yuki",
        countDown: 0,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "k xa") return message.reply(" tmro kami xa 🥸");
}
};