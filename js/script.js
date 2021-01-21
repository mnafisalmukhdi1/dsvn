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
monogatari.characters ({
	'i' : {
		name: 'Idris',
		color: '#4682B4',
		sprites: {normal: 'idris.png'},
		expressions: {normal: 'idris.png'},
		default_expression: 'normal'
	},
	'f' : {
		name: 'Firdaus',
		color: '#9ACD32',
		sprites: {normal: 'firdaus.png'},
		expressions: {normal: 'firdaus.png'},
		default_expression: 'normal'
	},
	'm' : {
		name: 'Mustafa',
		color: '#00008B',
		sprites: {normal: 'mustafa.png'},
		expressions: {normal: 'mustafa.png'},
		default_expression: 'normal'
	},
	'z' : {
		name: 'Zain',
		color: '#1E90FF',
		sprites: {normal: 'mustafa.png'},
		expressions: {normal: 'zain.png'},
		default_expression: 'normal'
	},
	'b' : {
		name: 'Bagus',
		color: '#CD853F',
		sprites: {normal: 'bagus.png'},
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
		"Writer": "mnafisalmukhdi1",
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
	'centered Keseluruhan cerita hanyalah fiksi. Kesamaan nama tokoh dan tempat bukanlah sebuah kesengajaan. Tidak ada maksud untuk menyudutkan pihak manapun.',
	'jump Kasus01'
    	],
	'Kasus01': [
		'nvl Kasus 1',
		'nvl Pertemuan',
		'show scene 0715 with fadeIn duration 3s',
		'wait 3000',
		'show background school',
		'i Sekolah masuk serentak hari ini, termasuk yang baru bagiku, MA Sukamawar.',
		'i Aku memasuki sekolah ini karena terkena zonasi, rumahku yang tepat di perbatasan antara Kota Sukamawar dengan Kota Kebun Melati dikatakan lebih dekat ke MA Sukamawar daripada MA Kebun Melati.',
		'i Padahal karena aku kelahiran Kebun Melati, tentu saja aku bersekolah di sana. Tapi sistem zonasi yang disepakati oleh kedua walikota memilihku untuk berada di Sukamawar.',
		'i Aku belum mengenal Sukamawar sepenuhnya, kecuali namanya saja. Maka, aku orang baru di sini, dan aku dipenuhi dengan kebingungan.',
		'show character b normal',
		'i Pagi itu dilaksanakanlah upacara penaikan bendera. Dengan penyampai amanat seorang pria, kutebak itu kepala sekolah, karena beliau menyampaikan selamat datang dan membanggakan unggulnya MA Sukamawar.',
		'i Dia mengingat-ingatkan prestasi zaman dulu, salah satu di antaranya adalah seorang siswa yang memenangkan olimpiade di Jepang.',
		'hide character b',
		'i Pembahasan ini sebenarnya menarik, namun aku merasa bosan. Kebosanan ini membuatku melalui waktu secara tidak sadar.',
		'i Upacara selesai. Kami disuruh menuju ruang multiguna.',
		'show background chairs',
		'i Kami dipersilahkan duduk. Aku memilih kursi tengah.',
		'show background stage',
		'm Halo semua!',
		'show background chairs',
		'Halo!',
		'show background stage',
		'm Perkenalkan, nama kakak Mustafa. Kakak adalah ketua OSIS di MA Sukamawar ini. Salam kenal ya!',
		'z Halo, namaku adalah Zain, aku wakil ketua OSIS. Senang bertemu dengan kalian!',
		'm Setiap tahun, sekolah ini mengadakan Masa Taaruf Siswa Madrasah, atau yang disingkat Matsama. Acara ini diselenggarakan agar kita bisa mengenal, dari siswa sampai sekolah ini sendiri.',
		'm Dan tahun ini, kami dipercaya sebagai penyelenggara. Doakan juga acara ini berjalan dengan lancar, semoga.',
		'z Apa maksudnya?'
		'z Ya, acara pertama kita selesai. Sepertinya kita juga tidak perlu sambutan kepala sekolah mengingat beliau yang menyampaikan amanat tadi. Maka tidak ada acara lagi selain berkenalan. Silahkan mulai dari teman di samping!',
		'z Kalian diharuskan selalu berjalan beriringan dengan salah satu teman baru kalian, agar lebih memperat pertemanan kalian.',
		'z Nanti juga kalian boleh menunjukkan bakat pada besok hari. Sampai jumpa.',
		'i Aku sangat canggung saat itu, belum berani walau sebatas menyebutkan nama. Aku hanya terus menunduk.',
		'Hai!',
		'i Oh?',
		'f Namaku Ahmad Firdaus. Namamu siapa?',
		'i Namaku Muhammad Idris.'
	],
});
