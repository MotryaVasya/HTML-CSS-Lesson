/*
window - наше окно 
open(url, target) - открывает все что угодно 
close() - закрывает
alert();
confirm();
promt(); 
*/

// window.open("https://www.google.com", "_blank"); //открывает новое окно в новом окне

// window.close(); //закрывает текущее окно

//alert("Hello, World!"); //выводит окно с текстом
/*parametres: 
location - location address string

document
innerWidth, innerHeight
размер внутренней области без учета скрола и панелей

outerWidth, outerHeight
размер внутренней области с учетом скрола и панелей

Типы события:
DOMContentLoaded
click
mouseover
submit
keydown, keyup
change
scroll
focus, blur
resize
drag
input, checkbox, radio

orientationchange
contextmenu

обьект:
Event
(type, target, keycode, preventDefault(), )

*/
// document.getElementById('btn').onclick = func;

var btn = document.getElementById('btn');
var res = document.getElementById('res');

btn.addEventListener('click', function(){
    var block = document.createElement('div');
    block.classList.add('block');
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    block.style.backgroundColor = randomColor;
    block.onclick = function(){
        res.removeChild(block);
    };
    res.appendChild(block);
});

var text = document.getElementById('text');
document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('contextmenu', function(event){
        event.preventDefault();
    });
});