const buttonFaq=document.querySelectorAll('.fa-plus');
const answer=document.querySelectorAll('.answer');

    buttonFaq.forEach((el,i)=>{
        el.addEventListener('click',()=>{
            answer[i].classList.toggle('aktive');
            el.classList.toggle('fa-x');
        })
    })