export const MetadataHomePage = [
	{
		"@context": "https://schema.org",
		"@type": "HealthAndBeautyBusiness",
		"name": "Soin énergétique - Massage | Courcelles | Amour EssenCiel",
		"description": "A Courcelles, chez ‘Amour-EssenCiel’, un soin énergétique, un massage c'est faire l'expérience d'un moment de présence à soi, d'amour et de gratitude.",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "Rue de Chapelle 54",
			"addressLocality": "Courcelles",
			"postalCode": "6183",
			"addressCountry": "BE",
		},
		"openingHoursSpecification": [
			{
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				"opens": "10:00",
				"closes": "20:00",
			},
			{
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": "Saturday",
				"opens": "10:00",
				"closes": "20:00",
			},
		],
		"telephone": "O497330944",
		"email": "amouressenciel@gmail.com",
		"image": "https://amour-essenciel.com/img/banniere-amour-essentiel.webp",
		"url": "https://amour-essenciel.com/",
		"priceRange": "$$",
		"sameAs": ["https://www.facebook.com/profile.php?id=61556553270693"],
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "Services de massage",
			
			"itemListElement": [
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Soin Enelph",
						"image": "/img/soin-enelph.webp",
						"url": "https://amour-essenciel.com/soins/soin-enelph",
						"description":
							"L’énergie Enelph est une énergie qui vous remet en contact avec l’Amour, l’Amour de Soi, l’Amour de la Vie.",
						"offers": {
							"@type": "Offer",
							"price": "60",
							"priceCurrency": "EUR",
						},
					},
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Massage Lahochi",
						"url": "https://amour-essenciel.com/soins/lahochi",
						"description": "Le LaHoChi est une technique de soin puissante qui nous relie à une très haute fréquence de lumière. Ce soin soulage les maux du corps et de l’esprit",
						"offers": {
							"@type": "Offer",
							"price": "60",
							"priceCurrency": "EUR",
						},
					},
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "'Douceur Dorsale'",
						"url": "https://amour-essenciel.com/soins/reiki",
						"description": "Le Reïki est une pratique de guérison holistique qui trouve son origine au Japon.",
						"offers": {
							"@type": "Offer",
							"price": "60",
							"priceCurrency": "EUR",
						},
					},
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Massage cranio-facial",
						"url": "https://amour-essenciel.com/soins/massage-cranio-faciale",
						"description": "Massage cranio-facial est une technique de relaxation manuelle, inspirée de la médecine traditionnelle chinoise, partant du postulat que tout le corps est représenté sur le visage.",
						"offers": {
							"@type": "Offer",
							"price": "60",
							"priceCurrency": "EUR",
						},
					},
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Réflexologie Palmaire",
						"url": "https://amour-essenciel.com/soins/reflexologie-palmaire",
						"description": "La réflexologie palmaire aussi connu sous l'apellation massage des mains,  est moins connu que le massage des pieds et pourtant il est tout aussi bénéfique.",
						"offers": {
							"@type": "Offer",
							"price": "45",
							"priceCurrency": "EUR",
						},
					},
				},
			],
		},
	},
	{
		"@context": "https://schema.org",
		"@type": "ImageObject",
		"contentUrl": "/img/banniere-amour-essentiel.webp",
		"datePublished": "2024-03-22",
		"description": "Amour EssenCiel - Pour vous relier à l'Essentiel",
		"name": "Banniere Amour EssenCiel",
	},{
		"@context": "https://schema.org",
		"@type": "ImageObject",
		"contentUrl": "/img/chemin-de-vie-amour-essenciel.webp",
		"datePublished": "2024-03-21",
		"description": "Spirale nous montrant un chemin de vie",
		"name": "Chemin de vie",
	}
];
