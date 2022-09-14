const btns = document.querySelectorAll('.btn');

btns.forEach (btn => {
    btn.addEventListener('click', function () {
        this.parentElement.classList.toggle('open');
    })
})
