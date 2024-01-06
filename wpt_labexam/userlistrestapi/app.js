// user-management-server/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors()); 

// In-memory storage for users (replace this with a database in a real-world application)
let users = [];

// POST /new - Add new user
app.post('/new', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json({ message: 'user added successfully', user: newUser });
});

// GET /list - List all users
app.get('/list', (req, res) => {
  res.status(200).json({ users });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
