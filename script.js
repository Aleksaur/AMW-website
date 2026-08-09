function scrollToForm() {
    var bookingSection = document.getElementById("booking");
    if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth" });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // === FORM HANDLING ===
    var form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Спасибо! Ваша заявка отправлена. AMW скоро свяжется с вами.");
            form.reset();
        });
    }

    // === AMW SLIDESHOW FUNCTIONALITY ===
    var slides = document.querySelectorAll(".slide");
    var dots = document.querySelectorAll(".dot");
    var prevBtn = document.querySelector(".slide-arrow.prev");
    var nextBtn = document.querySelector(".slide-arrow.next");
    var currentIndex = 0;
    var slideInterval;

    if (slides.length > 0) {
        function showSlide(index) {
            // Handle index looping boundaries
            if (index >= slides.length) currentIndex = 0;
            else if (index < 0) currentIndex = slides.length - 1;
            else currentIndex = index;

            // Toggle active classes on slides
            slides.forEach(function(slide) {
                slide.classList.remove("active");
            });
            slides[currentIndex].classList.add("active");

            // Toggle active classes on dots if they exist
            if (dots.length > 0) {
                dots.forEach(function(dot) {
                    dot.classList.remove("active");
                });
                dots[currentIndex].classList.add("active");
            }
        }

        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        function prevSlide() {
            showSlide(currentIndex - 1);
        }

        // Auto-advance loop timer (5 seconds)
        function startAutoPlay() {
            stopAutoPlay();
            slideInterval = setInterval(nextSlide, 5000);
        }

        function stopAutoPlay() {
            clearInterval(slideInterval);
        }

        // Arrow click listeners
        if (nextBtn) {
            nextBtn.addEventListener("click", function() {
                nextSlide();
                startAutoPlay(); // Reset timer on manual interaction
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener("click", function() {
                prevSlide();
                startAutoPlay(); // Reset timer on manual interaction
            });
        }

        // Dot click navigation mapping
        dots.forEach(function(dot, index) {
            dot.addEventListener("click", function() {
                showSlide(index);
                startAutoPlay(); // Reset timer on manual interaction
            });
        });

        // Initialize active states and kickstart automated timing
        showSlide(currentIndex);
        startAutoPlay();
    }
});
