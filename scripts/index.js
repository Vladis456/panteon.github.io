new Swiper(".gallery__team-slider", {
	spaceBetween: 30,
	slidesPerView: 1.5,
	scrollbar: {
		el: ".top-scrollbar",
		draggable: true
	},
	freeMode: true,
	breakpoints: {
		500: {
			slidesPerView: 1.5,
		},
		640: {
			slidesPerView: 2.2,
		},
		767: {
			slidesPerView: 2.5,
		},
		1023: {
			slidesPerView: 2,
		},
		1200: {
			spaceBetween: 0,
			slidesPerView: 3,
		},
		1500: {
			slidesPerView: 3,
		},
		1920: {
			slidesPerView: 4,
		}
	},
	navigation: {
    nextEl: '.gallery__team-button-next',
    prevEl: '.gallery__team-button-prev',
  },
	
})

new Swiper(".gallery__room-slider", {
	spaceBetween: 10,
	slidesPerView: 1.2,
	freeMode: true,
	scrollbar: {
		el: ".bottom-scrollbar",
		draggable: true
	},
	navigation: {
    nextEl: '.gallery__room-button-next',
    prevEl: '.gallery__room-button-prev',
  },
	breakpoints: {
		510: {
			slidesPerView: 1.2,
		},
		700: {
			slidesPerView: 2.1,
		},
		767: {
			slidesPerView: 2.5,
		},
		1023: {
			slidesPerView: 1.5,
		},
		1365: {
			slidesPerView: 2,
		},
		1500: {
			slidesPerView: 2,
		},
		1920: {
			slidesPerView: 3
		}
	}
}) 

new Swiper(".coaches__slider", {
	slidesPerView: 1.2,
	spaceBetween: 30,
	scrollbar: {
		el: ".coaches__scrollbar",
		draggable: true
	},
	navigation: {
    nextEl: '.coaches__button-next',
    prevEl: '.coaches__button-prev',
  },
	breakpoints: {
		374: {
			slidesPerView: 1.2,
			
		},
		424: {
			slidesPerView: 1.4,
		},
		599: {
			slidesPerView: 1.6,
		},
		767: {
			slidesPerView:2,
		},
		1023: {
			slidesPerView:2.3,
		},
		1365: {
			slidesPerView: 2.6,
		},
		1500: {
			spaceBetween:0,
			slidesPerView: 3,
		},
		2000: {
			slidesPerView: 4,
		},
	}
})