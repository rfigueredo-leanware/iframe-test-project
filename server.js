const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000; // You can change this to any port you prefer

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
