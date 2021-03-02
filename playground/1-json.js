const fs = require('fs');
// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);
const dataBuffer = fs.readFileSync('1-json.json');
const jsonData = JSON.parse(dataBuffer.toString());
jsonData.name = 'Rohit Lovewanshi';
const jsonString = JSON.stringify(jsonData);
fs.writeFileSync('1-json.json', jsonString);
