document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    
    slides.forEach((slide) => {
      slide.addEventListener("click", (event) => {
        const link = event.currentTarget.querySelector("a").href;
        window.location.href = link;
      });
    });
    
    let currentIndex = 0;
    
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add("active");
        } else {
          slide.classList.remove("active");
        }
      });
    }
    
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
    
    setInterval(nextSlide, 2000); // Cambia de slide cada 3 segundos
  });