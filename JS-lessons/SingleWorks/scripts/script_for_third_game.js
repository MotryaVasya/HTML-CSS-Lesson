var container = document.getElementById('container');
var coins = localStorage.getItem('game3');
container.innerHTML += ` <p id="score">Score: ${coins}</p>`;
container.innerHTML += '<div id="enemy"></div>';
container.innerHTML += '<div id="airplane"></div>';

var airplane = document.getElementById('airplane');
container.innerHTML += '<div id="bulit"></div>';
setInterval(function() {
    var enemy = document.getElementById('enemy');
    coins++;
    var bulit = document.getElementById('bulit');
    document.getElementById('score').textContent = 'Score:'+ coins;
    localStorage.setItem('game3', coins);
}, 1000);
    