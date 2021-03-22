const dino = document.querySelector('#dino'),
      cactus = document.querySelector('#cactus'),
      points = document.querySelector('#points'),
      best = document.querySelector('#bestPoint');

document.addEventListener('keydown', () => {
    jump();
});

let posOfDino = 0;

function jump() {
    if (dino.classList !== 'jump') {
        dino.classList.add('jump');
    }
    setTimeout(() => {
        dino.classList.remove('jump');
    }, 300)
}

let allScores = [];

if (localStorage.getItem('scores')) {
    allScores = JSON.parse(localStorage.getItem('scores'));
}

let bestScore = 0;

let isAlive = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        cactus.style.left = `${580}px`;
        posCactus = 580;
        allScores.push(posOfDino);
        localStorage.setItem('scores', JSON.stringify(allScores));
        posOfDino = 0;
        bestScore = Math.max.apply(null, allScores);
        best.textContent = `Your best score: ${bestScore}`;
        n = 2;
        alert('Game over!');
    }
}, 10);

let n = 2;

let posCactus = 580;

let id = setInterval(() => {
    ++posOfDino;
    bestScore = Math.max.apply(null, allScores);
    best.textContent = `Your best score: ${bestScore}`;
    if (bestScore < posOfDino) {
        best.textContent = `Your best score: ${posOfDino}`;
    }
    points.textContent = posOfDino;
    posCactus -= n;
    cactus.style.left = `${posCactus}px`;
    if (posCactus <= -20) {
        posCactus = Math.random() * (1000 - 580) + 580;
        cactus.style.left = `${posCactus}px`;
    }
}, 4);

