//empty array 
var todos = [];

var input = prompt("What would you like to do ?");

//checking whether input is quit or not 
while (input !== "quit"){
	//if inout new enter the item and push it into array
	if(input === "new"){
		var newToDo = prompt("Enter what to do ");
		todos.push(newToDo);
	}//if inout list , llist all the todos in the array 
	else if (input === "list"){
		console.log(todos);
	}
	//ask the user for next action 
	input = prompt("What would you like to do ?");	
}

//action when input is quit 
console.log('you quit');