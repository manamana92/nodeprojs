function getShortMessages(messages){
	var resarr=[];
	for(var i = 0;i<messages.length;i++){
		if(messages[i].message.length<50){
			resarr.push(messages[i].message);
		};
	};
	return resarr;
};
module.exports=getShortMessages;
