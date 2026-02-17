// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Hero Slider Logic
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Change slide every 5 seconds
if (slides.length > 0) {
    setInterval(nextSlide, 5000);
}

// Sticky Navbar Effect (Optional enhancement)
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
    } else {
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    }
});
