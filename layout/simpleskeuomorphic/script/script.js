// This is just code for the back to top button no need to touch

const backToTopBtn = document.getElementById("backToTop");
window.onscroll = function () {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};