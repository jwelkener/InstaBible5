const express = require('express');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

// Set up middleware
app.use(express.json());

// Mount routes
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
