const fs = require('fs');
const path = require('path');

const dbFilePath = path.resolve(__dirname, 'db.json');

const getNotes = () => {
const data = fs.readFileSync(dbFilePath, 'utf-8');
return JSON.parse(data);
};

const saveNotes = (notes) => {
const data = JSON.stringify(notes, null, 2);
fs.writeFileSync(dbFilePath, data);
};

module.exports = { getNotes, saveNotes };
