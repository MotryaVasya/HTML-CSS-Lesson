let time = Number(prompt('Input time'));
let session = localStorage.getItem('session') || 0;

const timeDis = document.querySelector('.time');
const startB = document.getElementById('start');
const pauseB = document.getElementById('pause');
const stopB = document.getElementById('reset');
const sessionDis = document.getElementById('session');
const sound = document.getElementById('sound');
let t;
let isGo = false;
sessionDis.textContent = session

function timeSpan(){
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timeDis.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    if(!isGo){
        isGo = true;
        t = setInterval(()=>{
            if(time > 0){
                time--;
                timeSpan();
            }
            else{
                clearInterval(t);
                isGo = false;
                sound.play();
                alert('Time is out');
                session++;
                localStorage.setItem('session', session)
            }
        }, 1000);
    }  
}

function pauseTimer() {
    clearInterval(t);
    isGo = false;
}

function resetTimer() {
    clearInterval(t);
    isGo = false;
    time = 0;
    timeSpan();
}


stopB.addEventListener('click', resetTimer);

pauseB.addEventListener('click', pauseTimer);

startB.addEventListener('click', startTimer);
timeSpan();