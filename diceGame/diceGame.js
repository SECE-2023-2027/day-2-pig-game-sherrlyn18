// Select elements
const playerEls = [document.getElementById('player1'), document.getElementById('player2')];
const scoreEls = document.querySelectorAll('.score');
const currentEls = document.querySelectorAll('.c-score');
const diceEl = document.querySelector('.dice');
const rollBtn = document.querySelector('.rolldice');
const holdBtn = document.querySelector('.hold');
const newGameBtn = document.querySelector('.newgame');

let scores, currentScore, activePlayer, playing;

const init = () => {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    scoreEls.forEach(el => el.textContent = '0');
    currentEls.forEach(el => el.textContent = '0');

    diceEl.style.display = 'none';

    playerEls[0].classList.add('active');
    playerEls[1].classList.remove('active');
    playerEls.forEach(player => player.classList.remove('winner'));
};

const switchPlayer = () => {
    currentEls[activePlayer].textContent = '0';
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    playerEls[0].classList.toggle('active');
    playerEls[1].classList.toggle('active');
};

// Roll Dice
rollBtn.addEventListener('click', function () {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;

        diceEl.src = `/diceGame/dice${dice}.jpg`;
        diceEl.style.display = 'block';

        if (dice !== 1) {
            currentScore += dice;
            currentEls[activePlayer].textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

// Hold Score
holdBtn.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        scoreEls[activePlayer].textContent = scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            playing = false;
            playerEls[activePlayer].classList.add('winner');
            diceEl.style.display = 'none';
        } else {
            switchPlayer();
        }
    }
});

// New Game
newGameBtn.addEventListener('click', init);

init(); // initialize the game
