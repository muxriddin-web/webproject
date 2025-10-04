// routes/contactRoute.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'Barcha maydonlarni to‘ldiring' });
  }

  const telegramMessage = `
📥 *Yangi xabar!*

👤 *Ism:* ${escapeMarkdown(name)}
📧 *Email:* ${escapeMarkdown(email)}
📌 *Mavzu:* ${escapeMarkdown(subject)}
📝 *Xabar:* ${escapeMarkdown(message)}
`;

  const TELEGRAM_API = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    await axios.post(TELEGRAM_API, {
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: telegramMessage,
      parse_mode: 'Markdown'
    });

    return res.status(200).json({ success: true, message: 'Telegramga yuborildi' });
  } catch (error) {
    console.error('Telegram xatosi:', error.response?.data || error.message);
    return res.status(500).json({
      success: false,
      message: `Telegramga yuborilmadi: ${error.response?.data?.description || error.message}`
    });
  }
});

// Markdown belgilarini qochirish (xavfsizlik uchun)
function escapeMarkdown(text) {
  return String(text || '').replace(/([_*[\]()~`>#+\-=|{}.!])/g, '\\$1');
}

module.exports = router;



