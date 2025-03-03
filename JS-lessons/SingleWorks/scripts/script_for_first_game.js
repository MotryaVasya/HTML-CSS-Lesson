let main = document.getElementById('main');
main.innerHTML = 
`
    <div id="buttons">
    </div>
`;
let number = 0;
let buttons = document.getElementById('buttons');
for (var i = 0; i < 10; i++) {
    buttons.innerHTML += `
    <button>${i+1}</button>
    `;
    if (Math.random().toFixed() == 0){
        number = i;
    }
    if (number>2 && number<8){
        if (Math.random().toFixed() != 0){
            number -= 3;
        }
        else{
            number += 3;
        }
    }
}
main.innerHTML += 
`
<span>Coins</span>
<span id="coins">0</span>
`;
document.getElementById('coins').textContent = localStorage.getItem('game1');
Array.from(document.getElementsByTagName('button')).forEach((btn)=>{
    btn.addEventListener('click', function(){
        if(btn.textContent == number){
            alert("Correct!");
            document.getElementById('coins').textContent = parseInt(document.getElementById('coins').textContent) + 1;
            Random();
        } else{
            alert("Wrong! The correct number is " + number);
            document.getElementById('coins').textContent = parseInt(document.getElementById('coins').textContent) - 1
            Random();
        }
        localStorage.setItem('game1', document.getElementById('coins').textContent);
    });
})
function Random(){
    for (var i = 1; i <= 10; i++) {
        if (Math.random().toFixed() == 0){
            number = i;
        }
        if (number>2 && number<8){
            if (Math.random().toFixed() != 0){
                number -= 3;
            }
            else{
                number += 3;
            }
        }
    }
}