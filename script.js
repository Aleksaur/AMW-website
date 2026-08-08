function scrollToForm() {
    var bookingSection = document.getElementById("booking");
    if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth" });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Спасибо! Ваша заявка отправлена. AMW скоро свяжется с вами.");
            form.reset();
        });
    }
});
