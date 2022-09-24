const navBtn = document.getElementById('nav-btn');
const nav = document.querySelector('.nav')

navBtn.addEventListener('click', function (){
  nav.classList.toggle('close');
})