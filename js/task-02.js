const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients');

const makerIngredientsItemList = ingredient => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = ingredient;

  return ingredientsItem;
};

const ingredientsItems = ingredients.map(makerIngredientsItemList);

ingredientsListRef.append(...ingredientsItems);
