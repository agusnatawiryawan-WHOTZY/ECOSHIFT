    window.addEventListener('load',()=>{
    const count5K=document.getElementById('count5k')
    const count10k= document.getElementById('count10k');
    const bars= document.querySelectorAll('#progresBar');
    let fiveK=0;
    let tenK=0;
    let width=0;
    const interval=setInterval(()=>{
        bars.forEach((bar=>{
            if(width<=80){
                width++;
                bar.style.width=width + '%';
            }
            else{
                clearInterval(interval);
            }
        }))
    },15)
    const count=setInterval(()=>{
        if(fiveK <= 4950){
            fiveK+=50;
            count5K.innerText=fiveK +'+';
        }
        else{
            clearInterval(count);
        }
    },0.1)
    const countTen=setInterval(()=>{
        if(tenK <= 9950){
        tenK+=50;
        count10k.innerText=tenK+ '+';
       }
       else{
        clearInterval(countTen);
       }
    },0.1)
});