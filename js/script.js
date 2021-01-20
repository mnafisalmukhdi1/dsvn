// Assets
monogatari.assets ('scenes', {
    'pg13': 'pg13.png',
    'author': 'na.png'
});

// Script
monogatari.script ({
    'Start': [
        'show scene pg13 with fadeIn duration 3s'
	'show scene author with fadeIn duration 3s'
        'end'
    ]
});
