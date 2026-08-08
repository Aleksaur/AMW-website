function scrollToForm() {
    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("booking-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Спасибо! Ваша заявка отправлена. AMW скоро свяжется с вами.");
    this.reset();
});
