const open = document.querySelector(".open");
const close = document.querySelector(".close");

open.addEventListener("click", function () {
    this.classList.remove('active');
    close.classList.add('active');
})
close.addEventListener("click", function () {
    this.classList.remove('active');
    open.classList.add('active');
})