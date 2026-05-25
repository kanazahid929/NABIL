const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports = {
    config: {
        name: "npx1",
        version: "2.1",
        author: "siyam883381",
        countDown: 5,
        role: 0,
        shortDescription: "auto reply video",
        longDescription: "Replies with video when exact emojis are sent",
        category: "reply",
    },

    onStart: async function () {},

    onChat: async function ({ event, message }) {
        if (!event.body) return;

        // FIXED triggers (no empty string)
        const triggers = ["🙂", "🥺", "😊", "💗", "😅"];

        const text = event.body.trim();

        if (!triggers.includes(text)) return;

        const videoURL = "https://drive.google.com/uc?id=1UADRAFKVG_ztDhQ1mt_f1c_ajZ8V9tUl";
        
        // FIXED: proper mp4 filename
        const filePath = path.join(__dirname, "video.mp4");

        try {
            const response = await axios.get(videoURL, {
                responseType: "arraybuffer"
            });

            fs.writeFileSync(filePath, response.data);

            await message.reply({
                body: `💖🥰\n\n___𝗢𝗻𝗰𝗲 𝗮 𝗽𝗲𝗿𝘀𝗼𝗻 𝗹𝗲𝗮𝗿𝗻𝘀 𝘁𝗼 𝗸𝗻𝗼𝘄 𝘁𝗵𝗮𝘁 𝘁𝗵𝗲 𝘀𝘄𝗲𝗲𝘁 𝗵𝗲𝗮𝗿𝘁 𝘄𝗶𝗹𝗹 𝗻𝗼𝘁 𝗴𝗼 𝘄𝗶𝘁𝗵 𝗮𝗻𝘆𝗼𝗻𝗲, 𝘁𝗵𝗲𝗻 𝗵𝗲 𝘄𝗶𝗹𝗹 𝘁𝗲𝗹𝗹 𝗵𝗶𝗺𝘀𝗲𝗹𝗳 𝘁𝗵𝗮𝘁 𝗶𝘁 𝗶𝘀 𝗯𝗲𝘀𝘁 𝘁𝗼 𝗯𝗲 𝗮𝗹𝗼𝗻𝗲.\n___________________👑🥺`,
                attachment: fs.createReadStream(filePath)
            });

        } catch (error) {
            console.error("Error:", error.message);
            await message.reply("⚠️ Video load failed...");
        } finally {
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
        }
    }
};
