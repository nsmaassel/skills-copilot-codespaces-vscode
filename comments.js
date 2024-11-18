// Create web server
const express = require('express');
const app = express();
// Create a port for the server
const port = 3000;
// Create a path to send data to the server
app.get('/comments', (req, res) => {
  // Send a response to the client
  res.send('Hello World!');
});
// Listen to the port
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});