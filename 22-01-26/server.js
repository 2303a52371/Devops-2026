const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/eventDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Event Schema
const eventSchema = new mongoose.Schema({
  title: String,
  date: Date,
  location: String,
  participants: [String]
});

// Event Model
const Event = mongoose.model('Event', eventSchema);

// GET all events
app.get('/events', async (req, res) => {
  try {
    const events = await Event.find({});
    res.json(events);   // 🔴 THIS is important
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
