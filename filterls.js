var path = process.argv[2];
var end = process.argv[3];
var fs = require('fs');
fs.readdir(path,function readding(err,files){
	for(var i=0;i<files.length;i++){
		if(files[i].search('.'+end)!=-1){
			console.log(files[i]);
		};
	};
});
