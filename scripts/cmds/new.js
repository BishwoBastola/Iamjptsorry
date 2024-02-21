module.exports = {
    config: {
        name: "lado",
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
    if (event.body && event.body.toLowerCase() == "lado") return message.reply(" tero ne xa ra bhai");
}
};