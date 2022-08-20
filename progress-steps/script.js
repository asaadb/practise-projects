const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const steps = document.querySelectorAll('.step-container').length

// This keeps track of the steps taken
let currentStep = 1;

nextBtn.addEventListener('click', function () {
    currentStep++;
    const progress = document.querySelector(`.step-container:nth-of-type(${currentStep})`)
    progress.classList.add('active')
    if (currentStep > 1) {
        enableBtn(prevBtn);
    }
    if (currentStep === steps){
        disableBtn(this);
    }
})

prevBtn.addEventListener('click', function () {
    currentStep--;
    const progress = document.querySelector(`.step-container:nth-of-type(${currentStep + 1})`)
    progress.classList.remove('active')
    if ( currentStep < steps) {
        enableBtn(nextBtn);
    }
    if (currentStep === 1){
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