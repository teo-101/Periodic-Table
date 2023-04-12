const form = document.querySelector('form');

form.addEventListener('click', (event) => {
  const typeOfElem = document.querySelector('input[name="typeOfElem"]:checked');
  const selectedType = typeOfElem ? typeOfElem.value : '';

  const elements = document.getElementsByClassName('cell');

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].classList.contains(selectedType)) {
      elements[i].style.opacity = '1';

      if (elements[i].classList.contains('Radioactive') && selectedType === 'Radioactive') {
        elements[i].style.backgroundColor = '#28df28';
      } else {
        elements[i].style.backgroundColor = '';
      }
    } else {
      elements[i].style.opacity = '0.3';
      elements[i].style.backgroundColor = '';
    }
  }
});