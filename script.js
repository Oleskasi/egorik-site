let slideIndex = 0;

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex].style.display = "block";  
}

// Функции для переключения слайдов
function plusSlides(n) {
    showSlides(slideIndex + n);
}

// Инициализация слайдера
showSlides(slideIndex);
