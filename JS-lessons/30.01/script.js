
// document.getElementById('btn').addEventListener("click", function(){
//     let month = parseInt(document.getElementById('month').value) - 1;
//     let year = parseInt(document.getElementById('year').value);   

//     // if (!month || !year){
//     //     alert('Please enter both month and year.');
//     //     return;
//     // }

//     const firstDay = new Date(year, month, 1);
//     let startDay = firstDay.getDay();
//     if (startDay === 0) startDay = 7;
    
//     let daysInMonth = new Date(year, month + 1, 0).getDate();
    
//     let calendar = '<table><tr><th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th><th>ВС</th></tr>';
//     for(let i = 1; i < startDay; i++){
//         calendar += '<td></td>';
//     }
    
//     for(let d = 1; d <= daysInMonth; d++){
//         calendar += `<td>${d}</td>`
//         if((d + startDay - 1) % 7 === 0){
//             calendar += '</tr>';
//         }
//     }
//     calendar += '</table>'
//     document.getElementById('calendar').innerHTML = calendar;



//     // console.log(daysInMonth);

// });



document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function(){   
        document.getElementsByTagName('p')[0].style.color = this.dataset.color;
    });
});