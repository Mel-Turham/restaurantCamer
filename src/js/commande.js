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

const convertTotal = Number(total.textContent);

const inputNumber = document.getElementById('quantiter');
let priceFinal = document.querySelector('.final-price');

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
});

closeModalForm.addEventListener('click', () => {
	overley.classList.remove('display');
});


const formPay = document.getElementById('form-payemant');

formPay.addEventListener('submit', (event)=>{
  event.preventDefault();
 
});