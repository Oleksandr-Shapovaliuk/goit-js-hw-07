const refs = {
  input: document.querySelector('#controls input'),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  boxesWrapper: document.querySelector('#boxes'),
};

refs.renderBtn.addEventListener('click', onRenderClick);
refs.destroyBtn.addEventListener('click', onDestroyClick);

function onRenderClick() {
  const inputValue = Number(refs.input.value);

  createBoxes(inputValue);
}

function onDestroyClick() {
  destroyBoxes();
}

function createBoxes(amount) {
  const boxes = [];
  let boxSize = 30;

  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    const randomRgb = [
      Math.round(Math.random() * 255),
      Math.round(Math.random() * 255),
      Math.round(Math.random() * 255),
    ];

    box.style.backgroundColor = `rgb(${randomRgb[0]}, ${randomRgb[1]}, ${randomRgb[2]})`;

    boxes.push(box);

    boxSize += 10;
  }

  refs.boxesWrapper.append(...boxes);
}

function destroyBoxes() {
  refs.boxesWrapper.innerHTML = '';
}
