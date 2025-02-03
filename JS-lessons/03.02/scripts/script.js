document.addEventListener("DOMContentLoaded", function(){
    const board = document.getElementById('board');
    const timer = document.getElementById('timer');
    const movies = document.getElementById('count');
    const choice = document.getElementById('choice');
    const btn = document.getElementById('btn');

    
    let cards = [];
    let flipCards = [];
    let moviesC = 0;
    let timerC = 0;

    btn.addEventListener("click", startGame);
    function startGame(){
        const size = parseInt(choice.value);
        createBoard(size);
    }
    function createBoard(size){
        board.innerHTML = '';
        cards = [];
        flipCards = [];
        moviesC = 0;
        timerC = 0;
        movies.innerHTML = moviesC;
        timer.innerHTML = timerC;
        const totalCards = size*size;
        const numbers = [];
        for(let i=0; i<=totalCards/2; i++){
            numbers.push(i);
        }
        const pairs = cards.concat(numbers); // обьединение массивов
        pairs.sort(() => Math.random() - 0.5); // перемешивание массива
        for(let i =0; i<pairs.length; i++){
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.number = pairs[i];
            board.appendChild(card);
            cards.push(card);
        }
    }
})