#!/usr/bin/node
const fs = require("fs");

const contentToWrite = "Python is cool";

const filePath = "my_file.txt";

fs.writeFile(filePath, contentToWrite, "utf-8", (err) => {
  if (err) throw err;
  console.log("Content has been written to", filePath);
});
