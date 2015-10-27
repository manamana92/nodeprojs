function checkUsersValid(goodUsers){
	return function allUsersValid(submittedUsers){
		var boole=submittedUsers.every(function (x,array){
				return goodUsers.some(function (y){
					return x==y;
					});
				});
		return boole;
		};
	};
};

module.exports=checkUsersValid
