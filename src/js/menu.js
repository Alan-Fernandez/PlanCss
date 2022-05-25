(function(){
    const openButtom = document.querySelector('.nav--menu');
    const menu = document.querySelector('.nav--link');
    const closeMenu = document.querySelector('.nav--close');

    openButtom.addEventListener('click', ()=>{
        menu.classList.add('nav--link__show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav--link__show');
    });

})();