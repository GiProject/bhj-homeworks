let currentSlide = 0,
    sliderItems = document.querySelectorAll('.slider__item'),
    slideCount = sliderItems.length;
document.querySelector('.slider__arrow.slider__arrow_prev').addEventListener('click', (e) => {
    previosSlide();
})
document.querySelector('.slider__arrow.slider__arrow_next').addEventListener('click', (e) => {
    nextSlide();
})

function nextSlide()
{
    slideMoveTo(++currentSlide > slideCount - 1 ? 1 : currentSlide);
}

function previosSlide()
{
    slideMoveTo(--currentSlide < 1 ? slideCount - 1 : currentSlide);
}

function slideMoveTo(slideIndex)
{
    sliderItems.forEach((item) => {
        item.classList.remove('slider__item_active');
    });
    sliderItems[slideIndex].classList.add('slider__item_active');
    currentSlide = slideIndex;
}