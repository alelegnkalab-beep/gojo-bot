const BOT_TOKEN = "8903061520:AAGgHuOiUelE3HHN83..."; // 8903061520:AAGgHuOiUelE3HHN82gHnRjizLEe4Q3K1MQ
const WEB_APP_URL = "https://workers.dev"; // https://gojo.alelegnkalab.workers.dev/
const PHOTO_URL = "https://githubusercontent.com";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const message = req.body?.message;

    if (message && message.text === "/start") {
      await fetch(`https://telegram.org{BOT_TOKEN}/sendPhoto`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: message.chat.id,
          photo: PHOTO_URL,
          caption: "✨ *እንኳን ወደ GOJO ፕሪሚየም ጨረታ በደህና መጡ!* ✨\n\nዘመናዊ ኤሌክትሮኒክስ፣ መኪናዎች እና ቤቶችን በቀጥታ ይጫረቱ። ከታች ያለውን በተን በመንካት አሁኑኑ ይቀላቀሉ!",
          parse_mode: "Markdown",
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "🚀 ጨረታውን ይቀላቀሉ (Open Auction)",
                  web_app: { url: WEB_APP_URL },
                },
              ],
            ],
          },
        }),
      });
    }
  }
  res.status(200).send("OK");
}
