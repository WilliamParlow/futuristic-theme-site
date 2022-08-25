const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
window.onload = () => {
    $('#footer-year').innerHTML = new Date().getFullYear();

    setInterval(() => {
        const active = $('.carousel__item.active');
        const next = $('.carousel__item.next');
        const prev = $('.carousel__item.prev');

        prev.classList.remove('prev');

        active.classList.remove('active');
        active.classList.add('prev');

        next.classList.remove('next');
        next.classList.add('active');

        let newNext = next.nextElementSibling;
        if (newNext === null) {
            newNext = $('.carousel__container .carousel__item:nth-child(1)');
            newNext.classList.add('next');
        } else {
            newNext.classList.add('next');
        }

    }, 4200);

    $('.navbar__menu').onclick = (event) => {
        const $target = $(event.target.parentElement.dataset.target);
        const $menu = event.target.parentElement;

        $target.classList.add('active');
        $menu.classList.add('active');
        $$('.navbar__menu > div').forEach(e => {
            e.classList.add('active');
        });

        $('html').style.overflowY='hidden';
    }

    $('.menu__close').onclick = (event) => {
        $('.menu__mobile').classList.remove('active');
        $('.navbar__menu').classList.remove('active');
        
        $$('.navbar__menu > div').forEach(e => {
            e.classList.remove('active');
        });

        $('html').style.overflowY='auto';
    }
}