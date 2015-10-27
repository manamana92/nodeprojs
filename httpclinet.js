var https = process.argv[2];
var http=require('http');
//console.log(process.argv[2]);
http.get(https,function callback(response){
	response.setEncoding('utf8');
	response.on("data",function(data){
		console.log(data);
	});
});

