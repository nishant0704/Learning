let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let reset = document.querySelector("#reset");
let input =  document.querySelector("input");
let p1Display =  document.querySelector("#p1Display");
let p2Display =  document.querySelector("#p2Display");
let winDisplay = document.querySelector("p span");
let p1Score=0;
let p2Score=0;
let gameOver = false;
let winScore = 5;





p1.addEventListener("click",() => {
	if(!gameOver){
		p1Score++;
		if(p1Score === winScore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

p2.addEventListener("click",() => {
	if(!gameOver){
		p2Score++;
		if(p2Score === winScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

reset.addEventListener("click",() => {
	p1Score=0;
	p2Score=0;
	p1Display.textContent=0;
	p2Display.textContent=0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver=false;
});


input.addEventListener("change",() => {
	winDisplay.textContent = input.value;
	winScore=Number(input.value);
});