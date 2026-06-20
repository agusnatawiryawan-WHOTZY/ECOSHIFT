// SWIPER PROBLEM
const swiperProblem = new Swiper(".swiper-problem", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 24,
    loop: true,
    speed: 900,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
// TESTI SWIPER
const testimonialSwiper = new Swiper(".swiper-testimonial", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
    loop: true,
    speed: 900,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    }
});

// HERO CHART
const chart= document.getElementById('chart__hero').getContext('2d');
const myChart = new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
        datasets: [{
            label: 'Waste Collage',
            data: [8,12, 6, 13, 15, 9, 20],
            backgroundColor: 'rgba(34, 197, 94, 0.5)',
            borderColor: 'rgba(34, 197, 94, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
    }
});

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
