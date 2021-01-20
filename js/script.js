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

// Script
monogatari.script ({
    'Start': [
        'show scene pg13 with fadeIn duration 3s',
	'show scene pg13 with fadeOut duration 3s',
	'show scene author with fadeIn duration 3s',
        'end'
    ]
});
