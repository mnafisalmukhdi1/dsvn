// Action for Messages
monogatari.action ('Message').messages ({
    'thank_you': {
        title: 'Terima Kasih!',
        subtitle: 'Terima kasih kepada Anda karena telah mengikuti sejauh ini.',
        body: 'Pantau terus Facebook @mnafisalmukhdi1 untuk kabar mengenai pembaruan karya ini.'
    }
});

// Assets for Scenes and Backgrounds
monogatari.assets ('scenes', {
	'pg13': 'pg13.png',
	'author': 'author.png',
	'0715': '0715.png',
	'0716': '0716.png',
	'0717': '0717.png',
	'0729': '0729.png',
	'0803': '0803.png',
	'school': 'school.jpg',
	'school_hallway': 'school_hallway.jpg',
	'school_rooftop': 'school_rooftop.png',
	'school_garden': 'school_garden.jpg',
	'door_gudang': 'door_gudang.png',
	'gudang': 'gudang.jpg',
	'gudang_dark': 'gudang_dark.png',
	'stage': 'stage.jpg',
	'stage_dark': 'stage_dark.png',
	'chairs': 'chairs.jpg',
	'locker': 'locker.jpg',
	'door_lib': 'door_lib.png',
	'library': 'library.png',
	'door_musala': 'door_musala.png',
	'musala': 'musala.jpg',
	'musala_bag': 'musala_bag.png',
	'room_headmaster': 'room_headmaster.jpg',
	'room_teacher': 'room_teacher.jpg',
	'city_hallway': 'city_hallway.jpg',
	'house_firdaus': 'house_firdaus.jpg',
	'museum_main': 'museum_main.jpg',
	'museum_door': 'museum_door.jpg',
	'museum_gate': 'museum_gate.jpg',
	'museum_room': 'museum_room.jpg',
	'door_bedroom1': 'door_bedroom1.jpg',
	'room_bed1': 'room_bed1.png'
});

// Characters
monogatari.characters ({
	'id' : {
		name: 'Muhammad Idris',
		color: '#4682B4',
	},
	'fir' : {
		name: 'Ahmad Firdaus',
		color: '#9ACD32',
	},
	'mus' : {
		name: 'Mustafa',
		color: '#00008B',
	},
	'za' : {
		name: 'Zain',
		color: '#1E90FF',
	},
	'ba' : {
		name: 'Bagus',
		color: '#CD853F',
	},
	'bam' : {
		name: 'Bambang',
		color: '#4169E1',
	},
	'kur': {
		name: 'Brigadir Polisi Kurniawan',
		color: '#D3D3D3',
	},
	'ri': {
		name: 'Rina',
		color: '#0000CD',
	},
	'suri': {
		name: 'Suami Rina',
		color: '#0000CD',
	},
	'ma': {
		name: 'Manunggal',
		color: '#008B8B',
	},
	'dwi': {
		name: 'Dwi',
		color: '#800000',
	},
	'tri': {
		name: 'Tri',
		color: '#A0522D',
	},
	'wa': {
		name: 'Wawan',
		color: '#FF00FF',
	},
	'ika': {
		name: 'Ika Pratiwi',
		color: '#BC8F8F'
	},
});

// Component
monogatari.component ('main-screen').template (() => {
    return `
        <h1><img src="https://res.cloudinary.com/mnam23/image/upload/v1611279509/works/ds/ds_logo.png" alt="Detektif Sekolahan" title="Detektif Sekolahan"></h1>
        <main-menu></main-menu>
    `;
});

// Configuration for Credits
monogatari.configuration ('credits', {
		"Terima Kasih Kepada": {
		"Tuhan Yang Maha Esa": "Allah", 
		"Teman saya": ["Muhammad Najib", "Radian"],
	},
	"Pengembang": {
		"Penulis": "M. Nafis Al-Mukhdi",
		"Artist": ["id.images.search.yahoo.com", "Dicari"],
		"Engine": "<a href='http://monogatari.io'>Monogatari</a>"
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
		'show background #000',
		'centered Keseluruhan cerita hanyalah fiksi. Kesamaan nama tokoh dan tempat bukanlah sebuah kesengajaan. Tidak ada maksud untuk menyudutkan pihak manapun.',
		'jump Kasus01'
    	],
	'End' : [
		'show background #000',
		'show message thank_you',
		'end'
	],
});
