var swiperPublikasi = new Swiper(".slide-content-publikasi", {
  slidesPerView: "auto",
  slidesPerGroup: 1,
  spaceBetween: 50,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-publikasi",
    prevEl: ".swiper-button-prev-publikasi",
  },
});

var swiperKalendar = new Swiper(".slide-content-kalendar", {
  direction: "vertical",
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-kalendar",
    prevEl: ".swiper-button-prev-kalendar",
  },
});
