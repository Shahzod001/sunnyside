let closeBtn = document.querySelector(".site-header__btn")
let closeInner = document.querySelector(".site-header__inner")
// let closeOpacity = document.querySelector(".opacity")
let closeSiteNav = document.querySelector(".sitenav")


closeBtn.addEventListener("click", function () {
    closeInner.classList.toggle("db");
    closeBtn.classList.toggle("opacity");
    
})
