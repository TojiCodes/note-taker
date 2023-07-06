const fs = require('fs');
const path = require('path');

const dbPath = path.resolve(__dirname, 'db.json');

const getNotes = () => {
const data = fs.readFileSync(dbPath, 'utf8');
return JSON.parse(data);
};

const saveNotes = (notes) => {
fs.writeFileSync(dbPath, JSON.stringify(notes), 'utf8');
};

const deleteNote = (id) => {
const notes = getNotes();
const updatedNotes = notes.filter((note) => note.id !== id);
saveNotes(updatedNotes);
};

module.exports = {
getNotes,
saveNotes,
deleteNote,
};
