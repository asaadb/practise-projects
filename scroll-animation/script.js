const scroll = document.querySelector('body');
const contents = document.querySelectorAll('.content');

const options = {
    rootMargin:"0px 150% 0px 150%",
    threshold: 0.5
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting && entry.boundingClientRect.top > 200) {
            entry.target.classList.remove("appear");
            return;
        }
        entry.target.classList.add("appear");
    })
}, options)

contents.forEach(content => {
    observer.observe(content);
})