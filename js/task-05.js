const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  const inputValue = event.currentTarget.value;
  const inputValueLength = inputValue.length;

  inputValueLength === 0
    ? (outputRef.textContent = 'незнакомец')
    : (outputRef.textContent = inputValue);
}
