import Swiper from 'swiper'

export const swiperConfig = {
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  //   centeredSlides: true,

  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
}

export const swiperDestinationConfig = {
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  pagination: { clickable: true },

  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
}
export const swiperTestimonialsConfig = {
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },

  pagination: { clickable: true },

  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
}
