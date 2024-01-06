// event-management-server/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// In-memory storage for events (replace this with a database in a real-world application)
let events = [];

// POST /new - Add new event
app.post('/new', (req, res) => {
  const newEvent = req.body;
  events.push(newEvent);
  res.status(201).json({ message: 'Event added successfully', event: newEvent });
});

// GET /list - List all events
app.get('/list', (req, res) => {
  res.status(200).json({ events });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
