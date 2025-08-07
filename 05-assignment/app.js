const windowWidth = window.innerWidth;
const openMenu = document.querySelector('.btnOpen');
const closeMenu = document.querySelector('.btnClose');
const menu = document.querySelector('.menu');

openMenu.addEventListener('click', () => {
    menu.classList.toggle('open')
})

closeMenu.addEventListener('click', () => {
    menu.classList.remove('open')
})




// if(windowWidth > 700){
//     menu.style.display = 'none';
   
// }

// function showMenu(){
   
//     if(windowWidth < 600){
//         const menu = document.querySelector('.menu');
//         menu.style.display = 'flex';
        
//         const menuBar = document.querySelector('.menu-bar');
//         menuBar.style.display = 'none'
//     }
//     /* const menuBar = document.querySelector('.menu-bar');
//         menuBar.style.display = 'none' */
// }
// showMenu()

// function hideMenu(){
//     const menu = document.querySelector('.menu');
//     menu.style.display = 'none';
//     const menuBar = document.querySelector('.menu-bar');
//     menuBar.style.display = 'block'
// }





