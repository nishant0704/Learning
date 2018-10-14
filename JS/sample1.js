// function calculateAge(birthYear){
// 	return 2018 - birthYear;
// }



// function retirement(year,name){
// 	var age = calculateAge(year);
// 	var retirement = 65 - age;
// 	if(retirement > 0){
// 		console.log('The retirement age of '  + name + ' is ' + retirement + ' years ');
// 	}else{
// 		console.log(name + ' is already retired');
// 	}
// }

// retirement(1993,'Nishant');
// retirement(1959,'Nishant');
// retirement(1949,'Nishant');


//tip caloculator

function billCalculator(bill){
	var percentage;
	if( bill  < 50 ){
		percentage = .2;
	} else if ( bill >= 50 && bill < 200 ){
		percentage = .15;
	} else {
		percentage = .1;
	}
	return percentage * bill;
}

var bills = [124,48,268];
var tips = [billCalculator(bills[0]),billCalculator(bills[1]),billCalculator(bills[2])];
var finalValues = [ bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(finalValues);