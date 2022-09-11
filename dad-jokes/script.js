const joke = document.getElementById('joke');
const jokeBtn = document.querySelector('.joke-btn');
const loader = document.querySelector('.loader');

// fetch the first joke
fetchJoke();

jokeBtn.addEventListener('click', fetchJoke);

function fetchJoke () {
    loader.style.display = 'block';
    joke.textContent = '';
    const config = { headers: { Accept:"application/json" } }
    fetch("https://icanhazdadjoke.com/", config)
    .then(res => {
            return res.json();
    })
    .then ((data) => {
        renderJokes(data);
    })
    .catch ((err) => {
        console.log("ERROR!!", err);
    })
}

function renderJokes(data) {
    loader.style.display = 'none'
    joke.textContent = data.joke;
}