function showMenu(){
    const menu = document.querySelector('.menu');
    menu.style.display = 'flex';
    const menuBar = document.querySelector('.menu-bar');
    menuBar.style.display = 'none'
}

function hideMenu(){
    const menu = document.querySelector('.menu');
    menu.style.display = 'none';
    const menuBar = document.querySelector('.menu-bar');
    menuBar.style.display = 'block'
}