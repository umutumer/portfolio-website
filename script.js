//up
document.addEventListener("DOMContentLoaded", function() {
    const upBtn = document.getElementsByClassName("up")[0];

    window.addEventListener("scroll", function () {
        const distance = window.scrollY;
        if (distance > 300) {
            upBtn.classList.add("show");
        } else {
            upBtn.classList.remove("show");
        }
    });
});
