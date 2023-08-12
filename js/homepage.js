// инициализация (активация слайдера)
new Swiper('.image-slider', {
    // стрелки управления 

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // Навигация
    // Буллеты, текущее положение, прогрессбар
    // pagination: {
    // el: '.swiper-pagination',
    // буллеты
    type: "bullets",
    clickable: true,

    // Динамические буллеты
    dynamicBullets: true,

    // Кастомные буллеты, оцифрованые
    renderBullet: function (index, className) {
        return '<span class=" ' + className + '">' + (index + 1) + '</span>'
    },
    // },

    // Фракция
    type: "fraction",

    // Прогрессбар
    type: "progressbar",

    // },
    // Включение/отключение 
    // перетаскивания на ПК
    simulateTouch: true,
    // Чувствительность свайпа
    touchRatio: 1,
    // Угол перетаскивания свайпа/перетаскивания
    touchAngle: 45,
    // курсор перетаскивания 
    grabCursor: true,

    // скролл
    // scrollbar: {
    // el: '.swiper-scrollbar',
    // Возможность перетаскивать скролл
    // draggable: true,
    // },
    // Переключение при клике на слайд
    slideToClickedSlide: true,

    // Навигация по хэшу (у каждого слайда свой адрес + можно переключать слайды стрелками браузера)
    hashNavigation: {
        // Отслеживать состояние
        watchState: true,
    },

    // Управление клавиатурой
    keyboard: {
        // включить/выключить
        enabled: true,
        // включить/выключить
        // только когда слайдер
        // в пределах вьюпорта
        onlyInViewport: true,
        // включить/выключить
        // управление клавишами
        // pageUp/Down
        pageUpDown: true,
    },

    // Управление колесом мышм
    // mousewheel: {
    // чувствительность колеса мыши
    // sensitivity: 1,
    // Класс объекта на котором 
    // будет срабатывать прокрутка мышью
    // eventsTarget: ".image-slider"
    // },

    // Автовысота слайдеров
    // autoHeight: true,

    // Кол-во слайдев д/показа
    // slidesPerView: 1,

    // Отступ между слайдами
    spaceBetween: 32,

    // Количество пролистываемых слайдов за один раз
    slidesPerGroup: 1,


    // Активный слайд по центру (чтобы эффект был явным,поставить slidesPerGroup: 1)
    centeredSlides: true,

    // Номер стартового слайда (Активный слайд по центру нужно отключить)
    initialSlide: 1,


    // Мультирядность (количество рядов слайдов, нужно отключить автовысоту: false + добавить css)
    // slidesPerColumn: 2,

    // Бесконечный слайдер (скролл нужно отключать. если используем автоматическое количество слайдев д/показа (slidesPerView: auto), тогда нужно добавить количество дублируемых слайдов )
    loop: true,


    // количество дублирующих слайдов
    loopedSlides: 4,


    // свободный режим (перетаскиваем слайды без фиксирования)
    // freeMode: false,


    // Автопрокрутка с заданным временем 
    // autoplay: {
    // пауза между прокруткой
    // delay: 2000,
    // Закончить на последнем слайде
    // stopOnLastSlide: false,
    // Отключить после ручного переключения
    // disableOnInteraction: false,
    // },

    // Скорость переключения слайда
    speed: 800,

    // Вертикальный слайдер (для корректности надо установить css высоту слайдера)
    // direction: 'vertical',
    direction: 'horizontal',

    // Эффекты переключения слайдов (подходит при выводе одного слайде на страницу)
    // Листание (по умолчанию)
    effect: 'slide',

    // Смена прозрачности
    // effect: 'fade',
    // Дополнение к fade
    // fadeEffect: {
    // параллельная
    // смена прозрачности
    // crossFade: true,
    // },

    // Эффекты переключения слайдов
    // Переворот
    // effect: 'flip',









    // Брейк поинты (адаптив)
    // ширина экрана

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        481: {
            slidesPerView: 2,

        },
        // 992: {
        //     slidesPerView: 2
        // },
    },

    // Брейк поинты (адаптив)
    // соотношение сторон

    // breakpoints: {
    // '@0.75': {
    //     slidesPerView: 1,
    // },
    // '@1.00': {
    //     slidesPerView: 2,
    // },
    //     '@1.50': {
    //         slidesPerView: 3,
    //     },
    // },


});

