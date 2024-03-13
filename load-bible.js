const fs = require('fs');
const csv = require('csv-parser');

// Path to your CSV file
const csvFilePath = 'web.csv';

// Array to store parsed CSV data
const data = [];

// Read the CSV file
fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', (row) => {
    // Process each row (row is an object representing a row in the CSV)
    data.push(row);
  })
  .on('end', () => {
    // This is called when the CSV parsing is complete
    console.log('CSV file successfully processed.');
    console.log(data[100]); // This will output the parsed CSV data
  });
