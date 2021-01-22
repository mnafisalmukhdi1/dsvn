// Assets for Scenes and Backgrounds
monogatari.assets ('scenes', {
	'pg13': 'pg13.png',
	'author': 'author.png',
	'0715': '0715.png',
	'0716': '0716.png',
	'0717': '0717.png',
	'school': 'school.jpg',
	'door_gudang': 'door_gudang.png',
	'stage': 'stage.jpg',
	'chairs': 'chairs.jpg',
	'locker': 'locker.jpg',
	'door_lib': 'door_lib.png',
	'library': 'library.png',
	'door_musala': 'door_musala.png',
	'musala': 'musala.jpg',
	'musala_bag': 'musala_bag.png'
});

// Characters
monogatari.characters ({
	'i' : {
		name: 'Idris',
		color: '#4682B4',
	},
	'f' : {
		name: 'Firdaus',
		color: '#9ACD32',
	},
	'm' : {
		name: 'Mustafa',
		color: '#00008B',
	},
	'z' : {
		name: 'Zain',
		color: '#1E90FF',
	},
	'b' : {
		name: 'Bagus',
		color: '#CD853F',
	}
});

// Component
monogatari.component ('main-screen').template (() => {
    return `
        <h1><img src="https://res.cloudinary.com/mnam23/image/upload/v1611279509/ds_logo.png" alt="Detektif Sekolahan" title="Detektif Sekolahan"></h1>
        <main-menu></main-menu>
    `;
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
		'i Pagi itu dilaksanakanlah upacara penaikan bendera. Dengan penyampai amanat seorang pria, kutebak itu kepala sekolah, karena beliau menyampaikan selamat datang dan membanggakan unggulnya MA Sukamawar.',
		'i Dia mengingat-ingatkan prestasi zaman dulu, salah satu di antaranya adalah seorang siswa yang memenangkan olimpiade di Jepang.',
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
		'z Apa maksudnya?',
		'z Ya, acara pertama kita selesai. Sepertinya kita juga tidak perlu sambutan kepala sekolah mengingat beliau yang menyampaikan amanat tadi. Maka tidak ada acara lagi selain berkenalan. Silahkan mulai dari teman di samping!',
		'z Kalian diharuskan selalu berjalan beriringan dengan salah satu teman baru kalian, agar lebih memperat pertemanan kalian.',
		'z Nanti juga kalian boleh menunjukkan bakat pada besok hari. Sampai jumpa.',
		'show background chairs',
		'i Aku sangat canggung saat itu, belum berani walau sebatas menyebutkan nama. Aku hanya terus menunduk.',
		'Hai!',
		'i Oh?',
		'f Namaku Ahmad Firdaus. Namamu siapa?',
		'i Namaku Muhammad Idris.',
		'f Kamu dari mana?',
		'i Aku dari Kota Kebun Melati.',
		'f Kalau aku asli dari Sukamawar, senang berkenalan denganmu.',
		'i Firdaus menjulurkan tangannya, pertanda ingin menjabat. Aku menyambutnya perlahan karena gugup. Sesingkat itu perkenalanku.',
		'i Namun pertemuan itu, adalah awal dari segalanya.',
		'show background stage',
		'z Sudah waktu istirahat. Sila makan!',
		'i Kami pun bergerak menuju tempat penaruhan barang. Firdaus nampak mencari sesuatu.',
		'show background locker',
		'i Apa yang kamu cari?',
		'f Tasku. Warnanya biru dan aku menaruhnya di belakang.',
		'f Bagaimana bisa hilang? Sedangkan kita saja diam di kursi sejak awal?',
		'i Berarti itu disengaja.',
		'f Apa maksudmu?',
		'i Cobalah cari, mungkin aku bisa menemanimu.',
		'show background school',
		'i Kami mulai mencari. Wajah Firdaus terlihat gelisah.',
		'show background door_lib',
		'i Kami mencari di perpustakaan.',
		'show background library with fadeIn 3s',
		'centered Tidak ada di sini.',
		'show background door_gudang',
		'i Kami mencari di ruangan sebelahnya.',
		'centered Terkunci.',
		'show background door_musala',
		'i Kami terus berjalan sampai ke musala.',
		'show scene musala_bag with shake 1s',
		'vibrate 200',
		'f Tasku!'
	],
});
