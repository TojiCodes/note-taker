const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// API Routes
app.get('/api/notes', (req, res) => {
  // Code to handle the GET request for notes
});

app.post('/api/notes', (req, res) => {
  // Code to handle the POST request to create a new note
});

app.delete('/api/notes/:id', (req, res) => {
  // Code to handle the DELETE request to delete a note
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
