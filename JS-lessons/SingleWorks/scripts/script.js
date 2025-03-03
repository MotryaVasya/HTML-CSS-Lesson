let main = document.getElementById('main');
main.innerHTML = 
`
    <div id="container">    
        <a href='games/game1.html'><img src='images/unnamed.png'></a>
        <a href='games/game2.html'><img src='images/2.png'></a>
        <a href='games/game3.html'><img src='images/3.jpg'></a>   
    </div>
`;
localStorage.setItem('username', 'Sasha'); // key / value - сохранить
localStorage.getItem('username'); // получить по ключу
// localStorage.removeItem('username'); // удалить по ключу 
document.getElementById('score1').textContent = localStorage.getItem('game1') || 0;
document.getElementById('score2').textContent = localStorage.getItem('game2') || 0;
document.getElementById('score3').textContent = localStorage.getItem('game3') || 0;


var button = document.getElementById('button');
button.addEventListener('click', function(){
    var INFO = document.getElementById('info');
    INFO.style.display = 'flex';
});

var close_info = document.getElementById('close-info');
close_info.addEventListener('click', function(){
    var INFO = document.getElementById('info');
    INFO.style.display = 'none';
});
// console.log('start');
// setTimeout(() =>{
//     console.log('прошло 5 секунд');
// }, 5000);

// console.log('раньше таймаута')

// count = 0;
// let interval = setInterval(() =>{
//     count++;
//     console.log(count);
//     if (count === 5)
//         console.log('stop');
// }, 2000);