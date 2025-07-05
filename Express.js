const express = require('express');
const app = express();
const path = require('path');

// Akses folder image secara publik
app.use('/image', express.static(path.join(__dirname, 'image')));

// Contoh route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Jalankan server
app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
