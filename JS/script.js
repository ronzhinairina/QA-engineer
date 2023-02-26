let currentSlideIndex = 1;
showSlides(currentSlideIndex);

function plusSlides(nextSlideIndex) {
    showSlides(currentSlideIndex += nextSlideIndex);
}

function currentSlide(nextSlideIndex) {
    showSlides(currentSlideIndex = nextSlideIndex)
}

function showSlides(nextSlideIndex) {
    const slides = document.getElementsByClassName('carousel');
    const dots = document.getElementsByClassName('carousel__dot');
    
    if (nextSlideIndex > slides.length) {
        currentSlideIndex = 1;
    }

    if (nextSlideIndex < 1) {
        currentSlideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('carousel__active')
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('carousel__dot-active');
    }

    slides[currentSlideIndex - 1].classList.add('carousel__active')
    dots[currentSlideIndex - 1].classList.add('carousel__dot-active');
}