module.exports=function(path,ext,node){
	var fs=require('fs');
	fs.readdir(path,function(err,data){
		if(err){
			return node(err);
		};
		var files=[];
		for(var i =0; i<data.length;i++){
			if(data[i].search('.'+ext)!=-1){
				files.push(data[i]);
			};
		};
		
		
		node(null,files);
	});
};
