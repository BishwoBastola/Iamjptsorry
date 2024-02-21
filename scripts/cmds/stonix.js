module.exports = {
    config: {
        name: "krish",
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
    if (event.body && event.body.toLowerCase() == "krish") return message.reply("*kati bolako ho *\n muji na bola na..");
}
};