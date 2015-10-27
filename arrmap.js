function doubleAll(numbers){
	//var map = Array.prototype.map();
	var result=numbers.map(function (num){
		return num*2;
	});
	return result;
};

module.exports=doubleAll
