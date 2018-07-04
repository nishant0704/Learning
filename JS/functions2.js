function factorial(num){
	var res = 1;
	for (var i = 2; i <= num; i++) {
		res *= i;
	}
	return res;
}