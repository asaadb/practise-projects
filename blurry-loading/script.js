const loading = document.querySelector(".loading");
const imgContainer = document.querySelector(".img-container");

loadingEffect();

function loadingEffect () {
    let num = 0;
    let opacity = 1;
    let blur = 1;
    let intervalId = setInterval(() => {
        loading.textContent = `${num}%`;
        loading.style.opacity = `${opacity}`;
        imgContainer.style.filter = `blur(${blur}rem)`;
        num++;
        opacity -= 0.01;
        blur -= 0.01;
        console.log(opacity)
        console.log(num)
        if (num > 100) {
            clearInterval(intervalId);
        }
    }, 30)
}