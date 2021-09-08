const header = document.querySelector('.header');
const headerTop = document.querySelector('.h-top');
const headerMiddle = document.querySelector('.h-middle');
const headerBottom = document.querySelector('.h-bottom');
const headerBottomHeight = headerBottom.offsetHeight;
const headerCoords = getCoords(headerBottom).top;


document.addEventListener("scroll", () => {
    const scrollYPoint = window.scrollY;

    if (scrollYPoint >= headerCoords) {
        header.classList.add('_fixed');
        if (window.innerWidth >= 992) {
            headerMiddle.style.marginBottom = headerBottomHeight + 'px';
        } else {
            headerTop.style.marginBottom = headerBottomHeight + 'px';
        }
    } else {
        header.classList.remove('_fixed');
        headerMiddle.style.marginBottom = 0;
        headerTop.style.marginBottom = 0;
    }
})


const burgerMenu = document.querySelector('.burger');

if (getComputedStyle(burgerMenu).display != 'none') {
    const burgerIcons = document.querySelectorAll('.burger, .menu__close-icon');
    const burgerList = document.querySelector('.menu__list')
    
    for (let icon of burgerIcons) {
        icon.addEventListener("click", () => {
            burgerList.classList.toggle("_active");
        })
    }
    
    
    if (window.jQuery) {
        $('.menu__sub-list').hide();
    
        $(document).ready(function() {
            $('.menu__mobile-arrow').click(function(e) {
                $(this).toggleClass('_active').next().slideToggle(300);
    
                $(this).prev().toggleClass('_active');
            })
        })
    }
}