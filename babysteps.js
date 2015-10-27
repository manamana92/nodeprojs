var argarr=process.argv;
var sum=0;
for(var i = 2;i<argarr.length; i++){
	sum+=Number(argarr[i]);
};
console.log(sum);
