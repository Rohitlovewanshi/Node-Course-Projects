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
  handler(argv) {
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
  handler(argv) {
    notes.removeNotes(argv.title);
  },
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      decribe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});

yargs.command({
  command: 'list',
  describe: 'list a note',
  handler() {
    notes.listNotes();
  },
});

yargs.parse();
