const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your notes...';

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find(note => note.title == title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.inverse.bold.green('New note added!'));
  } else {
    console.log(chalk.inverse.bold.red('Note title taken!'));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNotes = title => {
  const notes = loadNotes();
  const result = notes.filter(note => note.title !== title);
  if (notes.length === result.length) {
    console.log(chalk.inverse.bold.red('No note found!'));
  } else {
    saveNotes(result);
    console.log(chalk.inverse.bold.green('Note removed!'));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.bold.green.inverse('Your notes!'));
  notes.forEach(note => {
    console.log(note.title);
  });
};

const readNotes = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title == title);

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(chalk.inverse(note.body));
  } else {
    console.log(chalk.red.inverse('Note not found!'));
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes,
};
