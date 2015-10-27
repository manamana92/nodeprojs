var path = process.argv[2];
var end = process.argv[3];
var mymodule=require('./mymodule');
mymodule(path,end,function readout(err,data){
	for(var i=0;i<data.length;i++){
		console.log(data[i]);
	};
});
