function Select(name_book){
    document.getElementById('book').value = name_book;
}
function Buy(){
    let form = document.getElementById('order');
    let container_order = document.getElementById('container-order');
    let container = document.getElementById('container');
    
    let book = document.getElementById('book');
    let quantity = document.getElementById('quantity');
    let name = document.getElementById('name');
    let address = document.getElementById('address');
    let date = document.getElementById('date');
    let comment = document.getElementById('comment');
    
    if(book.value == '' || address.value == '' || name.value == '' || date.value == ''){
        alert('Please select a information for a buy book');
        return;}
    
    
    let span = document.createElement('span');
    span.textContent = `${name.value}, thanks for the order!`;
    let paragraph = document.createElement('p');
    paragraph.textContent = `Book: ${book.value}, will be delivered on ${date.value} to ${address.value} `;
    let button = document.createElement('button');
    button.textContent = 'Close';

    form.appendChild(span);
    form.appendChild(paragraph);
    form.appendChild(button);
    container.style.display = 'none';
    container_order.style.display = 'flex';
    button.onclick = function(){
        container.style.display = 'flex';
        container_order.style.display = 'none';
        span.remove();
        paragraph.remove();
        button.remove();
        book.value = '';
        quantity.value = '';
        name.value = '';
        address.value = '';
        date.value = '';
        comment.value = '';
    }
}