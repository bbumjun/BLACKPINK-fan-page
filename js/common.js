window.addEventListener("load", ()=>{
  (function hoverMenu() {
    const menuIcon = document.querySelector(".header__menu-icon");
    const shortBar = document.querySelector(".header__menu-icon__bar--short");
    menuIcon.addEventListener("mouseenter", ()=>{
      shortBar.classList.remove("header__menu-icon__bar--short");
    });
    menuIcon.addEventListener("mouseleave", ()=>{
      shortBar.classList.add("header__menu-icon__bar--short");
    });
  })();

  (function openNav() {
    const openNavBtn = document.querySelector(".header__menu-icon");
    openNavBtn.addEventListener("click", ()=>{
      const nav = document.querySelector(".side-menu");
      nav.style.setProperty("height", "100%");
    });
  })();

  (function closeNav() {
    const closeNavBtn = document.querySelector(".side-menu__header__close-icon");
    closeNavBtn.addEventListener("click", ()=>{
      const nav = document.querySelector(".side-menu");
      nav.style.setProperty("height", "0%");
    });
  })();

  (function stickHeader(){
    const header =document.querySelector('.header')
    let lastScrollY = window.scrollY
    let timer
    window.addEventListener('scroll',(e)=>{
      if(!timer){
        timer = setTimeout(()=>{
        timer = null
        if(window.scrollY < lastScrollY) {
          header.style.setProperty('position','sticky')
        } else {
          header.style.setProperty('position','relative')
        }
        lastScrollY = window.scrollY
      },200)
    }
    })
  })();
});
