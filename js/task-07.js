const fontSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

fontSizeControlRef.addEventListener('input', onRangeChange);

function onRangeChange(event) {
  const rangeValue = Number(event.currentTarget.value);

  textRef.style.fontSize = `${rangeValue}px`;
}
