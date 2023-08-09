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
            upBtn.classList.add("showup");
        } else {
            upBtn.classList.remove("showup");
        }
    });
});

/////////////////////////////

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el)=> observer.observe(el));
