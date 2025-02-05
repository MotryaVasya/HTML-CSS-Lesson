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
    let timerInterval = null;

    btn.addEventListener("click", startGame);
    function startGame(){
        const size = parseInt(choice.value);
        createBoard(size);
        resetTimer();
        startTimer();
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
        for(let i=1; i<=totalCards/2; i++){
            numbers.push(i);
            numbers.push(i);
        }
        const pairs = cards.concat(numbers); // обьединение массивов
        pairs.sort(() => Math.random() - 0.5); // перемешивание массива
        for(let i =0; i<pairs.length; i++){
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.number = pairs[i];
            card.addEventListener('click', flipCard);
            board.appendChild(card);
            cards.push(card);
        }
    }
    function flipCard(){
        
        if(flipCards.length < 2 && this.classList.contains('flipped')) return;
        this.classList.add('flipped');
        this.textContent = this.dataset.number;
        flipCards.push(this);
        if(flipCards.length === 2){
            moviesC++;
            movies.innerHTML = moviesC;
            setTimeout(checkMatch, 500);
        }
    }
    function checkMatch(){
        const c1 = flipCards[0];
        const c2 = flipCards[1];
        if(c1.dataset.number === c2.dataset.number){
            c1.classList.add('match');
            c2.classList.add('match');
            flipCards = [];
        
            if (document.querySelectorAll('.match').length === cards.length){
                clearInterval(timerInterval);
                alert(`Вы выиграли! Игра длилась ${timerC}, вы сделали ${moviesC} ходов`);
            }
        }else{
            c1.classList.remove('flipped');
            c2.classList.remove('flipped');
            c1.textContent = '';
            c2.textContent = '';
            flipCards = [];
        }
    }
    function startTimer(){
        clearInterval(timerInterval)
        timerC = 0; 
        timer.innerHTML = timerC;
        timerInterval = setInterval(() => {
            timerC++;
            timer.innerHTML = timerC;
        }, 1000);
    }
    function resetTimer(){
        clearInterval(timerInterval)
        timerC = 0;
        timer.innerHTML = timerC;

    }
})