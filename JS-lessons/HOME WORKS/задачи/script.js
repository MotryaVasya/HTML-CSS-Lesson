// Строки
// var inputText = document.getElementById('input-text');
// var inputText2 = document.getElementById('input-text2');
// var btn = document.getElementById('button');

// №1
// btn.addEventListener('click', function() {
//     let inputValue = inputText.value;
//     alert(inputValue.split('').length);
// });


// №2
// btn.addEventListener('click', function() {
//     let inputValue = inputText.value;
//     alert(inputValue.split('').reverse());
// });

// №3
// btn.addEventListener('click', function() {
//     let inputValue = inputText.value;
//     let inputValue2 = inputText2.value;
//     if (inputValue.length !== inputValue2.length) {
//         alert("Invalid");
//     }

//     if(inputValue.split('').sort().join('') === inputValue2.split('').sort().join('')){
//         alert("yes");
//     }
//     else{
//      alert("no");
//     }
// });

// №4
// btn.addEventListener('click', function() {
//     let inputValue = inputText.value;
//     if(inputValue.split('').join('') == inputValue.split('').reverse().join(''))alert("palindrom");
//     else alert("no");    
// });

// №8
// btn.addEventListener('click', function() {
//     let inputValue = inputText.value;
//     alert(inputValue.split(" ").length);
// })

// №7
// btn.addEventListener('click', function() {
//     const vowels = ['а', 'о', 'у', 'э', 'ы', 'я', 'ё', 'ю', 'е', 'и'];
//     let inputValue = inputText.value.split('');
//     for (let i = 0; i < inputValue.length; i++){
//         for (let j = 0; j < vowels.length; j++){
//             if (inputValue[i] == vowels[j]) {
//                 inputValue[i] = '*';
//                 break;
//             }
//         }
//     }
//     alert(inputValue.join(''));
// })


// Массивы

// №1
// function SumElementsInArray(){
//     var arr = [1, 2, 3, 4, 5];
//     var sum = 0;
//     for(var i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     console.log(arr);
//     console.log(sum);
// }
// SumElementsInArray();

//№2
// function SumElementsInArrayByEven(){
//     var arr = [1, 2, 3, 4, 5,2,2,2,22];
//     var countEvenNumbers = 0;
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             countEvenNumbers++;
//         }
//     }
//     console.log(arr);
//     console.log(countEvenNumbers);
// }

// SumElementsInArrayByEven();

//№3
// function MinNumberInArray(){
//     var arr = [1, 2, 3, 4, 5, -6];
//     var min = arr[0];
//     for(var i = 1; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i];
//         }
//     }
//     console.log(arr);
//     console.log(min);
// }
// MinNumberInArray();

// №4
// function FindnumberByFistElement(){
//     var arr = [1, 2, 3, 4, 5];
//     const number = '12';
//     var numbers = number.split('');
//     arr.find(function(n){
//         if(String(n).startsWith(numbers[0]) && String(n+1).endsWith(numbers[1])){
//             console.log(arr.indexOf(n));
//             return true;
//         }
//     });
// }

// FindnumberByFistElement();

// №5
// function FindExistNumberInArray(){
//     var arr = [1, 2, 3, 4, 5, 2, 2, 2, 22];
//     const number = '4';
//     console.log(arr.find((n) => n == parseFloat(number))!=null);
// }

// FindExistNumberInArray();

// №6
// function SortArray(){
//     var arr = [1, 5, 3, -3, -1];
//     arr.sort(function(a, b){return a - b});
//     console.log(arr);
// }

// SortArray();

// №7
// function DeleteLikeElements(){
//     var arr = [1, 2, 3, 2, 4, 5, 2, 2, 2, 22];
//     arr = [...new Set(arr)];
//     console.log(arr);
// }

// DeleteLikeElements();
// №8
// function MidleArifmeticNumber(){
//     var arr = [1, 2, 3, 4, 5, 6, 7, 20, 9, 15];
//     middleA = function(){
//         var sum = 0;
//         for (var i = 0; i < arr.length; i++){
//             sum += arr[i]
//         }
//         return sum / arr.length;
//     }
//     console.log(middleA());
// }
// MidleArifmeticNumber();

//ЦИКЛЫ
//№1
function Factorial(){
    var n = 5;
    var fact = 1;
    for(var i = 1; i <= n; i++){
        fact *= i;
    }
    console.log(fact);
}

Factorial();