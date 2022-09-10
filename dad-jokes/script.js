const joke = document.getElementById('joke');
const jokeBtn = document.querySelector('.joke-btn');

//fetch the first joke
fetchJoke();

jokeBtn.addEventListener('click', fetchJoke);

function fetchJoke () {
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
    joke.textContent = data.joke;
}