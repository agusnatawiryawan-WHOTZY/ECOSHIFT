const navHamburger=document.getElementById('hamburger');
const navMobile=document.querySelector('.nav__mobile');
const about = document.getElementById('about');
const nav=document.getElementById('nav')
navHamburger.addEventListener('click', ()=>{
    navMobile.classList.toggle('nav__mobile-click');
    console.log('di klik')
})

window.addEventListener('scroll',()=>{
    const aboutHeight = about.offsetHeight;
    if (window.scrollY > aboutHeight - 100) {
        nav.classList.add('nav-scroll');
        nav.style.opacity=('1');
    } else {
        nav.classList.remove('nav-scroll');
        nav.style.opacity=('0');
    }
})
console.log(nav)