var swiperPublikasi = new Swiper(".slide-content-publikasi", {
  slidesPerView: "auto",
  slidesPerGroup: 1,
  spaceBetween: 50,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-publikasi",
    prevEl: ".swiper-button-prev-publikasi",
  },
});

var swiperKalendar = new Swiper(".kalendar-container", {
  direction: "vertical",
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next-kalendar",
    prevEl: ".swiper-button-prev-kalendar",
  },
});
