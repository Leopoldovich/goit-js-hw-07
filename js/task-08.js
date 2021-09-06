const inputNumberRef = document.querySelector('#controls [type="number"]');
const btnRenderRef = document.querySelector('#controls [data-action="render"]');
const btnDestroyRef = document.querySelector('#controls [data-action="destroy"]');
const boxesRef = document.querySelector('#boxes')

 const amount = inputNumberRef.value;

const randomRgbColor = () => { 
const r = Math.round(Math.random() * (255 - 1) + 1);
const g = Math.round(Math.random() * (255 - 1) + 1);
const b = Math.round(Math.random() * (255 - 1) + 1);
    return `rgb(${r},${g},${b})`
}

const PRIMARY_BOX_SIZE = 30;
const INCREASE_STEP = 10;

btnRenderRef.addEventListener('click', ()=>createBoxes(+inputNumberRef.value))
btnDestroyRef.addEventListener('click', destroyBoxes)

function createBoxes(amount) { 
    const boxes = [...new Array(amount)]
    const arrayBoxes = boxes.map((_, i) => {
    return    `<div style="width: ${PRIMARY_BOX_SIZE + INCREASE_STEP * i}px; height:${PRIMARY_BOX_SIZE + INCREASE_STEP * i}px; background-color: ${randomRgbColor()}"></div>`
    }).join('')

    boxesRef.innerHTML = arrayBoxes
    // boxesRef.insertAdjacentHTML('beforeend', arrayBoxes)
    }

function destroyBoxes() {
    boxesRef.innerHTML = ''
    inputNumberRef.value = ''
}