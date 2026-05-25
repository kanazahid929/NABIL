const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports = {
	config: {
		name: "I love you ",
		version: "1.0",
		author: "siyam887754281",
		countDown: 5,
		role: 0,
		shortDescription: "sarcasm",
		longDescription: "Responds with random media when someone says ff",
		category: "reply",
	},

	onStart: async function () {},

	onChat: async function ({ event, message }) {
		if (event.body && event.body.toLowerCase() === "I love you") {
			const mediaLinks = [
				
				"https://drive.google.com/uc?id=1nyrYWzMxoR3ivdoLqeY-rCexr38Bvlry"

				
			];

	

			const randomLink = mediaLinks[Math.floor(Math.random() * mediaLinks.length)];
			const filePath = path.join(__dirname, "ff.mp4");

			try {
				const response = await axios.get(randomLink, {
					responseType: "arraybuffer"
				});

				fs.writeFileSync(filePath, response.data);

				await message.reply({
					body: "‎‎‎‎‎‎‎‎‎‎•───➺›𝐈 𝐋𝐨𝐯𝐞 𝐘𝐨𝐮 𝐓𝐨 𝐗ꫝ𝐧𝐒 ‎‎‎‎‎‎‎‎😘🩷🪶🪽🪄  \n\n ⎯͢⎯⃝💚🍒-༢Ꮗ𝐓𝐮𝐦𝐢𝐢 𝐀𝐦𝐚𝐤𝐞 𝐅𝐮𝐥𝐥 𝐃𝐢𝐨 𝐀𝐦𝐢𝐢\n𝐓𝐮𝐦𝐚𝐤𝐞 𝐅𝐮𝐥𝐞𝐫𝐫 𝐌𝐨𝐭𝐨 𝐕𝐚𝐥𝐨𝐛𝐚𝐬𝐛𝐨:)—♡<𝟯🌷🫶🥺🩷⏤͟͟͞͞◇💜✨⎯͢     \n\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎⎯͢⎯⃝🩷🪶🪽🪄 🥰",
					attachment: fs.createReadStream(filePath)
				});

			} catch (err) {
				console.error("Failed to fetch media:", err.message);
				await message.reply("Media load failed.");
			} finally {
				if (fs.existsSync(filePath)) {
					fs.unlinkSync(filePath);
				}
			}
		}
	}
};
