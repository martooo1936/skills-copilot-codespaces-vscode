// create web server with express
const express = require('express');
const app = express();
const port = 3000;

// import comments from comments.json
const comments = require('./comments.json');

// allow CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// GET request to /comments
app.get('/comments', (req, res) => {
  // send comments as json response
  res.json(comments);
});

// start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});