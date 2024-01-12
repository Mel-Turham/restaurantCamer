// datas
import { data } from './data.js';


// load image fast

window.addEventListener('DOMContentLoaded', () => {
	const allImages = document.querySelectorAll('img');
	allImages.forEach((image) => {
		image.addEventListener('load', () => {
			image.setAttribute('loading', 'lazy');
		});
	});
});

const allLinks = document.querySelectorAll('.js-item-link');

const updateLink = () => {
	allLinks.forEach((link) => {
		link.addEventListener('click', (e) => {
			allLinks.forEach((lin) => {
				lin.classList.remove('active');
			});
			link.classList.add('active');
		});
	});
};

updateLink();

// close nav

const nav = document.querySelector('.js-navigation ');
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

let plats = document.querySelector('.js-plats-populaires');
let plats2 = document.querySelector('.js-menu-special');

for (let i = 0; i < data.length; i++) {
	if (data[i].id === 7) {
		break;
	}
	plats.innerHTML += `
   <div class="cart" data-id =${data[i].id} >
    <figure class="fig-image">
  	 <img src=${data[i].image} alt=${data[i].alt}>
    </figure>
    <div class="cart-body">
      <div class="ratings">
        <span class="icon">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"/></svg> 
					
					</span>
       <span class="icon">
			 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"/></svg>
        </span>
      <span class="icon">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"/></svg>
        </span>
        <span class="icon">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"/></svg>
        </span>
				<span class="icon">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.31a16,16,0,0,0-9.11,28.07L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-8.27-2.32V32.09h0l23.2,55.28a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"/></svg>
        </span>
      </div>
   <div class="desc-plat">
        <h3>${data[i].title}</h3>
        <p>${data[i].desc}</p>
    </div>
       <div class="cart-footer">
        <span class="price">${data[i].prix.toFixed(2)} FCFA</span>
      <button type="button" class="btn btn-primary js-button-add-to-cart">Add to cart</button>
       </div>
   </div>
 </div>
`;
}

for (let i = 6; i < data.length; i++) {
	plats2.innerHTML += `
		<div class="cart" data-id =${data[i].id} >
		<figure class="fig-image">
		<img src=${data[i].image} alt=${data[i].alt}>
		</figure>
		<div class="cart-body">
			<div class="ratings">
				<span class="icon">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"/></svg>  
					
					</span>
			<span class="icon">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"/></svg>
				</span>
			<span class="icon">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"/></svg>
				</span>
				<span class="icon">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"/></svg>
				</span>
			<span class="icon">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.31a16,16,0,0,0-9.11,28.07L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-8.27-2.32V32.09h0l23.2,55.28a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"/></svg>
				</span>
			</div>
	<div class="desc-plat">
				<h3>${data[i].title}</h3>
				<p>${data[i].desc}</p>
		</div>
			<div class="cart-footer">
				<span class="price">${data[i].prix.toFixed(2)} FCFA</span>
			<button type="button" class="btn btn-primary js-button-add-to-cart">Add to cart</button>
			</div>
	</div>
	</div>
	`;
}

const AllButtonsAddToCart = document.querySelectorAll('.js-button-add-to-cart');

let quantity = document.querySelector('.js-quantiter');

const buttonCloseModal = document.querySelector('.js-close-modal');
const quantiterValue = document.querySelector('.js-nav-icon-quantity');
let valueCommande = document.querySelector('.js-value-commande');
const body = document.querySelector('body');
const showModal = () => {
	const modal = document.querySelector('.js-modal');
	sombre.classList.add('show');
	modal.classList.add('showmodal');
	body.style.overflow = 'hidden';
};

const closeModal = () => {
	const modal = document.querySelector('.js-modal');
	sombre.classList.remove('show');
	modal.classList.remove('showmodal');
	body.style.overflow = 'auto';
};

buttonCloseModal.addEventListener('click', closeModal);
quantiterValue.addEventListener('click', showModal);

let quantiterHTML = 0;

const changeButtonTextContent = (button) => {
	if (button.textContent === 'Add to cart') {
		button.textContent = 'Remove to cart';
	} else {
		button.textContent = 'Add to cart';
	}
};

AllButtonsAddToCart.forEach((button) => {
	button.addEventListener('click', (event) => {
		event.stopPropagation();
		if (button && button.textContent === 'Add to cart') {
			changeButtonTextContent(button);
			quantiterHTML = parseInt(quantity.textContent) + 1;
			quantity.textContent = quantiterHTML;
			valueCommande.textContent = quantiterHTML;
		} else {
			changeButtonTextContent(button);
			quantiterHTML = parseInt(quantity.textContent) - 1;
			quantity.textContent = quantiterHTML;
			valueCommande.textContent = quantiterHTML;
		}
	});
});

// Add event on cart





// const getCartId = (cart) => {
// 	let localCart = parseInt(cart.dataset.id);
// 	return localCart;
// };

// let cartId;

// allCarts.forEach((cart) => {
// 	cart.addEventListener('click', () => {
// 		cartId = getCartId(cart);
// 	});
// });

// console.log(cartId);

// form validation

const form = document.querySelector('.js-form');

const allInputs = form.querySelectorAll('input');

const textAreas = form.querySelectorAll('textarea');

const success = form.querySelector('.js-user-success');

let userName = document.querySelector('.js-user-name');

let errors = form.querySelectorAll('.js-error-message');

const inputUser = document.querySelector('.js-name-user');

const checkValueInput = () => {
	allInputs.forEach((input) => {
		if (input.value === '') {
			errors.forEach((error) => {
				error.classList.add('display');
			});
		} else {
			userName.textContent = inputUser.value;
			success.classList.add('show');
			errors.forEach((error) => {
				error.classList.remove('display');
				setTimeout(() => {
					success.classList.remove('show');
				}, 4000);
			});
		}
	});
};

const validation = (e) => {
	e.preventDefault();
	checkValueInput();
};

form.addEventListener('submit', validation);

// faq

const faqs = document.querySelectorAll('.faq');

// const textFaq = faqs.querySelector('.text-faq');

faqs.forEach((faq) => {
	faq.addEventListener('click', () => {
		const arrow = faq.querySelector('.js-span');
		const faqText = faq.querySelector('.text-faq');
		const InputColor = document.querySelector('#color');
		const inputRange = document.querySelector('#textSize');

		faqText.classList.toggle('show');

		arrow.classList.toggle('rotate');

		InputColor.addEventListener('input', () => {
			faqText.style.color = InputColor.value;
		});

		inputRange.addEventListener('input', () => {
			let spanContentValueRange = document.querySelector('.value-range');
			let valueRange = inputRange.value;
			spanContentValueRange.textContent = inputRange.value;

			faqText.style.fontSize = `${valueRange}px`;
		});
	});
});

// InputColor.addEventListener('input',() =>{
// 	console.log(InputColor.value);
// });

// faq.addEventListener('click', () => {
// 	arrow.classList.toggle('rotate');
// 	textFaq.classList.toggle('show');
// });
