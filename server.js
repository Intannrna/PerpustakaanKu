const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/image', express.static(path.join(__dirname, 'image')));

let books = [];
try {
  const dataPath = path.join(__dirname, 'data', 'book.json');
  const jsonData = fs.readFileSync(dataPath, 'utf8');
  books = JSON.parse(jsonData);
  console.log(`Data buku berhasil dimuat. Total buku: ${books.length}`);
} catch (err) {
  console.error('Gagal baca file JSON:', err);
  process.exit(1);
}

app.get('/api/books', (req, res) => {
  res.json(books);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
