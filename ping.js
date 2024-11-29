const axios = require('axios');

// 15 soniyada bir martadan so'rov yuborish
setInterval(async () => {
  try {
    const response = await axios.get('https://ctfhawksbackend.onrender.com/api/categories');
    console.log('API ga so\'rov yuborildi:', response.status); // Javobni konsolga chiqarish
  } catch (error) {
    console.error('So\'rov yuborishda xatolik:', error);
  }
}, 15000); // 15 soniya
