const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);
//// content/subfolder/test.txt

const base = path.basename(filePath);
console.log(base);
//// content/subfolder/test.txt
/// test.txt

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
/// /Users/yayamayoshino/Desktop/codefiles/NodeTutorial/node-tutorial/content/subfolder/test.txt

