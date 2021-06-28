const refs = {
  counter: document.querySelector('#counter'),
  counterValue: document.querySelector('#value'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
};

const onIncrement = () => {
  const counterValue = Number(refs.counterValue.textContent);

  refs.counterValue.textContent = counterValue + 1;
};

const onDecrement = () => {
  const counterValue = Number(refs.counterValue.textContent);

  refs.counterValue.textContent = counterValue - 1;
};

refs.incrementBtn.addEventListener('click', onIncrement);
refs.decrementBtn.addEventListener('click', onDecrement);
