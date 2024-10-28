
let currentIndex = 0;

const slides = document.querySelectorAll('.carousel-slide .carousel-item');
const totalSlides = slides.length;

document.querySelector('.carousel-next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

function updateCarousel() {
    const carouselSlide = document.querySelector('.carousel-slide');
    const offset = -currentIndex * 100;
    carouselSlide.style.transform = `translateX(${offset}%)`;
}



document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    // Here, you can add code to actually send the message using an API if needed
    this.reset(); // Reset the form fields
});
