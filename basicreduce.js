function countWords(inputWords){
	//console.log(inputWords);
	var retobj = new Object();
	inputWords.reduce(function(x0,x,idx,arr){
		if(retobj[x]==undefined){
			retobj[x]=1;
		};
		else{
			retobj[x]+=1;
		};
		return;
	});
	console.log(retobj.toString());
	return retobj;
};

module.exports = countWords;
