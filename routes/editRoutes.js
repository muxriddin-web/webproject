// // routes/editRoutes.js

// const express = require('express');
// const router = express.Router();

// // .env dan maxfiy parol
// // const PASSWORD = process.env.EDIT_PASSWORD || 'admin123';

// // // 1. Parolni tekshirish (frontenddan keladi)
// // router.post('/check-password', (req, res) => {
// //   const { password } = req.body;

// //   if (password === PASSWORD) {
// //     res.json({ success: true });
// //   } else {
// //     res.json({ success: false });
// //   }
// // });
// const PASSWORD = process.env.EDIT_PASSWORD || 'admin123';

// router.post('/check-password', (req, res) => {
//   const { password } = req.body;
//   if (password === PASSWORD) {
//     res.json({ success: true });
//   } else {
//     res.json({ success: false });
//   }
// });

// // 2. Matnni yangilash (id va text keladi)
// router.post('/update-text', async (req, res) => {
//   const { id, text } = req.body;

//   // Bu yerda MongoDB yoki boshqa bazaga saqlashni amalga oshiring
//   // Misol uchun MongoDB:
//   // await MyModel.updateOne({ _id: id }, { text });

//   console.log(`📩 Yangilangan ID: ${id}, yangi matn: ${text}`);
//   res.json({ success: true, message: 'Matn yangilandi' });
// });

// module.exports = router;
