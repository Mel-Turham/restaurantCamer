// datas
import { data } from './data.js';
import { platDetail } from './commande.js';

console.log(platDetail);

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

const allCarts = document.querySelectorAll('.cart');

allCarts.forEach((cart) => {
	cart.addEventListener('click', () => {


		let cartId = parseInt(cart.dataset.id);


		data.forEach((item) => {
			if (cartId === item.id) {
				let product = item;

				platDetail.innerHTML = `
				<figure class="figurePlat">
     				 <img src=${product.image} alt=${product.alt}>
    		</figure>

    <div class="desc-plat">
      <h1 class="nom-plat">${product.id}</h1>
      <div class="raitings">
        <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0a0a0a" viewBox="0 0 256 256"><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path></svg></span>
        <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0a0a0a" viewBox="0 0 256 256"><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path></svg></span>
        <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0a0a0a" viewBox="0 0 256 256"><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path></svg></span>
        <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0a0a0a" viewBox="0 0 256 256"><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path></svg>
        </span>
      </div>
      <div class="prix">
        <span class="plat-courant">${product.prix}fcfa</span>
        <span class="ancien-prix">2000 fcfa</span>
        <span class="promo"> promo</span>
      </div>
      <p class="vous">Vous economisez  <strong>${product.prix} fcfa</strong></p>
      <div class="livraison">
        <div class="liv-item">
          <span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M245.57,117.78l-14-35a13.93,13.93,0,0,0-13-8.8H182V64a6,6,0,0,0-6-6H24A14,14,0,0,0,10,72V184a14,14,0,0,0,14,14H42.6a30,30,0,0,0,58.8,0h53.2a30,30,0,0,0,58.8,0H232a14,14,0,0,0,14-14V120A6,6,0,0,0,245.57,117.78ZM182,86h36.58a2,2,0,0,1,1.86,1.26L231.14,114H182ZM22,72a2,2,0,0,1,2-2H170v68H22ZM72,210a18,18,0,1,1,18-18A18,18,0,0,1,72,210Zm82.6-24H101.4a30,30,0,0,0-58.8,0H24a2,2,0,0,1-2-2V150H170v15.48A30.1,30.1,0,0,0,154.6,186ZM184,210a18,18,0,1,1,18-18A18,18,0,0,1,184,210Zm50-26a2,2,0,0,1-2,2H213.4A30.05,30.05,0,0,0,184,162c-.67,0-1.34,0-2,.07V126h52Z"></path></svg>
          </span>
          <span>Livraison gratuit sous 1h</span>
        </div>
        <div class="liv-item">
          <span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M26,128A70.08,70.08,0,0,1,96,58H209.51L195.76,44.24a6,6,0,0,1,8.48-8.48l24,24a6,6,0,0,1,0,8.48l-24,24a6,6,0,0,1-8.48-8.48L209.51,70H96a58.07,58.07,0,0,0-58,58,6,6,0,0,1-12,0Zm198-6a6,6,0,0,0-6,6,58.07,58.07,0,0,1-58,58H46.49l13.75-13.76a6,6,0,0,0-8.48-8.48l-24,24a6,6,0,0,0,0,8.48l24,24a6,6,0,0,0,8.48-8.48L46.49,198H160a70.08,70.08,0,0,0,70-70A6,6,0,0,0,224,122Z"></path></svg>
          </span>
          <span>Retour gratuit sous 30 jours</span>
        </div>
        <div class="liv-item">
          <span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm38-70a26,26,0,0,1-26,26h-6v10a6,6,0,0,1-12,0V174H104a6,6,0,0,1,0-12h36a14,14,0,0,0,0-28H116a26,26,0,0,1,0-52h6V72a6,6,0,0,1,12,0V82h18a6,6,0,0,1,0,12H116a14,14,0,0,0,0,28h24A26,26,0,0,1,166,148Z"></path></svg>
          </span>
          <span>Payment de la livraison</span>
        </div>
      </div>

      <div class="qct">
        <label for="quantiter">Quantiter</label><br>
        <div class="field-input">
          <input type="number" name="quantiter" id="quantiter">
          <p class="total">Total: <span class="setTotal">${product.prix} fcfa</span></p>
        </div>
      </div>
      <div class="box-btn">
        <button class="btn btn-secondary">Payer maintanant</button>
      </div>
    </div>
				`;
			}
		});
	});
});

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
