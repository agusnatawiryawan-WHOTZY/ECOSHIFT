const elementFadeUp= document.querySelectorAll('.fadeUp')
const elementFadeRigth=document.querySelectorAll('.fadeRigth')
const elemetFadeLeft=document.querySelectorAll('.fadeLeft')
const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
    })
    threshold: 0.5;
})
elementFadeRigth.forEach((fadeRigth)=>{
    observer.observe(fadeRigth)
})
elemetFadeLeft.forEach((fadeLeft)=>{
    observer.observe(fadeLeft)
})
elementFadeUp.forEach((fadeUp)=>{
    observer.observe(fadeUp);
})
