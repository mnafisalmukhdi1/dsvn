// Assets for Scenes and Backgrounds
monogatari.assets ('scenes', {
	'pg13': 'pg13.png',
	'author': 'author.png',
	'0715': '0715.png',
	'0716': '0716.png',
	'0717': '0717.png',
	'school': 'school.jpg',
	'stage': 'stage.jpg',
	'chairs': 'chairs.jpg',
	'locker': 'locker.jpg',
	'library': 'library.jpg',
	'musala': 'musala.jpg'
});

// Characters
monogatari.character ({
	'i' : {
		name: 'Idris',
		color: '#4682B4',
		expressions: {normal: 'idris.png'},
		default_expression: 'normal'
	},
	'f' : {
		name: 'Firdaus',
		color: '#9ACD32',
		expressions: {normal: 'firdaus.png'},
		default_expression: 'normal'
	},
	'm' : {
		name: 'Mustafa',
		color: '#00008B',
		expressions: {normal: 'mustafa.png'},
		default_expression: 'normal'
	},
	'z' : {
		name: 'Zain',
		color: '#1E90FF',
		expressions: {normal: 'zain.png'},
		default_expression: 'normal'
	},
	'b' : {
		name: 'Bagus',
		color: '#CD853F',
		expressions: {normal: 'bagus.png'},
		default_expression: 'normal'
	}
});

// Configuration for Credits
monogatari.configuration ('credits', {
		"Special Thanks to": {
		"The Only One God": "Allah", 
		"My friends": ["Muhammad Najib", "Radian"],
	},
	"Developers": {
		"Artist": "AvatarMaker.com",
		"Scenario Writer": "mnafisalmukhdi1",
	},
});

// Script
monogatari.script ({
	'_SplashScreen': [
	'show scene pg13 with fadeIn duration 3s',
	'wait 3000',
	'show scene author with fadeIn duration 3s',
	'wait 3000',
        'end'
	],
	'Start': [
        'nvl Case 1',
	'nvl The Meeting',
	'jump Case01'
    	],
	'Case01': [
	'show scene 0715 with fadeIn duration 3s',
	'wait 3000',
	'show background school',
	'i Schools entered simultaneously today, including the new one for me, MA Sukamawar.',
	'i I entered this school due to zoning, my house which is right on the border between Kota Sukamawar and Kota Kebun Melati is said to be closer to MA Sukamawar than MA Kebun Melati.',
	'i In fact, because I was born in Kebun Melati, of course I went to school there. But the zoning system agreed upon by the two mayors chose me to be in Sukamawar.',
	'i I do not fully know Sukamawar, except for the name. So, I am new here, and I am filled with confusion.',
	'i That morning a flag-raising ceremony was held. With a man that telling some messages, I guess it was the principal of the school, because he welcomed and proud of the excellence of MA Sukamawar.',
	'i He recalled past achievements, one of which was a student who won the Olympics in Japan.',
	'i This discussion is actually interesting, but I feel bored. This boredom drives me through time unconsciously.',
	'i The ceremony is done. We told for go to the multifungtional room.',
	'show background chairs',
	'i We are welcome to sit down. I chose the middle seat.',
	'show background stage',
	'm Hello all!'
	],
});
