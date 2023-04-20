document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("curiousCat").onclick = function() {
    window.location.href = "https://curiouscat.live/Idkwallah";
  };

  const rockButton = document.getElementById("rock");
  const paperButton = document.getElementById("paper");
  const scissorsButton = document.getElementById("scissors");
  const resultDisplay = document.getElementById("result");

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

    (function(result, computerChoice) {
      let message, emoji, color;

      if (result === "win") {
        message = "You Won!!!";
        emoji = "🥳";
        color = "green";
        const randomBackgroundIndex = Math.floor(Math.random() * 2) + 1;
        document.body.style.backgroundImage = `url('background${randomBackgroundIndex}.gif')`;
        const winAudio = new Audio();
        winAudio.preload = "auto";
        winAudio.src = `win-sound${Math.floor(Math.random() * 4) + 1}.mp3`;
        winAudio.play();
      } else if (result === "tie") {
        message = "It's a Tie";
        emoji = "😐";
        color = "white";
      } else {
        message = "You Lost...";
        emoji = "😢";
        color = "red";
      }

      resultDisplay.innerHTML = `${message} ${emoji}<br>Computer chose ${computerChoice} ${computerChoice === "rock" ? "🪨" : computerChoice === "paper" ? "📄" : "✂️"}`;
      resultDisplay.style.color = color;
    })(result, computerChoice);
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
