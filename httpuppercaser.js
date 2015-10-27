var http = require('http');
var server = http.createServer(function(req,res){
	var map=require('through2-map');
	req.pipe(map(function(chunk){
		return chunk.toString().toUpperCase();
	})).pipe(res);
});
server.listen(process.argv[2]);
