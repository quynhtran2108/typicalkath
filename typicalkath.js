let currentSlide = 0;
const images = document.querySelectorAll('.carousel-image');

function showSlide(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % images.length;
  showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
  setInterval(nextSlide, 3000); // Change slide every 3 seconds
});
