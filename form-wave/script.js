const email = document.querySelector('.email-label');
const password = document.querySelector('.password-label');

const emailLetters = email.textContent;
const passwordLetters = password.textContent;

email.innerHTML = "";
password.innerHTML = "";
for (let i = 0; i < emailLetters.length; i++) {
    email.innerHTML += `<span style="transition-delay: ${i * 40}ms">${emailLetters[i]}</span>`;
}
for (let i = 0; i < passwordLetters.length; i++) {
    password.innerHTML += `<span style="transition-delay: ${i * 40}ms">${passwordLetters[i]}</span>`;
}