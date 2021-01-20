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
	'end',
	'show scene author with fadeIn duration 3s',
        'end'
    ]
});
