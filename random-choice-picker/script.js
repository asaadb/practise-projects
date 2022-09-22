const textInput = document.getElementById('choices-input');
const choicesOutput = document.getElementById('choices-output')

textInput.addEventListener('keyup', function(event) {
    let choicesList = createChoices(event.target.value);
    if (event.key === 'Enter' && choicesList.length > 0) {
        console.log(choicesList)
        event.target.value = '';
        randomPick(choicesList);
    }
    else {

    }
})

function randomPick (list) {
    let removeId;
    let intrevalId = setInterval(() => {
        let index = Math.floor(Math.random() * list.length);
        choicesOutput.children[index].classList.add('selected');
        removeId =  setTimeout (() => {
            choicesOutput.children[index].classList.remove('selected');
        }, 100);
    }, 200)

    setTimeout(() => {
        clearInterval(intrevalId);
        let choosen = choicesOutput.children[Math.floor(Math.random() * list.length)]
        clearTimeout(removeId);
        choosen.classList.add('selected')
    }, 4000)
}

function createChoices(input) {
    let choices = input.split(',').filter(val => val.trim() !== '').map(val => val.trim());
    choicesOutput.innerHTML = '';
    choices.forEach(choice => {
        let element = document.createElement('span');
        element.classList.add('choice');
        element.textContent = choice;
        choicesOutput.appendChild(element);
   });
   return choices;
}


// let choice = '';
// let newChoice = true;

// textInput.addEventListener('keyup', function(event) {
//     if (event.key === ',') {
//         choice = '';
//         newChoice = true;
//     }
//     else if (choicesOutput.lastChild && choicesOutput.lastChild.innerText === '') {
//             choicesOutput.removeChild(choicesOutput.lastChild);
//     }
//     else {
//         if (newChoice) {
//             choicesOutput.innerHTML += `<span class="choice"></span>`
//             newChoice = false;
//         }
//         let len = event.target.value.split(',').filter(item => item != '').length
//         choice = event.target.value.split(',').filter(item => item != '')[len-1];
//         choicesOutput.lastChild.innerText = choice;
//     }
// })