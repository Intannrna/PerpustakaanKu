const express = require('express');
const app = express();
const path = require('path');

app.use('/image', express.static(path.join(__dirname, 'image')));

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
