$ = document.querySelector.bind(document);
window.onload = () => {
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

    }, 5000);
}