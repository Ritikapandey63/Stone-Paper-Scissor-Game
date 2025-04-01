let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#User-score"); // Fixed case sensitivity
const computerScorePara = document.querySelector("#comp-sore"); // Fixed ID spelling mistake

// Generate computer's choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// Handle Draw Game
const drawGame = () => {
    msg.innerText = "It's a draw!";
    msg.style.backgroundColor = "gray";
};

// Show Winner
const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;  // ✅ This won't be null now
        msg.innerText = `You Win! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;  // ✅ This won't be null now
        msg.innerText = `You lose. ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

// Main Game Logic
const playGame = (userChoice) => {
    console.log("User choice:", userChoice);
    
    const computerChoice = genCompChoice();
    console.log("Computer choice:", computerChoice);

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin =
            (userChoice === "rock" && computerChoice === "scissor") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissor" && computerChoice === "paper");

        showWinner(userWin, userChoice, computerChoice);
    }
};

// Event Listeners for Choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
