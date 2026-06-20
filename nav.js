const navHamburger=document.getElementById('hamburger');
const navMobile=document.querySelector('.nav__mobile');
const hero = document.getElementById('hero');
const nav=document.getElementById('nav')
navHamburger.addEventListener('click', ()=>{
    navMobile.classList.toggle('nav__mobile-click');
})

window.addEventListener('scroll',()=>{
    const heroHeight = hero.offsetHeight;
    if (window.scrollY > heroHeight - 100) {
        nav.classList.add('nav-scroll');
        nav.style.opacity=('1');
    } else {
        nav.classList.remove('nav-scroll');
        nav.style.opacity=('0');
    }
})
