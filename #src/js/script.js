@@include('slick.min.js')

@@include('header.js')

@@include('cart.js')


function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}


if (window.jQuery) {
    $(document).ready(function () {
        $('.main-slider').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            centerMode: true,
            variableWidth: true,

            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        dots: false,
                        autoplay: false,
                        infinite: false,
                    }
                },
            ]
        });

        $('.catalog-slider__content').slick({
            // centerMode: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 10000,
            speed: 900,
            // draggable: false,

            responsive: [
                {
                    breakpoint: 993,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        autoplay: false,
                    }
                },
                {
                    breakpoint: 577,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        autoplay: false,
                    }
                },
            ]
        });

        $('.product-slider__slider-1').slick({
            arrows: true,
            infinite: false,
            asNavFor: ".product-slider__slider-2",
            draggable: false,
            // rows: 2,
            vertical: true,
            slidesToShow: 4,
            focusOnSelect: true,
            // autoplay: true,
            // autoplaySpeed: 5000,
            // centerMode: true,
            // variableWidth: true,

            // responsive: [
            //     {
            //         breakpoint: 769,
            //         settings: {
            //             dots: false,
            //             autoplay: false,
            //             infinite: false,
            //       }
            //     },
            // ]
        });

        $('.product-slider__slider-2').slick({
            arrows: false,
            infinite: false,
            fade: true,
            asNavFor: ".product-slider__slider-1",
            // autoplay: true,
            // autoplaySpeed: 5000,
            // centerMode: true,
            // variableWidth: true,

            responsive: [
                {
                    breakpoint: 993,
                    settings: {
                        arrows: true,
                        // centerMode: true,
                    }
                },
            ]
        });
    })
}

// Корзина
// --------------------------------------------------------------------

// --------------------------------------------------------------------


if (window.jQuery) {
    $(document).ready(function () {
        $('.filters__spoiler-btn').click(function (e) {
            $(this).toggleClass('_active').next().slideToggle(300);

            $(this).prev().toggleClass('_active');
        })
    })
}


const filtersBtn = document.querySelector('.catalog__filters-btn');

if (filtersBtn) {
    const filters = document.querySelector('.catalog__filters');

    filtersBtn.addEventListener('click', () => {
        filters.classList.toggle('_active');
    })

    const filtersCloseBtn = document.querySelector('.filters__close-icon');

    filtersCloseBtn.addEventListener('click', () => {
        filters.classList.toggle('_active');
    })
}


const filterResetBtn = document.querySelector('.filters__reset-btn');

if (filterResetBtn) {
    const checkboxes = document.querySelectorAll('.checkbox__input');

    filterResetBtn.addEventListener("click", (e) => {
        e.preventDefault();
        for (let checkbox of checkboxes) {
            if (checkbox.checked == true) {
                checkbox.checked = false;
            }
        }
    })
}