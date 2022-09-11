const keycodes = document.getElementById('keycodes');

window.addEventListener('keydown', ((event) => {
    keycodes.innerHTML = `<div class="key-box"><span class="key-name">event.key</span><span class="key">${event.key}</span></div>
    <div class="key-box"><span class="key-name">event.keyCode</span><span class="key">${event.keyCode}</span></div>
    <div class="key-box"><span class="key-name">event.code</span><span class="key">${event.code}</span></div>`
}))