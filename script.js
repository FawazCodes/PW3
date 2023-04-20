<script>
    document.getElementById('curiousCat').onclick = function () {
        window.location.href = 'https://curiouscat.live/Idkwallah';
    };

    const rockBtn = document.getElementById('rock');
    const paperBtn = document.getElementById('paper');
    const scissorsBtn = document.getElementById('scissors');
    const resultDiv = document.getElementById('result');

    rockBtn.addEventListener('click', () => playGame('rock'));
    paperBtn.addEventListener('click', () => playGame('paper'));
    scissorsBtn.addEventListener('click', () => playGame('scissors'));

    function playGame(playerChoice) {
        const computerChoice = Math.floor(Math.random() * 3);
        let computerMove;

        if (computerChoice === 0) {
            computerMove = 'rock';
        } else if (computerChoice === 1) {
            computerMove = 'paper';
       
        const gameResult = getGameResult(playerChoice, computerMove);
        displayResult(gameResult, computerMove);
    }

    function getGameResult(playerChoice, computerMove) {
        if (playerChoice === computerMove) {
            return 'tie';
        }

        if (
            (playerChoice === 'rock' && computerMove === 'scissors') ||
            (playerChoice === 'paper' && computerMove === 'rock') ||
            (playerChoice === 'scissors' && computerMove === 'paper')
        ) {
            return 'win';
        }

        return 'lose';
    }

    function displayResult(gameResult, computerMove) {
        let resultText;
        let emoji;

        if (gameResult === 'win') {
            resultText = 'You Won!!!';
            emoji = '🥳';
            changeBackground();
            playRandomWinSound();
        } else if (gameResult === 'tie') {
            resultText = 'It\'s a Tie';
            emoji = '😐';
        } else {
            resultText = 'You Lost...';
            emoji = '😢';
        }

        resultDiv.innerHTML = `${resultText} ${emoji}<br>Computer chose ${computerMove} ${getEmoji(computerMove)}`;
    }

    function changeBackground() {
        const randomBackground = Math.floor(Math.random() * 2) + 1;
        document.body.style.backgroundImage = `url('background${randomBackground}.gif')`;
    }

    function playRandomWinSound() {
        const randomSound = Math.floor(Math.random() * 4) + 1;
        const audio = new Audio(`win-sound${randomSound}.mp3`);
        audio.loop = true;
        audio.play();
    }

    function getEmoji(move) {
        switch (move) {
            case 'rock':
                return '🪨';
            case 'paper':
                return '📄';
            case 'scissors':
                return '✂️';
            default:
                return '';
        }
    }
</script>
</body>
</html>
