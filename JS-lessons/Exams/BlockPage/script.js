let blocks = document.querySelectorAll('.block');
let blocks_div = document.querySelectorAll('.block-div');
blocks_div.forEach(item =>{
    item.style.background = 'rgba(255,255,255,0.5)';
});
function Find(num){
    blocks_div.forEach(item => {
        if(item.style.display == 'flex'){
            item.style.display = 'none';
        }
    });
    blocks_div[num].style.display = 'flex';
}