window.onload = function() {
    
    const hoverMenu = ()=>{

        const menu = document.querySelector('.header__menu')
        const shortBar = document.querySelector('.header__menu__bar--shorten')
        menu.addEventListener('mouseenter',()=>{
            shortBar.classList.remove('header__menu__bar--shorten')
        })
        menu.addEventListener('mouseleave',()=>{
            shortBar.classList.add('header__menu__bar--shorten')
        })
    }

    hoverMenu()

}