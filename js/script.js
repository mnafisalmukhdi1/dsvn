// Assets
monogatari.assets ('scenes', {
    'pg13': 'pg13.png',
    'author': 'author.png'
});

// Characters
monogatari.character ({
	'id' : {
		name: 'Idris'
	}
});

// Configuration
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
        'nvl Kasus 1',
	'nvl Pertemuan',
	'end'
    	]
});
