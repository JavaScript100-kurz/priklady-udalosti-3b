console.log('JS funguje');


const nadpisy = document.querySelectorAll('.collapse h2');

nadpisy.forEach( (nadpis) => {
	nadpis.addEventListener('click', (e) => {

		const otevreny = document.querySelector('.collapse--open');
		if (otevreny !== null) {
			otevreny.classList.remove('collapse--open');
		}

		e.target.parentElement.classList.toggle('collapse--open');

	} );
} );

