import Swiper, { Autoplay, Navigation } from 'swiper';
Swiper.use([Navigation, Autoplay]);

function swiperSlider() {
  const teamMain = document.querySelectorAll('[data-slider="data-slider"]');
  const restaurantSlider = document.querySelectorAll(
    '[data-slider="restaurant-slider"]'
  );
  if (teamMain) {
    teamMain.forEach(slider => {
      // кнопки вперед та назад
      let arrowLeft = slider.querySelector('.sw-button-prev');
      let arrowRight = slider.querySelector('.sw-button-next');

      //коментуємо чи видаляемо якщо не потрібно
      // let pagination = slider.querySelector('.swiper-pagination');
      //коментуємо чи видаляемо якщо не потрібно

      let swiper = new Swiper(slider.querySelector('.swiper'), {
        speed: 1500,
        // автоплей
        //centeredSlides: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        slidesPerView: 1.3, // кількість слайдерів для показу
        spaceBetween: 25, // відстань між слайдерами
        loop: true,
        reverseDirection: false,
        // крапки пагінації
        // pagination: {
        //   el: pagination,
        //   clickable: true,
        //   renderBullet: function (index, className) {
        //     return '<li class="' + className + '"></li>';
        //   },
        // },
        // кнопки навігації
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },

        // додаємо додатковий клас
        // можна використовувати для додаткових анімацій
        // on: {
        //   transitionStart: function () {
        //     let previousIndex = this.previousIndex;
        //     let previousSlide =
        //       slider.getElementsByClassName('swiper-slide')[previousIndex];
        //     if (previousSlide) {
        //       setTimeout(function () {
        //         previousSlide.classList.remove('is-play');
        //       }, 1000);
        //     }
        //   },
        //   transitionEnd: function () {
        //     let activeIndex = this.activeIndex;
        //     let activeSlide =
        //       slider.getElementsByClassName('swiper-slide')[activeIndex];
        //     activeSlide.classList.add('is-play');
        //   },
        // },
        // адаптив
        breakpoints: {
          // when window width is >= 320px
          414: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        },
      });
    });
  }
  if (restaurantSlider) {
    restaurantSlider.forEach(slider => {
      //
      let arrowLeft = slider.querySelector('.rest-button-prev');
      let arrowRight = slider.querySelector('.rest-button-next');
      //

      // let pagination = slider.querySelector('.swiper-pagination');
      restSwiper = new Swiper(slider.querySelector('.swiper'), {
        speed: 1500,
        //centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        slidesPerView: 1.3,
        spaceBetween: 25,
        loop: true,
        reverseDirection: false,
        // pagination: {
        //   el: pagination,
        //   clickable: true,
        //   renderBullet: function (index, className) {
        //     return '<li class="' + className + '"></li>';
        //   },
        // },
        //
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },
        //
        // on: {
        //   transitionStart: function () {
        //     let previousIndex = this.previousIndex;
        //     let previousSlide =
        //       slider.getElementsByClassName('swiper-slide')[previousIndex];
        //     if (previousSlide) {
        //       setTimeout(function () {
        //         previousSlide.classList.remove('is-play');
        //       }, 1000);
        //     }
        //   },
        //   transitionEnd: function () {
        //     let activeIndex = this.activeIndex;
        //     let activeSlide =
        //       slider.getElementsByClassName('swiper-slide')[activeIndex];
        //     activeSlide.classList.add('is-play');
        //   },
        // },
        breakpoints: {
          // when window width is >= 320px
          1023: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          1279: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        },
      });
    });
  }
}
window.addEventListener('load', swiperSlider, false);
