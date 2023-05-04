


const menu =document.getElementById('menu');

const content = document.getElementById('drop');

menu.addEventListener("click",()=>{

    if(content.style.display=='none'){
        content.style.display='block';
    }else{
        content.style.display='none';
    }
});



const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdowns=>{
    const select = dropdowns.querySelector('.select');
    const caret = dropdowns.querySelector('.caret');
    const menu = dropdowns.querySelector('.menuu');
    const option = dropdowns.querySelector('.menuu li');
    const selected = dropdowns.querySelector('.selected');

select.addEventListener('click',()=>{
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate')
    menu.classList.toggle('menu-open');


option.addEventListener('click',()=>{
    selected.innerText = option.innerText;
    select.classList.remove('select-clicked');
    caret.classList.remove('caret-rotate');
    menu.classList.remove('menu-open');
    option.forEach(option =>{
        option.classList.remove('active');
    });

    option.classList.add('active');

});
});


});
