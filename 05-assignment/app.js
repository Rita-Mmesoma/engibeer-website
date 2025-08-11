let windowWidth = window.innerWidth;
const menu = document.querySelector('.menu');
const menuBar = document.querySelector('.menu-bar');
const main = document.querySelector('.main');


function showMenu(){
    menu.style.display = 'flex';
    menuBar.style.display = 'none';
}


function hideMenu(){
    menu.style.display = 'none';
    menuBar.style.display = 'block'
}

setInterval(() => {
    if(window.innerWidth > 900){
        menu.style.display = 'none';
        menuBar.style.display = 'none';
    }else{
        menuBar.style.display = 'block';
    }
}, 100)

/* window.onresize = function(){
    const width = window.innerWidth;
    if(width > 900){
        menu.style.display = 'none';
        menuBar.style.display = 'none'
    }
} */



/* function checkinMenu(){
    if(window.innerWidth > 900){
        menu.style.display = 'none';
        console.log("Firing...: ", window.innerWidth)
    }
} */
/* if(windowWidth < 500){
    main.style.backgroundColor = 'red';
}else{
    main.style.backgroundColor = 'white';
} */



/* const openMenu = document.querySelector('.btnOpen');
const closeMenu = document.querySelector('.btnClose');
const menu = document.querySelector('.menu');

openMenu.addEventListener('click', () => {
    menu.classList.toggle('open')
})

closeMenu.addEventListener('click', () => {
    menu.classList.remove('open')
}) */