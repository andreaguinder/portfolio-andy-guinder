// Swiper Index
/*
  const swiperReferenciasIndex = new Swiper('.swiper-referencias-index .swiper', {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 0,
    loopAdditionalSlides: 2,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 8,
      centeredSlides: true,
      loop: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
      centeredSlides: false,
      loop: true,
    },
    1024: {
      loop: true,
      grabCursor: true,
      slidesPerView: 3,
      spaceBetween: 32,
      centeredSlides: false,
    },
  },
});
*/
// Swiper Desarrollo Web
/*
const swiperProyectos = new Swiper('.swiper-proyectos-web .swiper', {
  loop: true,
  grabCursor: true,
  centeredSlides: true, // Esto es vital para mobile
  slidesPerView: 1, 
  spaceBetween: 0, // Un poco más de aire
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1, // Una sola card a la vez
      spaceBetween: 0, 
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
    },
  },
});
*/


// SWIPER PRUEBA INDEX
const swiperReferenciasIndex = new Swiper(".swiper-referencias-index .swiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 24,
  autoHeight: true, // Fundamental para que el contenedor crezca con la card

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 24,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 32,
      centeredSlides: false,
    },
  },
});




// SWIPER PRUEBA INDEX

/*
    const swiper = new Swiper(".swiper-referencias-index .swiper", {
      loop: true,
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 24,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 24,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
          centeredSlides: false,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 32,
          centeredSlides: false,
        },
      },
    });
*/
    // SWIPER PRUEBA DESARROLLO WEB

    
const swiperProyectos = new Swiper('.swiper-proyectos-web .swiper', {
       loop: true,
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 24,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 24,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
          centeredSlides: false,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 32,
          centeredSlides: false,
        },
  },
});
