const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const validLength = Number(event.currentTarget.dataset.length);
  const inputValueLength = event.currentTarget.value.length;
  const isContainsValid = event.currentTarget.classList.contains('valid');
  const isContainsInvalid = event.currentTarget.classList.contains('invalid');

  console.log('validLength :>> ', validLength);

  if (inputValueLength === validLength) {
    if (isContainsInvalid) {
      event.currentTarget.classList.remove('invalid');
    }

    event.currentTarget.classList.add('valid');

    return;
  }

  if (isContainsValid) {
    event.currentTarget.classList.remove('valid');
  }

  event.currentTarget.classList.add('invalid');
}
