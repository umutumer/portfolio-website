//hamburger menu
const hamburger = document.querySelector(".hamburger");
const headerList = document.querySelector(".header-list");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    headerList.classList.toggle("active");
});

document.querySelectorAll(".header-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
   headerList.classList.remove("active");
}));
    

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
