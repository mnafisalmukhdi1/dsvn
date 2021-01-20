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
        'nvl Kasus 1',
	'nvl Pertemuan',
	'jump Kasus01'
    	],
	'Kasus01': [
	'show scene 0715 with fadeIn duration 3s',
	'wait 3000',
	'show background school',
	'i Sekolah masuk serentak hari ini, termasuk yang baru bagiku, MA Sukamawar.',
	'i Aku memasuki sekolah ini karena terkena zonasi, rumahku yang tepat di perbatasan antara Kota Sukamawar dengan Kota Kebun Melati dikatakan lebih dekat ke MA Sukamawar daripada MA Kebun Melati.',
	'i Padahal karena aku kelahiran Kebun Melati, tentu saja aku bersekolah di sana. Tapi sistem zonasi yang disepakati oleh kedua walikota memilihku untuk berada di Sukamawar.',
	'i Aku belum mengenal Sukamawar sepenuhnya, kecuali namanya saja. Maka, aku orang baru di sini, dan aku dipenuhi dengan kebingungan.',
	'show character b Normal at center with fadeIn end-fadeOut'
	'i Pagi itu dilaksanakanlah upacara penaikan bendera. Dengan penyampai amanat seorang pria, kutebak itu kepala sekolah, karena beliau menyampaikan selamat datang dan membanggakan unggulnya MA Sukamawar.'
	],
});
