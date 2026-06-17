// const { isUtf8 } = require("buffer");
// const fs = require("fs");

// // console.log(fs);

// const content = fs.readFileSync('text.txt', 'utf-8')

// console.log(content);

const fs = require("fs");

const contents = fs.readFileSync("text.txt", "utf-8");

console.log(contents);

const newFile = fs.writeFileSync(
  "copy.txt",
  "I am kedareswar writtent this content by using the writeFileSync",
  "utf-8",
);
// every time overwrite the content
// so use appendFileSync

fs.appendFileSync(
  "copy.txt",
  "\n I am adding the data throgh appendFileSync",
  "utf-8",
);

// console.log(newFile);
