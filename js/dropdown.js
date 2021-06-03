const listAddress = document.querySelector('.wrapper-dropdown');

listAddress.addEventListener('click', drop);

function drop() {
    listAddress.classList.toggle('active');
}

const listHidden = document.querySelector(".map-section");

listHidden.addEventListener('click',
    () => listAddress.classList.remove('active'));