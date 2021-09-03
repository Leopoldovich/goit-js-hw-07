const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

const changeSize = event => {
    spanEl.style.fontSize = `${event.target.value * 2}%`;
}

inputEl.addEventListener('input', changeSize);