// filesystem
const fs = require('fs');

// create file using sync method
fs.writeFileSync('notes.txt', 'This file was created by Node.js!');

// update file using sync method
fs.appendFileSync('notes.txt', '\n This is the appended text.');

// read data through file
data = fs.readFileSync('notes.txt')
console.log(data.toString())

// CRUD operations using file system module

// 1 -> create a folder and assign it a name
fs.mkdirSync('Ahmed')

// 2 -> create a file in ahmed folder
fs.writeFileSync("Ahmed/bio.txt", 'my name is ahmed ashfaq');

// 3 -> add more data into the existing file 
fs.appendFileSync('Ahmed/bio.txt','\n and i am 22 years old')

// 4 -> read data from bio file
const data2 = fs.readFileSync('Ahmed/bio.txt', 'utf8')
console.log(data2)

// 5 -> rename the file and folder
fs.renameSync("Ahmed/bio.txt", "Ahmed/mybio.txt")
fs.renameSync("Ahmed", "ahmed")

// 6 -> delete both file and folder
// delete file first
fs.unlinkSync('Ahmed/mybio.txt')

// delete folder
fs.rmdirSync('ahmed')

