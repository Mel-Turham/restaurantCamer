// close nav
const nav = document.querySelector('.js-navigation');
console.log(nav);
const sombre = document.querySelector('.js-sombre');

const buttonCloseNav = document.querySelector('.js-close-nav');

const closeNav = () => {
	nav.classList.remove('show');
	sombre.classList.remove('show');
};
buttonCloseNav.addEventListener('click', closeNav);

// open nav

const buttonOpenNav = document.querySelector('.js-open-nav');

const openNav = () => {
	nav.classList.add('show');
	sombre.classList.add('show');
};

buttonOpenNav.addEventListener('click', openNav);

let total = document.querySelector('.setTotal');

const inputNumber = document.getElementById('quantiter');
let priceFinal = document.querySelector('.final-price');
const convertTotal = Number(total.textContent);

inputNumber.addEventListener('input', () => {
	if (inputNumber.value <= 0) {
		alert('La quantiter ne doit pas etre negatif ou inferieur a 0');
	} else {
		total.textContent = convertTotal * inputNumber.value;
		priceFinal.textContent = total.textContent;
	}
});

const buttonPay = document.querySelector('.js-button-pay');
const overley = document.querySelector('.overley');
const closeModalForm = document.querySelector('.js-close-modal-form');

buttonPay.addEventListener('click', () => {
	overley.classList.add('display');
	boxModal.classList.toggle('active');
});

closeModalForm.addEventListener('click', () => {
	overley.classList.remove('display');
});

const fieldInputs = document.querySelector('.field-inputs');
const inputs = fieldInputs.querySelectorAll('input');
const selectOption = fieldInputs.querySelector('select');

const buttonSubmit = document.querySelector('.js-button-submit');

console.log(buttonSubmit);

inputs.forEach((input) => {
	if (input.value === '') {
		buttonSubmit.setAttribute('disabled', true);
	} else {
		buttonSubmit.removeAttribute('disabled');
	}
});

selectOption.addEventListener('change', () => {
	if (selectOption.value === '') {
		buttonSubmit.setAttribute('disabled', true);
	} else {
		buttonSubmit.removeAttribute('disabled');
	}
});

const formPay = document.getElementById('form-payemant');

const boxModal = document.querySelector('.modal-form');

const messageBox = document.querySelector('.remerciment');

formPay.addEventListener('submit', (event) => {
	event.preventDefault();
	boxModal.style.display = 'none';
	messageBox.style.display = 'flex';

	const closeAll = document.querySelector('.js-close-all-modal');

	closeAll.addEventListener('click', () => {
		messageBox.style.display = 'none';
		overley.classList.remove('display');
	});
});
