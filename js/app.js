//основной слайдер

const swiper = new Swiper('.sliderOp', {
    speed: 700,
    direction: 'vertical',
    mousewheel: {
        sensitivity: .3,
        thresholdDelta: 100,
    },
    hashNavigation: {
        watchState: true,
        replaceState: true,
    },
    pagination: {
        el: '.puggin',
        type: 'bullets',
    },
    touchRatio: .5,
    sensitivity: 10,
    watchSlidesProgress: true,
});

//слайдер в первом слайде

const swiper1 = new Swiper('.first__slider', {
    speed: 600,
    navigation: {
        nextEl: '.nextB',
        prevEl: '.prewB',
    },
    pagination: {
        el: '.pagg',
        type: 'bullets',
    },
    autoplay: {
        delay: 3000,
        stopOnLastSlide: true,
      },
});

//слайдер страницы истории


const historySlider = new Swiper('.history-slider', {
    speed: 600,
    freeMode: true,
    slidesPerView: 'auto',
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    mousewheel: {
        sensitivity: .3,
        thresholdDelta: 100,
    },
});


//слайдер товаров

const swipertovar = new Swiper('.tovars-slider', {
    slidesPerView: 4,
    speed: 600,
    spaceBetween: 40,
    navigation: {
        nextEl: '.nextB',
        prevEl: '.prewB',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 1.5,
        spaceBetween: 50,
      },
      1200: {
        slidesPerView: 4,
      },
    }
});

//слайдер отзывов

const swiperrev = new Swiper('.slider-rev', {
    slidesPerView: 1,
    speed: 600,
    navigation: {
        nextEl: '.slide-rev-next',
        prevEl: '.slide-rev-prew',
    },
    pagination: {
        el: '.pagg-rev',
        type: 'bullets',
    },
});


//изменение номера слайда в первом слайде
let num = document.querySelector('.some');

swiper1.on('slideChange', () => {
    let ind = Number(swiper1.realIndex);
    num.innerHTML = ind + 1;
})

//изменение номера слайда в слайдере отзывов
let numrev = document.querySelector('.rev-pag-num-num');

swiperrev.on('slideChange', () => {
    let ind = Number(swiperrev.realIndex);
    numrev.innerHTML = ind + 1;
})

//изменение активного пункта в хедере
const headerItems = document.querySelectorAll('.header__menu__item');

swiper.on('slideChange', () => {
    headerItems.forEach(el=>{el.classList.remove('active')})
    headerItems[swiper.realIndex].classList.add('active')
})

//открытие попапа

let buttons = document.querySelectorAll('.popup-open-btn');
let blockClose = document.querySelector('.blockClose');

buttons.forEach(elem=>{
    elem.onclick = function() {
        let idPopup = elem.getAttribute('data-popup');
        document.getElementById(idPopup).classList.add('active');
        blockClose.classList.add('active');
  };
})

//закрытие попапов

let closePopup = document.querySelectorAll('.closePopups');
let popups = document.querySelectorAll('.popups')
closePopup.onclick = function(){
    popups.forEach(el=>{
        el.classList.remove('active');
    })
    blockClose.classList.remove('active');
}

closePopup.forEach(el=>{
    el.onclick = function(){
        popups.forEach(el=>{
            el.classList.remove('active');
        })
        blockClose.classList.remove('active');
    }
})

//изменение в форме специалист/компания

let buttonsFormSpec = document.querySelectorAll('.form-spec-swiper');
let forms = document.querySelectorAll('.form-spec')

buttonsFormSpec.forEach(el=>{
    el.onclick = function(){
        buttonsFormSpec.forEach(el=>{
            el.classList.remove('active')
        })
        forms.forEach(el=>{
            el.classList.remove('active')
        })
        el.classList.add('active')
        let wicthFormId = el.getAttribute('data-form');
        let formBlock = document.getElementById(wicthFormId)
        formBlock.classList.add("active")
    }
})

//открытие мобильного меню 

let mobBtn = document.querySelector('.lap-button-header')
let mobHeader = document.querySelector('.wraper-for-mob-menu')

mobBtn.onclick = function(){
    mobHeader.classList.toggle('active')
    blockClose.classList.toggle('active');
}


let sliderHistory = document.querySelector('.scroll-history');

console.log(sliderHistory)

sliderHistory.addEventListener('mouseup', function(){
    console.log(12)
})

//присвоение активного слайда в истории

let historySlides = document.querySelectorAll('.history-slide')
let contWidth = document.querySelector('.container').getBoundingClientRect().x;
console.log(historySlides)

function checkHistorySlides (){
    // console.log(12)
    historySlides.forEach((el)=>{
        if(el.getBoundingClientRect().x <= contWidth) {
            el.classList.add('active')
        } else {
            el.classList.remove('active')

        }
    })
    requestAnimationFrame(checkHistorySlides)
}

checkHistorySlides()


//появление больше в странице истории

let moreInfoBtn = document.querySelector('.moreinfo');
let moreInfoText =  document.querySelector('.history-text__description');

moreInfoBtn.onclick = ()=>{
    moreInfoText.classList.add('active')
    blockClose.classList.add('active');
}