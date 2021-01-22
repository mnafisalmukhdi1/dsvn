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
	'school': 'school.jpg',
	'door_gudang': 'door_gudang.png',
	'stage': 'stage.jpg',
	'stage_dark': 'stage_dark.png',
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
		'i Sekolah masuk serentak hari ini, termasuk yang baru bagiku, MA Sukamawar.',
		'show background school',
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
		'f Tasku!',
		'show background musala',
		'i Firdaus langsung membukanya, dan menunjukkan wajah lega setelahnya. Aku melihat juga beberapa barang juga terletak di sini.',
		'f Kurasa kamu benar. Ini seperti disengaja.',
		'show scene 0716 with fadeIn duration 3s',
		'i Sekarang adalah hari kedua dari acara Masa Taaruf Siswa Madrasah, juga sekolahku di tingkat MA.',
		'show background stage',
		'z Halo semuanya!',
		'show background chairs',
		'Halo!',
		'show background stage',
		'z Hari ini kita melanjutkan acara kita, dan sesuai janji kakak, kalian boleh menunjukkan bakat kalian.',
		'show background chairs',
		'Semua bertepuk tangan. Seolah bergembira atas apa yang akan mereka tonton sebentar lagi.',
		'show background stage_dark',
		'Lampu padam tiba-tiba. Ruangan menjadi gelap dan suasana ricuh.',
		'Sebuah lampu menyorot Zain yang diseret dengan mulut dan mata ditutup tangan pelakunya.',
		'Lampu sorot padam.',
		'show background stage',
		'Beberapa saat kemudian, lampu ruangan menyala lagi dan Zain menghilang.',
		'Anggota OSIS lainnya mulai gelabakan. Naiklah salah seorang dari mereka ke podium, dan menyuruh kami agar tetap tenang dan acara unjuk bakat dibatalkan.',
		'Semua siswa yang berada di ruangan tersebut begitu kecewa dan mulai mengejek acara hari ini. Sementara salah satu anggota OSIS itu turun dari podium dan meninggalkan ruangan bersama yang anggota yang lain.',
		'show background chairs',
		'f Apa tadi barusan?',
		'i Itu disengaja. Seandainya mereka mau, Zain bisa saja <i>diculik</i> lebih awal daripada ini atau kemarin.',
		'f Bagaimana kalau kita cari di musala? Kemarin kan, kita menemukan tasku di sana.',
		'i Ide bagus!',
		'show background door_musala',
		'i Kami pergi ke musala.',
		'show scene musala with shake 1s',
		'vibrate 200',
		'i Kami menemukan seseorang di sana dengan kepala bertutup kain hitam. Kulepas kain itu, dan ternyata itu memang Zain. Aku juga melepaskan ikatan tali di kaki, mulut dan tangannya.',
		'show background musala',
		'z Apa yang terjadi?',
		'f Kami pun tidak tahu.',
		'z Tapi terima kasih, kalian menyelamatkanku. Aku hampir saja kehabisan napas gara-gara kain itu.',
		'Zain bersiap untuk pergi.',
		'i Tunggu dulu, ada beberapa hal yang ingin kusampaikan.',
		'z Silakan.',
		'Idris pun melontarkan pertanyaan-pertanyaan sementara Firdaus hanya memandang. Zain saat itu berbaik hati menjawab pertanyaannya.',
		'i Baiklah, sudah jelas pelakunya.',
		'f Pelaku di balik semua ini?',
		'i Ya, tapi aku menyampaikannya besok, hari ketiga acara kita.',
		'i Maukah Anda bekerja sama dengan kami?',
		'z Tentu, aku sendiri tertarik mendengar siapa pelakunya.'
		'show scene 0717 with fadeIn duration 3s',
		'i Hari ketiga, hari terakhir untuk acara Masa Taaruf Siswa Madrasah.',
		'show background stage',
		'z Halo semua!',
		'z Ini sudah hari ketiga, berarti semua berakhir di sini.',
		'show background chairs',
		'Suasana menjadi ricuh, seolah para siswa tidak ingin kegembiraan ini berakhir begitu saja.',
		'show background stage',
		'z Saya, mewakili OSIS, meminta maaf atas segala kejadian yang terjadi di Matsama ini, dari menghilangnya barang-barang kalian sampai diculiknya aku beberapa hari yang lalu.'
		'z Kami berjanji, kami akan mengungkap siapa orang yang melakukan hal itu, dengan bantuan teman kita yang bernama Muhammad Idris.',
		'Ketika nama Idris dipanggil, dia memberanikan diri untuk berdiri dari tempat duduk dan menuju ke depan. Zain turun dari panggung dan menyerahkan mikrofon kepadanya.',
		'i Perkenalkan, namaku Muhammad Idris, panggil saja Idris. Aku di sini ditunjuk untuk memberitahukan kalian siapa pelaku di balik kejadian-kejadian ini.',
		'i Tapi aku tidak mau sendirian. Aku minta ditemani teman baruku, Ahmad Firdaus.',
		'Uniknya, sepertinya hanya satu orang bernama itu, hanya dia. Firdaus pun berdiri dan pergi mendampingi Idris. Firdaus sempat kebingungan, itu memang salah Idris karena Firdaus belum memberitahukan hal ini lebih awal.',
		'i Pada intinya, ini semua disengaja. Mari kita mulai dengan barang yang menghilang.',
		'i Aku mengambil contoh dari tas biru Firdaus. Dia bercerita bahwa dia menaruh tasnya paling belakang, tertutupi oleh tas lainnya. Ketika dia mencarinya, ternyata menghilang.',
		'i Kami mulai mencari tas itu dan menemukannya di musala, tepat di samping ruangan ini. Di sana juga ditaruh beberapa barang yang sepertinya sudah kalian ambil.',
		'f Aku menyadari sesuatu yang aneh, hanya barang-barang yang ditaruh paling belakang yang terletak di sana.',
		'i Aku memiliki teori bahwa sebenarnya barang-barang diambil secara acak namun diletakkan di tempat tertentu. Semakin jauh kalian menaruh barang, semakin dekat untuk ditemukan.',
		'i Lanjut untuk yang kedua, penculikan <i>kak</i> Zain.',
		'i Sama seperti menghilangnya barang itu, hal ini disengaja. Buktinya bahwa kejadian ini didramatisasi, padahal mereka bisa saja menculiknya langsung tanpa mengatur pencahayaannya.',
		'i Di sini aku memiliki teori yang hampir mirip dengan sebelumnya, tapi sekarang semakin berat suatu barang, semakin dekat dia ditemukan.'
		'i Lagipula seandainya memang ada penculik, maka <i>kak</i> Zain akan lebih susah untuk ditemukan.',
		'f Lalu bagaimana caranya dia bisa berada di musala?',
		'i Orang ini menurutku susah dipindahkan oleh hanya satu orang. Orang itu adalah....',
		'i Kak Mustafa! Keluarlah! Saya tahu Anda pelakunya.',
		'm Wah, kamu benar sekali.',
		'f Apa alasan kakak melakukan ini?',
		'm Bertahun-tahun, para siswa tidak pernah menghargai kegiatan Matsama ini, saking tidak menghargainya, mereka memanggilku kembali.',
		'm Aku baru saja lulus dari MA Sukamawar ini, dan mereka masih memerlukanku. Aku merelakan semuanya demi acara ini. Tapi mereka tidak menghargainya.',
		'f Tidak begitu, aku menyukai acara ini. Tanpanya, belum tentu aku bertemu dengan teman baruku.',
		'f Aku yakin, di antara orang-orang di sini, ada orang yang meneruskan ide kreatif Anda. Jika Anda mengarahkannya ke jalan yang benar.',
		'Idris maju dan menyalami Mustafa. Dia nampak kelelahan, dan akhirnya pingsan. Idris mencoba menyanggahnya sekuat tenaga. Kemudian tim PMR membantu dalam hal ini. Mustafa pun dibawa menggunakan tandu keluar dari ruangan.',
		'i Ada apa dengannya?',
		'z Bukankah dia sudah bilang, dia merelakan segalanya?',
		'z Sebenarnya aku juga alumni, dan sejak dulu dia selalu berusaha sampai lupa diri.',
		'z Apa yang dia katakan itu benar, selama kami menjabat, acara Matsama tidak pernah dihargai. Sekarang, dia punya ide, bagaimana kalau acaranya dikacaukan saja. Dan kalian malah lebih menghargainya.',
		'z Aku melihat dengan jelas, ketika Mustafa berpidato, ekspresi kalian menandakan bahwa sebenarnya kalian tidak menginginkannya. Yang kalian inginkan hanya keseruannya.',
		'Zain meminta mikrofon yang dipegang oleh Idris dikembalikan.',
		'z Ya, demikianlah acara kita, berakhir disini. Saya mewakili seluruh anggota OSIS mengucapkan maaf atas banyaknya kesalahan dalam acara ini.',
		'Idris menyalami Zain namun dia memeluk.',
		'z Terima kasih, sekarang semua sempurna.',
		'Zain melepas pelukan dan tersenyum.',
		'Anggota OSIS pun meninggalkan ruangan setelahnya. Idris hanya tersenyum, sementara Firdaus kebingungan. Para siswa mulai meninggalkan ruangan. Idris dan Firdaus mengambil tas mereka di tempat penaruhan barang, sembari keluar.',
		'show background school',
		'f Apa maksudnya tadi?',
		'Rupanya Firdaus juga mendengar ucapan terakhir Zain.',
		'i Bukankah kubilang, semuanya sudah dirancang. Aku yakin naskah mereka diperbarui beberapa saat sebelum acara karena aku memberitahu pelakunya. Dan seolah aku yang menyempurnakannya.',
		'f Oh ya, kamu jurusan apa?',
		'i Aku jurusan Agama, kamu?',
		'i Aku jurusan Bahasa, huft.',
		'f Hanya saja aku berharap kita bisa sekelas dan mengenal lebih lanjut.',
		'i Kita bisa gunakan waktu istirahat untuk berbicara nantinya.',
		'f Ya, terkadang hidup kita ini perlu diisi.',
		'Idris terlihat bingung dengan perkataan Firdaus.',
		'show scene #000 with fadeIn 3s',
		'wait 1000',
		'jump Tamat'
	],
	'Tamat' : [
		'shpw background #000',
		'show message thank_you',
		'end'
	],
});
