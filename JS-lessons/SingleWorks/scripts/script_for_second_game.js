var container =  document.getElementById('container');

container.innerHTML = `<div id="box"></div>
 <p id="score">Score: ${localStorage.getItem('game2')}</p>`;

var box = document.getElementById('box');
coins = 0;

setInterval(function() {
    box.style.width = `${(Math.random()*300).toFixed()}px`;
    
    box.style.height = `${(Math.random()*300).toFixed()}px`;
    
    box.style.backgroundColor = `rgb(${(Math.random()*255).toFixed()}, ${(Math.random()*255).toFixed()}, ${(Math.random()*255).toFixed()})`;
    
    box.style.position = 'absolute';
    
    box.style.left = `${(Math.random()*100).toFixed()}%`;
    
    box.style.top = `${(Math.random()*100).toFixed()}%`;
    },1000);

box.addEventListener('click', () => {
    coins++;
    document.getElementById('score').textContent = `Score: ${coins}`;
    localStorage.setItem('game2', coins);
});