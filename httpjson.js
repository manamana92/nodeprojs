var http = require('http');
var server = http.createServer(function(req,res){
	var url = require('url');
	var jsob = url.parse(req.url, true);
	var time =jsob.path.substr(jsob.path.indexOf('T')+1,8);
	console.log(time);
	var date = new Date(jsob.path.substr(jsob.path.indexOf('=')+1,24));
	console.log(JSON.stringify(date));
	var jsobwr={
		"hour": date.hour,
		"minute": Number(time.substr(2,2)),
		"second": Number(time.substr(4,2)),
	};
	console.log(JSON.stringify(jsobwr));
});
server.listen(process.argv[2]);
//server.listen('/api/unixtime');
