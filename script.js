document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("curiousCat").onclick = function() {
    window.location.href = "https://curiouscat.live/Idkwallah";
  };

  const rockButton = document.getElementById("rock");
  const paperButton = document.getElementById("paper");
  const scissorsButton = document.getElementById("scissors");
  const resultDisplay = document.getElementById("result");

  const dvd = new Image();
  dvd.onload = function() {
    document.body.style.backgroundImage = `url('${dvd.src}')`;
  };
  dvd.onerror = function() {
    console.error(`Error loading ${dvd.src}`);
  };
  dvd.src = 'dvd.gif';

  const backgroundImage = new Image();
  backgroundImage.onload = function() {
    document.body.style.backgroundImage = `url('${backgroundImage.src}')`;
  };
  backgroundImage.onerror = function() {
    console.error(`Error loading ${backgroundImage.src}`);
  };

  function playGame(userChoice) {
    const computerChoice = (function() {
      const choices = ["rock", "paper", "scissors"];
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    })();

    const result = (function(user, computer) {
      if (user === computer) {
        return "tie";
      }
      if ((user === "rock" && computer === "scissors") ||
          (user === "paper" && computer === "rock") ||
          (user === "scissors" && computer === "paper")) {
        return "win";
      }
      return "lose";
    })(userChoice, computerChoice);

    if (result === "win") {
      let randomBackgroundIndex = Math.floor(Math.random() * 2) + 1;
      backgroundImage.src = `background${randomBackgroundIndex}.gif`;
      const winAudio = new Audio();
      winAudio.preload = "auto";
      winAudio.src = `win-sound${Math.floor(Math.random() * 4) + 1}.mp3`;
      winAudio.play();
    }

    let message, emoji, color;
    if (result === "tie") {
      message = "It's a Tie";
      emoji = "😐";
      color = "white";
    } else if (result === "win") {
      message = "You Won!!!";
      emoji = "🥳";
      color = "green";
    } else {
      message = "You Lost...";
      emoji = "😢";
      color = "red";
    }

    resultDisplay.innerHTML = `${message} ${emoji}<br>Computer chose ${computerChoice} ${computerChoice === "rock" ? "🪨" : computerChoice === "paper" ? "📄" : "✂️"}`;
    resultDisplay.style.color = color;
  }

  rockButton.addEventListener("click", function() {
    playGame("rock");
  });
  paperButton.addEventListener("click", function() {
    playGame("paper");
 
});
scissorsButton.addEventListener("click", function() {
playGame("scissors");
});
});
