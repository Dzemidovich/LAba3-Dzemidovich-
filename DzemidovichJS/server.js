const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const comments = [
  { id: 1, userId: 1, text: 'Alice comment 1' },
  { id: 2, userId: 1, text: 'Alice comment 2' },
  { id: 3, userId: 2, text: 'Bob comment 1' },
  { id: 4, userId: 3, text: 'Charlie comment 1' },
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
