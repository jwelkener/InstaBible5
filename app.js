const express = require('express');
const routes = require('./routes');
const db = require('./db');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set up middleware
app.use(express.json());

// Mount routes
app.use('/', routes);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


// Define a route to handle fetching random verses
app.get('/api/random-verse', (req, res) => {
    // Your code to fetch a random verse from the Bible API goes here
});


// Define a route to handle fetching verses from the verse bank
app.get('/verse-bank', (req, res) => {
    // Your code to fetch verses from your database or another source goes here
    // Send the verses as JSON response
    res.json({ verses: yourVerseData });
});

//Route for getting verse from user search bar
app.post('/verse-search', async (req, res) => {
  const [_, book, chapter, verse] = /^([a-zA-Z]+)\s(\d+):(\d+)$/.exec(req.body.searchText);
  console.log(book, chapter, verse);
  const data = await db.query('SELECT * FROM verses WHERE book = $1 AND chapter = $2 AND verse = $3', [book, chapter, verse]);
  console.log(data.rows);
  res.json(data.rows);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
