const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');

// This keeps track of the steps taken
let steps = 1;
const maxSteps = 4;

nextBtn.addEventListener('click', function () {
    steps++;
    const progress = document.querySelector(`.step-container:nth-of-type(${steps})`)
    progress.classList.add('active')
    if (steps > 1) {
        enableBtn(prevBtn);
    }
    if (steps === maxSteps){
        disableBtn(this);
    }
})

prevBtn.addEventListener('click', function () {
    steps--;
    const progress = document.querySelector(`.step-container:nth-of-type(${steps + 1})`)
    progress.classList.remove('active')
    if ( steps < maxSteps) {
        enableBtn(nextBtn);
    }
    if (steps === 1){
        disableBtn(this);
    }
})

function disableBtn(btn) {
    btn.disabled = true;
    btn.classList.add('disabled');
}

function enableBtn (btn) {
    btn.disabled = false;
    btn.classList.remove('disabled');
}