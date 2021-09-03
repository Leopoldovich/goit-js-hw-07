const categoriesEl = document.querySelector('#categories');
console.log(`В списке ${categoriesEl.children.length} категории.`);



const itemsEl = document.querySelectorAll('li.item');
itemsEl.forEach(item => {
    console.log(`Категория: ${item.firstElementChild.textContent}, Количество элементов: ${item.querySelectorAll('li').length}`);
});