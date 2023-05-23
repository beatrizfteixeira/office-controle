var fs = require('fs');

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};
var txt = fs.readFileSync("./test.txt").toString('utf-8');
//require("./test.txt").toString();
console.log(typeof txt); // string
txt = txt.replace(/\s/g, "\n");
txt = txt.replace(/(^[ \t]*\n)/gm, "")
console.log(txt);
fs.writeFileSync("./test.txt", txt);
