let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let reset = document.querySelector("#reset");
let easy = document.querySelector("#easy");
let hard = document.querySelector("#hard");

colorDisplay.textContent = pickedColor;

reset.addEventListener("click",function(){
	//generate new colors
	colors= generateRandomColors(numSquares);
	//pick new colors
	pickedColor = pickColor();
	//display the picked color to match the h1
	colorDisplay.textContent = pickedColor;
	message.textContent = "";
	this.textContent = "New Colors"
	//turn colors of all the squares
	for(let i=0;i <squares.length;i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
})

easy.addEventListener("click",function(){
	hard.classList.remove("selected");
	easy.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(let i=0;i < squares.length;i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
})

hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(let i=0;i < squares.length;i++){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
	}
})

for(let i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		//grab color of clicked squares
		let clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			message.textContent = "CORRECT!";
			colorChange(clickedColor);
			h1.style.background = clickedColor;
			reset.textContent = "Play Again ?"
		} else {
			this.style.background = "#232323";
			message.textContent = "TRY AGAIN!";
		}
	});
}

function colorChange(color){
	for(let i=0;i < squares.length;i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	let arr = [];
	//repeat num times
	for(let i=0; i < num ; i++){
		//push the randomcolorinto arr
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	//random for red
	let r = Math.floor(Math.random() * 256);
	//random for blue
	let g = Math.floor(Math.random() * 256);
	//random for green
	let b = Math.floor(Math.random() * 256);
	//return rgb
	return "rgb(" + r + ", " + g + ", " + b +")";
}



// let tempColor = colors.map((i) => {
//  return color.style.background = colors.length;
// });
// console.log(tempColor);

