const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');

// This keeps track of the steps taken
let steps = 1;

nextBtn.addEventListener('click', function () {
    steps++;
    const progress = document.querySelector(`.step-container:nth-of-type(${steps})`)
    progress.classList.add('active')
    if(steps > 1) {
       prevBtn.disabled = false;
       prevBtn.classList.remove('disabled')
     }
    if (steps === 4){
        this.disabled = true;
        this.classList.add('disabled')
    }
})
prevBtn.addEventListener('click', function () {
    steps--;
    const progress = document.querySelector(`.step-container:nth-of-type(${steps + 1})`)
    progress.classList.remove('active')
    if(steps < 4) {
        nextBtn.disabled = false;
        nextBtn.classList.remove('disabled')
    }
    if (steps === 1){
        this.disabled = true;
        this.classList.add('disabled')
    }
});