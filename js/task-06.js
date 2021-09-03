const inputEl = document.querySelector('#validation-input');
const accept = 'valid';
const denied = 'invalid';
const validClass = (element, addClass, removeClass) => {
    element.classList.add(addClass);
    element.classList.remove(removeClass);
}

const checkTextLength = (event) => {
    if (event.target.value.length === +inputEl.dataset.length) {
        validClass(inputEl, accept, denied);
    } else  {
        validClass(inputEl, denied, accept);
    };
}

inputEl.addEventListener('blur', checkTextLength);