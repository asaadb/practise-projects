const loading = document.querySelector(".loading");

function loadingEffect () {
    let num = 0;
    let intervalId = setInterval(() => {
        loading.textContent = `${num}%`;
        num++;
        if (num > 100) {
            clearInterval(intervalId)
        }
    }, 28)
}

loadingEffect();