// LOG IN JS
const eye= document.querySelector('.fa-eye');
eye.addEventListener('click',()=>{
    const inputPw=document.getElementById('password');
    const type=inputPw.getAttribute('type');
    if(type=='password'){
        eye.classList.toggle('fa-eye-slash')
        inputPw.setAttribute('type','text')
        eye.classList.remove('fa-eye')
    }
    else if(type=='text'){
        eye.classList.toggle('fa-eye')
        inputPw.setAttribute('type','password')
         eye.classList.remove('fa-eye-slash')
    }
})


const elementFadeUp= document.querySelectorAll('.fadeUp')
const elementFadeRigth=document.querySelectorAll('.fadeRigth')
const elemetFadeLeft=document.querySelectorAll('.fadeLeft')
const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
    })
    threshold: 0.15
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
