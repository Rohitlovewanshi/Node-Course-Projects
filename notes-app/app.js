const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');
const { demandOption } = require('yargs');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      decribe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.removeNotes(argv.title);
  },
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('Reading the note');
  },
});

yargs.command({
  command: 'list',
  describe: 'list a note',
  handler: function () {
    console.log('Listing out all notes');
  },
});

yargs.parse();
