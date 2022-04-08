window.addEventListener("scroll", function () {
    var random = this.document.querySelector(".random");
    random.classList.toggle("sticky", window.scrollY > 0)
});

