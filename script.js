const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevents the form from submitting and refreshing the page

    const typeOfElem = document.querySelector('input[name="typeOfElem"]:checked');
    const selectedType = typeOfElem ? typeOfElem.nextElementSibling.innerHTML : '';

    const elements = document.getElementsByClassName('cell');

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains(selectedType)) {
            elements[i].style.display = 'block';
        } else {
            elements[i].style.display = 'none';
        }
    }
});