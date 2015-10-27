var infile = process.argv[2];
var fs= require('fs');
var farr=undefined;
fs.readFile(infile,function donereading(err,filecontents){
	farr=filecontents.toString().split('\n');
	console.log(farr.length-1);
});
