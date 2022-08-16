const nextBtn = document.querySelector('#next');

// This keeps track of the steps taken
let steps = 1;

nextBtn.addEventListener('click', function () {
    steps++;
    const progress = document.querySelector(`.step-container:nth-of-type(${steps
})`)
    progress.classList.add('active')
    if (steps === 4){
        this.disabled = true;
        this.classList.add('disabled')
    }
})