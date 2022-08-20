const open = document.querySelector(".open");
const close = document.querySelector(".close");
const article = document.querySelector(".article-container")
const menuIcons = document.querySelector(".menuIcons-container");

open.addEventListener("click", function () {
    this.classList.remove('active');
    close.classList.add('active');
    article.classList.add('active');
    menuIcons.classList.add("active");
    
})
close.addEventListener("click", function () {
    this.classList.remove('active');
    open.classList.add('active');
    article.classList.remove('active');
    menuIcons.classList.remove("active");
})