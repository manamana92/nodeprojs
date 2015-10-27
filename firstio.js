var fs=require('fs');
var infile=process.argv[2];
var buf = fs.readFileSync(infile).toString();
var lines = buf.split('\n');
console.log(lines.length-1);
