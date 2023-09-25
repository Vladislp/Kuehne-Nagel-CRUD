const express = require('express');
const cors = require('cors'); // Enable CORS
const axios = require('axios');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3001; // Use process.env.PORT for compatibility with Heroku, etc.

// Middleware to enable CORS
app.use(cors());

// Define a route for fetching shipments data
app.get('/shipments', async (req, res) => {
  try {
    const externalUrl = `${baseUrl}/shipments`; // URL of the external API
    const response = await axios.get(externalUrl);
    res.json(response.data); // Respond with the fetched data
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data from the external API.' });
  }
});


// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, server is running');
});

app.get('/localdata', (req, res) => {
  try {
    // Define the path to your local text file
    const filePath = './Shipments.txt'; // Adjust the path as needed

    // Read the contents of the file asynchronously
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        res.status(500).json({ error: 'An error occurred while reading the file.' });
      } else {
        // Send the file contents as the response
        res.send(data);
      }
    });
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).json({ error: 'An error occurred while handling the request.' });
  }
});

// Define a route for the root URL
app.get('/shipments', (req, res) => {
    res.send('Hello, server is running');
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
