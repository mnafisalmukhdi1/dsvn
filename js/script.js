// Assets
monogatari.assets ('scenes', {
    'pg13': 'pg13.png',
    'na': 'na.png'
});

// Script
monogatari.script ({
    'Start': [
        'show scene pg13 with fadeIn duration 3s'
	'show scene na with fadeIn duration 3s'
        'end'
    ]
});
