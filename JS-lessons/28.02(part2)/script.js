const texts = ['народная сказка, которую хоть раз слышал каждый. В ней рассказывается о необычном рецепте блюда и смекалке русского человека.','Солдат идёт домой на побывку, остановился на ночь у скупой старушки, которая не захотела накормить его ужином. Тогда служивый не растерялся: предложил сварить ей кашу «хоть из топора». Старуха удивилась, но согласилась.','Через некоторое время и она, и солдат были сытыми, а бабка и не почувствовала подвоха. Сказка заряжает умением находить выход из любого обстоятельства, не терять при этом чувство юмора и общаться так, чтобы человек чувствовал себя вполне комфортно.'];

let bestScore = localStorage.getItem('best') || 0;
let best = document.getElementById('best');
best.textContent = bestScore;
let countChars = 0;
let startTime = null;

function getText() {
    return texts[Math.floor(Math.random() * texts.length)];
}

function initText(){
    let container = document.getElementById('container');
    container.innerHTML = ``;
    const text = getText();
    text.split('').forEach(char =>{
        const span = document.createElement('span');
        span.textContent = char;
        container.appendChild(span);
    });
    let input = document.getElementById('input').value;
    input = '';
    startTime = null;
    countChars = 0;
}
initText();
document.getElementById('input').addEventListener('input', function(event){
    const textContainer = document.getElementById('container');
    const input = event.target.value;
    const spans = textContainer.querySelectorAll('span');
    if(!startTime){
        startTime = Date.now();
    }
    countChars++;
    let correctCount = 0;
    spans.forEach((span, index) => {
        if(index < input.length){
            if(span.textContent === input[index]){
                span.classList.add('correct');
                span.classList.remove('error');
            } else {
                span.classList.add('error');
                span.classList.remove('correct');
            }
        }
        else{
            span.classList.remove('error', 'correct');
        }
    })
});