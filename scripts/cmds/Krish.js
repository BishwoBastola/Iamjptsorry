 const fs = require('fs');

module.exports = {
  config: {
    name: "Stonix",
    version: "1.0",
    author: "Asmit Adk ",
    countDown: 5,
    role: 0,
    shortDescription: "",
    longDescription: "auto bot reply to your message",
    category: "no prefix",
  },
 
  onStart: async function() {},
 
  onChat: async function({ event, message, getLang, api }) {
    if (event.body) {
      const word = event.body.toLowerCase();
      switch (word) {
        case "krish":
          const replies = [
            "kati bolako mero sir lai 😤" ];
          const randomIndex = Math.floor(Math.random() * replies.length);
          message.reply({
            body: replies[randomIndex],
          });
          break;
        default:
          return; 
      }
    }
  },
};