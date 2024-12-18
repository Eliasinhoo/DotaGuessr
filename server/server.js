const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"],

};

const sqlite3 = require('sqlite3').verbose();
const PORT = 8080;

let sql;

app.use(cors(corsOptions));

// Connect to SQLite database
const db = new sqlite3.Database('./dotad.db');

// API to get a row by ID
app.get('/api/row/:id', (req, res) => {
  const { id } = req.params;

  db.get('SELECT * FROM dota WHERE id = ?', [id], (err, row) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Database error' });
    }
    if (!row) {
      return res.status(404).json({ error: 'Row not found' });
    }

    res.json(row); // Send the whole row as JSON
    console.log(`data sent`);
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});