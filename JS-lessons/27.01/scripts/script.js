// var name = prompt('введите имя');
// var age = confirm('вам больше 18?');
// console.log(age);
// alert(`Name: ${name}, Age: ${age}`);


// let i=0;
// while(i<10)
// {
//     console.log(i)
//     i++;
// }

// do{
//     console.log(i);
//     i++;
// }
// while(i<10);

// методы строк 
// var str = 'abra KADABRA';
// console.log(str.length);
// console.log(str.charAt(6));
// console.log(str.substring(2,6));
// console.log(str.slice(2,6));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.indexOf('bra'));
// console.log(str.replace('ab', 'mamaq'));


// var arr = [5,6,'w','a', true];
// console.log(arr[3]);
// arr.push(123);
// console.log(arr);
// console.log(arr.pop())
// console.log(arr)
// console.log(arr.shift());
// console.log(arr);
// arr.unshift('q', 'p');
// console.log();

/*  DOM & BOM
    DOM (document object module)
    BOM (browser object module)
*/
// DOM
// var id = document.getElementById('testID');
// console.log(id);
// var tag = document.getElementsByTagName('p');
// console.log(tag);
// var clas = document.getElementsByClassName('testClass');
// console.log(clas);

// var selector = document.querySelectorAll('#testID');
// console.log(selector)

// var child = document.createElement('span');
// child.setAttribute('class', 'child');
// id.appendChild(child);
// // id.removeChild(child);
// console.log(id.getAttribute('class'));
// console.log(id.parentNode)
// console.log(id.childNodes)
// child.innerHTML += '<a href="#">Link</a>';
// id.textContent += ' abracadabra';
// id.className = "as";
// id.id = 'asdasd';
// var inputText = document.getElementsByTagName('input');
// console.log(inputText.value);

var ul = document.getElementById('menu');
for(let i = 0; i<=4; i++){
    let child = document.createElement('li');
    child.textContent += "Element " + String(Number(i + 1));
    ul.appendChild(child);
}

var div = document.getElementsByClassName('highlite');
for(let i = 0; i < div.length; i++){
    div[i].style.backgroundColor = 'yellow';
    div[i].style.fontSize = '20px'
}