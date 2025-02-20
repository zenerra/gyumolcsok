require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());


const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


db.connect((err) => {
  if (err) {
    console.error('Hiba', err);
    return;
  }
  console.log('Sikeres kapcsolat');
});


app.get('/fruits', (req, res) => {
  db.query('SELECT * FROM fruits', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Adatbázis hiba' });
      return;
    }
    res.json(results);
  });
});


app.post('/fruits', (req, res) => {
  const { nev, mennyiseg, egysegar } = req.body;
  db.query('INSERT INTO fruits (nev, mennyiseg, egysegar) VALUES (?, ?, ?)', [nev, mennyiseg, egysegar], (err, result) => {
    if (err) {
      console.error('Hiba az adatok beszúrásakor:', err);
      res.status(500).json({ error: 'Beszúrási hiba' });
      return;
    }
    res.json({ id: result.insertId, nev, mennyiseg, egysegar });
  });
});


app.put('/fruits/:id', (req, res) => {
  const { id } = req.params;
  const { nev, mennyiseg, egysegar } = req.body;
  db.query('UPDATE fruits SET name = ?, quantity = ?, price = ? WHERE id = ?', [nev, mennyiseg, egysegar, id], (err) => {
    if (err) {
      console.error('Hiba', err);
      res.status(500).json({ error: 'Frissítési hiba' });
      return;
    }
   
  });
});


app.delete('/fruits/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM fruits WHERE id = ?', [id], (err) => {
    if (err) {
      console.error('Hiba a törlés során:', err);
      res.status(500).json({ error: 'Törlési hiba' });
      return;
    }
    res.json({ message: 'Gyümölcs törölve!' });
  });
});

app.listen(PORT, () => {
  console.log(`Szerver fut a http://localhost:${PORT} címen`);
});
