const express = require('express');
const cors = require('cors'); // Enable CORS
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3001; // Use process.env.PORT for compatibility with Heroku, etc.

// Middleware to enable CORS
app.use(cors());

// Define a route for fetching shipments data
app.get('/shipments', async (req, res) => {
  try {
    const externalUrl = `${baseUrl}/shipments`; // URL of the external API
    const response = await axios.get(externalUrl);
    setList(response.data);
  } catch (error) {
    console.error(error);

    // If there was an error with the external API, load data from the local file
    try {
      const localUrl = './Shipments.txt'; // Assuming the file is in the same directory
      const response = await axios.get(localUrl);
      setList(response.data);
    } catch (localError) {
      console.error('Error loading data from the local file:', localError);
    }
  }
});

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, server is running');
});
// Define a route for the root URL
app.get('/shipments', (req, res) => {
    res.send('Hello, server is running');
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
