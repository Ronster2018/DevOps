let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissors");

function win() {
	console.log("win");
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
}

function lose() {
	console.log("lost");
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
}

function draw() {
	console.log("draw");
}

function getComputerChoice() {
	const choices = ["r", "p", "s"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

// Writes to log the random number that is returned to us from the getCompChoice function
// console.log(getComputerChoice());
getComputerChoice();

function game(userChoice) {
	// console.log("Choice " + userChoice);
	const computerChoice = getComputerChoice();

	// Viewing the User and Computer choice to the console.
	// console.log("Computer choice => " + computerChoice);
	// console.log("User choice =>" + userChoice);

	// Using a Switch statement, we can accomplish the same tasks as an if/else statement
	switch (userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
			win();
			// console.log("User Wins");
			//We use a break so the condition does not continue down the case statements.
			break;
		case "ps":
		case "sr":
		case "rp":
			lose();
			// console.log("Computer Wins");
			break;
		case "pp":
		case "ss":
		case "rr":
			draw();
			// console.log("It's a draw");
			break;
	}
}

function main() {
	rock_div.addEventListener("click", function () {
		game("r");
	});

	paper_div.addEventListener("click", function () {
		game("p");
	});

	scissor_div.addEventListener("click", function () {
		game("s");
	});
}

main();
