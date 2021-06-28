const categoriesListRef = document.querySelector('#categories');

const counterQuantityChildren = ref => {
  return ref.children.length;
};

const quantityChildrenCategoriesList =
  counterQuantityChildren(categoriesListRef);

console.log(quantityChildrenCategoriesList);

const itemsCategoriesListRefs = categoriesListRef.querySelectorAll('.item');

const outputItemLengthAndName = ref => {
  const itemTitleRef = ref.querySelector('h2');
  const itemListRef = ref.querySelector('ul');

  const contentItemTitle = itemTitleRef.textContent;
  const itemListLength = counterQuantityChildren(itemListRef);

  console.log(
    `Категория: ${contentItemTitle} Количество элементов: ${itemListLength}`
  );
};

itemsCategoriesListRefs.forEach(outputItemLengthAndName);
