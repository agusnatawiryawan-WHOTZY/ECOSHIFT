const heroSwiper = new Swiper(".swiper-main-hero", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 1,
    loop: true,
    speed: 900,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
});