const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your notes...';

const addNote = function (title, body) {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length == 0) {
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

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNotes = function (title) {
  const notes = loadNotes();
  const result = notes.filter(function (note) {
    return note.title !== title;
  });
  if (notes.length === result.length) {
    console.log(chalk.inverse.bold.red('No note found!'));
  } else {
    saveNotes(result);
    console.log(chalk.inverse.bold.green('Note removed!'));
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNotes: removeNotes,
};
