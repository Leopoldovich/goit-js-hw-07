const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

const makeIngridientsList = ingredients => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
    return itemEl
  })
}

const listEls = makeIngridientsList(ingredients);

ingredientsEl.append(...listEls);

console.log(ingredientsEl);