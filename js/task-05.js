const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

const onInputChange = (event) => {
    if (event.currentTarget.value === '') {
        return spanEl.textContent = 'незнакомец';
    } 
    spanEl.textContent = event.currentTarget.value;
    
    
};

inputEl.addEventListener('input', onInputChange);