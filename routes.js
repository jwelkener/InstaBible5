const express = require('express');
const pool = require('./db');

const router = express.Router();

// Define routes
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send('Connected to PostgreSQL. Current time: ' + result.rows[0].now);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
