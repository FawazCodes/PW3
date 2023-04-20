// Get DOM elements
const result = document.getElementById("result");
const gameButtons = document.querySelectorAll(".game-btn");
const redirectBtn = document.getElementById("redirectBtn");
const winAudio = document.getElementById("winAudio");
const body = document.querySelector("body"); // Added this to access the body element

// Add event listeners
redirectBtn.addEventListener("click", () => {
    window.location.href = "https://curiouscat.live/Idkwallah";
});

gameButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const userChoice = button.getAttribute("data-choice");
        const computerChoice = getRandomChoice();
        const outcome = determineWinner(userChoice, computerChoice);
        // Added emojis to the text
        result.textContent = `You chose ${userChoice} ${getEmoji(userChoice)}, computer chose ${computerChoice} ${getEmoji(computerChoice)}. ${outcome}`;
        // Added a function to change the text color based on the outcome
        changeTextColor(outcome);
    });
});

// Define functions
function getRandomChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];
    console.log(`Computer choice: ${randomChoice}`);
    return randomChoice;
}

function playWinAudio() {
    // Added an array of audio sources
    const audioSources = ["win-sound.mp3", "win-sound2.mp3", "win-sound3.mp3", "win-sound4.mp3"];
    // Randomly select one of them
    const randomSource = audioSources[Math.floor(Math.random() * audioSources.length)];
    // Set the winAudio source to the random one
    winAudio.src = randomSource;
    winAudio.currentTime = 0;
    winAudio.play();
}

function determineWinner(userChoice, computerChoice) {
    console.log(`User choice: ${userChoice}, Computer choice: ${computerChoice}`);
    if (userChoice === computerChoice) {
        // Added an emoji for tie
        return "It's a tie! 😐";
    }

    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        playWinAudio();
        console.log("You win!");
        // Added a function to change the background when the user wins
        changeBackground();
        // Added an emoji for win
        return "You win! 😁";
    }

    console.log("You lose!");
    // Added an emoji for lose
    return "You lose! 😢";
}

// Added a function to get the emoji for each choice
function getEmoji(choice) {
    switch (choice) {
        case "rock":
            return "👊";
        case "paper":
            return "✋";
        case "scissors":
            return "✌️";
        default:
            return "";
    }
}

// Added a function to change the background when the user wins
function changeBackground() {
    // Added an array of background sources
    const backgroundSources = ["background.gif", "background2.gif"];
    // Randomly select one of them
    const randomSource = backgroundSources[Math.floor(Math.random() * backgroundSources.length)];
    // Set the body background to the random one
    body.style.backgroundImage = `url(${randomSource})`;
}

// Added a function to change the text color based on the outcome
function changeTextColor(outcome) {
  if (outcome.includes("win")) {
      // Set the text color to green if the user wins
      result.style.color = "green";
  } else if (outcome.includes("lose")) {
      // Set the text color to red if the user loses
      result.style.color = "red";
  } else {
      // Set the text color to black if it's a tie
      result.style.color = "black";
  }
}
