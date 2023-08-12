// stars -----------------------------------------------------

const ratings = document.querySelectorAll('.rating');

if (ratings.length > 0) {
    initRatings();
}

// основная функция (basic function)
function initRatings() {

    let ratingActive, ratingValue;
    // 'бегаем' по всем гейтингам по старнице 
    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRating(rating);
    }
    // инициализируем конкретный рейтинг
    function initRating(rating) {
        initRatingVars(rating);

        setRatingActiveWhidth();

        if (rating.classList.contains('rating_set')) {
            setRating(rating);
        }
    }

    // инициализация переменных 
    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating__active');
        ratingValue = rating.querySelector('.rating__value');

    }
    // изменяем ширину активных звезд 
    function setRatingActiveWhidth(index = ratingValue.innerHTML) {
        const ratingActiveWhidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWhidth}%`;
    }

    // создаем возможность указывать оценку
    function setRating(rating) {
        const ratingItems = rating.querySelectorAll('.rating__item');
        for (let index = 0; index < ratingItems.length; index++) {
            const ratingItem = ratingItems[index];
            ratingItem.addEventListener('mouseenter', function (e) {
                // обноевление переменных 
                initRatingVars(rating);
                // Обновление активных звезд
                setRatingActiveWhidth(ratingItem.value);
            });

            ratingItem.addEventListener('mouseleave', function (e) {
                // Обновление активных звезд
                setRatingActiveWhidth();
            });

            ratingItem.addEventListener('click', function (e) {
                // обновление переменных
                initRatingVars(rating);

                if (rating.dataset.ajax) {
                    // отправить на сервер 
                    setRatingValue(ratingItem.value, rating);
                } else {
                    // отобразить указанную оценку
                    ratingValue.innerHTML = index + 1;
                    setRatingActiveWhidth();

                }
            })
        }
    }
}