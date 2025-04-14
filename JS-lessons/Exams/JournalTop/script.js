let groups = document.getElementById('group');
let lesson = document.getElementById('lesson');
let students = []
let num_lesson = 1

groups.addEventListener('change', function(){  
    generate_group(this.value);
});
function generate_group(value){
    switch(value){
        case '9/3-РПО-2022/1-54':
            students.push(
                'Седышев Владислав Сергеевич',
                'Мотря Василий Николаевич',
                'Монгуш Долума Мергеновна',
                'Барашкин Ярослав Вячеславович',
                'Базанкин Павел Дмитриевич',
                'Папкин Вадим Вадимович',
                'Терехов Василий Владимирович',
                'Ручко Сергей Алексеевич',
                'Жилкин Алексей Михайлович',
                'Балданай Белек Эрес-оолович',
                'Мелешенко Кирилл Валерьевич',
                'Асеева Алиса Владимировна',
                'Кравец Кирилл Максимович',
                'Коркин Михаил Романович',
                'Курилов Евгений Вячеславович',
                'Семенов Виктор Александрович',
                'Матвеев Александр Владимирович',
                'Скорик Тимофей Алексеевич',
                'Медведева Анна Алексеевна',
                'Бельтиков Максим Александрович');
            break;
        case '11/1-РПО-2024/1-54':
            students = [];
            students.push(
                'Фишер Алексей',
                'Владимир Владимирович',
                'Васильева София',
                'Какой-то там Алексей')
            break;
        
    } 
    console.log(students);  
}
lesson.addEventListener('change', function(){
    if(this.value == 'Select lesson'){
        num_lesson = 1;
        return; 
    }
    num_lesson = this.value;
});

document.getElementById('select').addEventListener('click', ()=>{
    if (students.length == 0) alert('Please select students');
    let div_students = document.getElementById('students');

    for (let i=0; i<students.length; i++){

        let div = document.createElement('div');
        div.className ='student';
        let span = document.createElement('span');
        span.textContent = students[i];

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        let result = document.createElement('span');
        result.id = i;

        div.appendChild(span);
        div.appendChild(checkbox);
        div.appendChild(result);
        div_students.appendChild(div);
    }
    let button = document.createElement('button');
    button.textContent = 'Save';
    div_students.appendChild(button);

    button.addEventListener('click', ()=>{
        
        let result = [];

        let checkboxes = document.querySelectorAll('.student input[type="checkbox"]');
        
        for(let i=0; i<checkboxes.length; i++) {
            if(checkboxes[i].checked){
                checkboxes[i].style.display = 'none';
                document.getElementById(i).textContent = 'Present';
                document.getElementById(i).style.display = 'block';
            }
            else{
                checkboxes[i].style.display = 'none'
                document.getElementById(i).textContent = 'Absent';
                document.getElementById(i).style.display = 'block';
            }
        }
        let topic = document.getElementsByClassName('topic');
        topic[0].style.display = 'none';
        topic[1].textContent = topic[0].value;
        topic[1].style.display = 'block';

        button.style.display = 'none';
    });
   
});
