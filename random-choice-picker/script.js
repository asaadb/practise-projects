const textInput = document.getElementById('choices-input');
const choicesOutput = document.getElementById('choices-output')

textInput.addEventListener('keyup', function(event) {
    createChoices(event.target.value);
})

function createChoices(input) {
    let choices = input.split(',').filter(val => val.trim() !== '').map(val => val.trim());
    choicesOutput.innerHTML = '';
    choices.forEach(choice => {
        let element = document.createElement('span');
        element.classList.add('choice');
        element.textContent = choice;
        choicesOutput.appendChild(element);
   });
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