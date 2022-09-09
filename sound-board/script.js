const buttons = document.querySelectorAll('button');

const sounds = {
    applause: new Audio("./sounds/applause.mp3") ,
    boo: new Audio("./sounds/boo.mp3"),
    gasp: new Audio("./sounds/gasp.mp3"),
    tada: new Audio("./sounds/tada.mp3"),
    victory: new Audio("./sounds/victory.mp3"),
    wrong: new Audio("./sounds/wrong.mp3")
}

buttons.forEach(button => {
    button.addEventListener('click', function () {
        sounds[this.id].play();
    })
})

