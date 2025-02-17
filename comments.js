// Create web server
const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create comments array
let comments = [];

// Add a comment
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.send('Comment added!');
});

// Get all comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Delete a comment
app.delete('/comments/:index', (req, res) => {
  const index = req.params.index;
  comments.splice(index, 1);
  res.send('Comment deleted!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});