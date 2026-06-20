const eyeHidden= document.querySelectorAll('.fa-eye');


eyeHidden.forEach((el,i)=>{

    el.addEventListener('click',()=>{

        const inputHidden=document.querySelectorAll('#password');

        const typeInput=inputHidden[i].getAttribute('type')
        
        if(typeInput=='password'){
            el.classList.toggle('fa-eye-slash')
            inputHidden[i].setAttribute('type', 'text');
            el.classList.remove('fa-eye');
        }

        else if(typeInput=='text'){
            el.classList.toggle('fa-eye')
            inputHidden[i].setAttribute('type', 'password');
            el.classList.remove('fa-eye-slash');
        }

    })
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
