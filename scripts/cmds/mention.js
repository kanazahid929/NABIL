module.exports = {
  config: {
    name: "mentionreply",
    version: "1.4.0",
    permission: 0,
    credits: "Mim x Saif",
    description: "Auto reply when specific users are mentioned",
    prefix: false,
    category: "auto",
    usages: "",
    cooldowns: 3
  },

  onStart: async function () {
    // Required for proper installation
  },

  onChat: async function({ api, event }) {
    const targetUIDs = ["61589284233373", "61589284233373", "61589284233373"];

    // ✨ Replies in italic small-caps bold style
    const replies = [
      
      "____👀😌\n\nনাবিল বস এখন বিজি আছে যা বলার আমাকে বল বস অনেক বিজি______\n\n🏴‍☠️⚡",
      "╭────────────◊\n নাবিল বস কই তুমি দেখো তোমাকে এক বলদা মেনশন করে 😌❤️‍🩹\n╰─────────",
          "এতবার মেনশন না দিয়ে বসের ইনবক্সে সরাসরি চলে যাও আর মেয়ে হলে ইগনোর থাকো😌⚡❤️‍🩹",
    "╭────────────◊\n বস কই তুমি দেখো তোমাকে এক বলদা মেনশন করে 😌❤️‍🩹\n╰─────────🚩🕸️",
   "🕸️👾\n\nমেনশন দিশ না নাবিল বস আমার সাথে বিজি আছে অনেক!!❤️‍🩹😌👀 বারবার মেনশন দিস কেন বস এখন তোকে রিপ্লাই দিবে না বস এখন আমাকে নিয়ে চিপায় বিজি\n⚡🚩",
      "🕸️👀🚩",
    ];

    if (!event.mentions || Object.keys(event.mentions).length === 0) return;

    for (const uid of targetUIDs) {
      if (Object.keys(event.mentions).includes(uid)) {
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        return api.sendMessage(randomReply, event.threadID, event.messageID);
      }
    }
  }
};
