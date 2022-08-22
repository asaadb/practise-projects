const btn = document.getElementById('btn');
const search = document.querySelector('.search-container');

btn.addEventListener('click', () => {
    search.classList.toggle('active');
})