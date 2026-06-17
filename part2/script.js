const fs = require("fs");

// read the content of the text.txt

// const content = fs.readFileSync("text.txt", "utf-8");
// [Sync] => Blocking commands

// for non blocking the operations
console.log("Start of Script");

const contents = fs.readFile("text.txt", "utf-8", (error, data) => {
  if (error) console.log(error);
  else console.log("Contents are ", data);
});

console.log("End of Script");
