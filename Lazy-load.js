class LazyLoad {

	constructor() {

		let options = {
	    		rootMargin: '0px',
	    		threshold: [0]
		};

		this._observer = new IntersectionObserver((entries) => {
			entries.forEach(function(img, observer) {
				if(img.target.contains('er-image--loaded')) {
					return;
				}
				if(img.isIntersecting) {
					img.target.classList.add('er-image--loaded');
					img.target.src = img.target.getAttribute('data-src');
				}
			});
		}, options);

	    let collection = [ ...document.querySelectorAll('[data-src]') ];

	    collection.forEach(img => this._observer.observe(img));
	}
}
