var fs = require('fs');

var file = fs.readFileSync("matches.csv", "utf-8");

var obj = JSON.parse(file);

console.log(obj[0]);