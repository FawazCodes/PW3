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

    // Rest of the script.js code

    function preloadResources() {
        const imageUrls = ['background.gif', 'background2.gif'];
        const audioUrls = [
            'win-sound.mp3',
            'win-sound2.mp3',
            'win-sound3.mp3',
            'win-sound4.mp3',
        ];

        imageUrls.forEach((imageUrl) => {
            const img = new Image();
            img.src = imageUrl;
        });

        audioUrls.forEach((audioUrl) => {
            const audio = new Audio();
            audio.src = audioUrl;
            audio.load();
        });
    }
});
