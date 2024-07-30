document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('guess-tim').addEventListener('click', () => makeGuess('ティム'));
document.getElementById('guess-tam').addEventListener('click', () => makeGuess('タム'));
document.getElementById('restart-btn').addEventListener('click', restartGame);

let sequence = [];
let correctAnswer = '';

function startGame() {
    sequence = [];
    const options = ['ティム', 'タム'];
    
    for (let i = 0; i < 13; i++) {
        const randomChoice = options[Math.floor(Math.random() * options.length)];
        sequence.push(randomChoice);
    }
    
    correctAnswer = options[Math.floor(Math.random() * options.length)];
    
    document.getElementById('sequence').innerText = sequence.join(', ');
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('game').classList.remove('hidden');
    document.getElementById('guess-section').style.display = 'block';
    document.getElementById('result').innerText = '';
}

function makeGuess(guess) {
    const resultText = guess === correctAnswer ? '正解です！' : '不正解です。';
    document.getElementById('result').innerText = `あなたの予想: ${guess}\n正解: ${correctAnswer}\n${resultText}`;
    document.getElementById('game').classList.add('hidden');
    document.getElementById('result-section').classList.remove('hidden');
}

function restartGame() {
    document.getElementById('result-section').classList.add('hidden');
    document.getElementById('intro').classList.remove('hidden');
}
