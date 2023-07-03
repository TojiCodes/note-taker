const express = require('express');
const path = require('path');
const { getNotes, saveNotes } = require('./db/store');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// API Routes
app.get('/api/notes', (req, res) => {
  const notes = getNotes();
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  const notes = getNotes();
  notes.push(newNote);
  saveNotes(notes);
  res.json(newNote);
});

app.delete('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;
  let notes = getNotes();
  notes = notes.filter((note) => note.id !== noteId);
  saveNotes(notes);
  res.json({ message: 'Note deleted' });
});

// HTML Routes
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
