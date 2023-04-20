document.addEventListener('DOMContentLoaded', function () {
    preloadResources();

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

    function playGame(playerMove) {
        const computerMove = generateComputerMove();
        const gameResult = getGameResult(playerMove, computerMove);
        displayResult(gameResult, computerMove);
    }

    function generateComputerMove() {
        const moves = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * moves.length);
        return moves[randomIndex];
    }

    function getGameResult(playerMove, computerMove) {
        if (playerMove === computerMove) return 'tie';
        if (
            (playerMove === 'rock' && computerMove === 'scissors') ||
            (playerMove === 'paper' && computerMove === 'rock') ||
            (playerMove === 'scissors' && computerMove === 'paper')
        ) {
            return 'win';
        } else {
            return 'lose';
        }
    }

    function displayResult(gameResult, computerMove) {
        let resultText;
        let emoji;
        let resultColor;

        if (gameResult === 'win') {
            resultText = 'You Won!!!';
            emoji = '🥳';
            resultColor = 'green';
            changeBackground();
            playRandomWinSound();
        } else if (gameResult === 'tie') {
            resultText = 'It\'s a Tie';
            emoji = '😐';
            resultColor = 'white';
        } else {
            resultText = 'You Lost...';
            emoji = '😢';
            resultColor = 'red';
        }

        resultDiv.innerHTML = `${resultText} ${emoji}<br>Computer chose ${computerMove} ${getEmoji(computerMove)}`;
        resultDiv.style.color = resultColor;
    }

    function getEmoji(move) {
        if (move === 'rock') return '🪨';
        if (move === 'paper') return '📄';
        return '✂️';
    }

    function changeBackground() {
        const backgroundIndex = Math.floor(Math.random() * preloadedImages.length);
        document.body.style.backgroundImage = `url('${preloadedImages[backgroundIndex].src}')`;
    }

   function playRandomWinSound() {
    let audioIndex;
    const randNum = Math.random();
    if (randNum < 0.4) {
        audioIndex = 1; // 40% chance of playing win-sound1.mp3
    } else {
        audioIndex = Math.floor(Math.random() * 3) + 2; // 60% chance of playing win-sound2.mp3, win-sound3.mp3, or win-sound4.mp3
    }
    const audio = new Audio(`win-sound${audioIndex}.mp3`);
    audio.loop = true;
    audio.addEventListener('loadedmetadata', () => {
        audio.play();
    });
}

function preloadResources() {
    const imageUrls = ['background.gif', 'background2.gif'];
    const audioUrls = [
        'win-sound1.mp3',
        'win-sound2.mp3',
        'win-sound3.mp3',
        'win-sound4.mp3',
    ];

    window.preloadedImages = [];

    imageUrls.forEach((imageUrl) => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
            preloadedImages.push(img);
        };
    });

    audioUrls.forEach((audioUrl) => {
        const audio = new Audio();
        audio.src = audioUrl;
        audio.load();
    });

    // Update the changeBackground function to use preloadedImages
    window.changeBackground = function () {
        const backgroundIndex = Math.floor(Math.random() * preloadedImages.length);
        document.body.style.backgroundImage = `url('${preloadedImages[backgroundIndex].src}')`;
    };
}
