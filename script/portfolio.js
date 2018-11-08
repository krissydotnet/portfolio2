const mySwiper = new Swiper(".swiper-container", {
    speed: 400,
    spaceBetween: 100,
    effect: "slide",
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});