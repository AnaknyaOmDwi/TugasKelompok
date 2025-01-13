-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 13, 2025 at 07:44 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `antobengkel`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_photo` varchar(255) NOT NULL,
  `product_price` int(255) NOT NULL,
  `diskon` int(11) NOT NULL,
  `description` text NOT NULL,
  `shop_id` int(11) NOT NULL,
  `check_product` tinyint(1) NOT NULL DEFAULT 0,
  `quantity` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_name`, `product_photo`, `product_price`, `diskon`, `description`, `shop_id`, `check_product`, `quantity`) VALUES
(1, 'Topi Imlek Chinese Hat Dewasa', 'https://down-id.img.susercontent.com/file/sg-11134201-23020-zhp8lm9op5mv1c.webp', 35000, 5, 'Deskripsi Produk：\r\nMaterial : Kain\r\nWarna：black red \r\nTersedia dalam Ukuran : Dewasa \r\nTerdapat kepangan rambut di bagian belakang\r\nTidak Terdapat Janggut seperti di foto', 2, 0, 1),
(2, 'Kupluk Rajut Masker Ninja Nyaman dan Adem', 'https://down-id.img.susercontent.com/file/sg-11134201-7rdya-lxfbljmatrii80@resize_w450_nl.webp', 55000, 0, 'Deskripsi Produk :\r\nMaterial Jenis Bahan Rajut Woll Berkualitas\r\nUkuran Onesize Bundar Kepala 45 - 56 Cm\r\nPemakaian Fashion Style Pria Dan Wanita Unisex\r\nBarang Realpict Sesuai Pesanan (Garansi Uang Kembali)\r\njangan digunakan untuk maling :)', 2, 0, 1),
(3, 'KAOS RUSDI TOP COLLECTION HITAM KAOS DISTRO PRIA', 'https://down-id.img.susercontent.com/file/sg-11134201-7rdy4-m014y1eg90gzee@resize_w450_nl.webp', 66000, 0, 'Deskripsi Produk :\r\nMaterial - Cotton combed 30S - Sablon DTF\r\n————————————————— \r\nPengiriman Senin - Sabtu pukul 20.00 WIB\r\nMinggu : Tidak ada pengiriman\r\n————————————————— \r\nStock sesuai etalase.\r\n————————————————— \r\nNB. - Tidak dapat ganti size setelah pesanan diproses - Mohon untuk mengisi nama jelas (Nama, Alamat lengkap, No rumah, RT, RW, Kec. Kab/Kota, patokan rumah, No HP yang dapat dihubungi) - Tidak menerima penukaran barang/pengembalian dana kecuali kesalahan dari kami - Pengajuan komplain pesanan max 3 hari setelah paket diterima disertakan unboxing paket.', 2, 0, 1),
(4, 'Kaos Botak Cs FF', 'https://down-id.img.susercontent.com/file/sg-11134201-7rccd-lqvob1iyzi6q52@resize_w450_nl.webp', 55000, 10, 'SEGALA COMPLAINAN WAJIB MENYERTAKAN VIDEO UNBOXING !!!\r\n \r\nSEBELUM CHECKOUT HARAP MELIHAT BAGAN UKURAN LD TERLEBIH DAHULU\r\nJANGAN SAMPAI SALAH UKURAN !!!\r\nKARENA SETIAP BAHAN KAOS ITU BERBEDA2 UKURAN LD-NYA\r\n \r\nKITA JUGA MENERIMA REQUEST UNTUK : \r\n \r\n- KAOS LENGAN PANJANG \r\n- KAOS MANSET\r\n- KAOS COTTON COMBED 20S & 24S & 30S \r\n- KAOS OVERSIZE COTTON COMBED 24S\r\n- HOODIE \r\n- CREWNECK/SWEATER\r\n- TOPI \r\n \r\nBAHAN KAOS :\r\n- TC COMBED 30s & Oversize 24s\r\n- GAMBAR 100% SESUAI FOTO (ALIAS REAL PICT) \r\n- NYAMAN DI PAKAI SEHARI2', 2, 0, 1),
(5, 'Kaos Ambalabu - Jomok JMK48', 'https://down-id.img.susercontent.com/file/sg-11134201-7rdxb-m1jlbw2rxpag4e@resize_w450_nl.webp', 35000, 0, 'SEGALA COMPLAINAN WAJIB MENYERTAKAN VIDEO UNBOXING !!!\r\n \r\nSEBELUM CHECKOUT HARAP MELIHAT BAGAN UKURAN LD TERLEBIH DAHULU\r\nJANGAN SAMPAI SALAH UKURAN !!!\r\nKARENA SETIAP BAHAN KAOS ITU BERBEDA2 UKURAN LD-NYA\r\n \r\nKITA JUGA MENERIMA REQUEST UNTUK : \r\n \r\n- KAOS LENGAN PANJANG \r\n- KAOS MANSET\r\n- KAOS COTTON COMBED 20S & 24S & 30S \r\n- KAOS OVERSIZE COTTON COMBED 24S\r\n- HOODIE \r\n- CREWNECK/SWEATER\r\n- TOPI \r\n \r\nBAHAN KAOS :\r\n- TC COMBED 30s\r\n- GAMBAR 100% SESUAI FOTO (ALIAS REAL PICT) \r\n- NYAMAN DI PAKAI SEHARI2\r\n \r\nSPESIFIKASI PRODUK :\r\n \r\n- SABLON MENGGUNAKAN SABLON DTF PREMIUM ( DIGITAL TRANSFER FILM )\r\n- STOK SELALU READY\r\n- TOKO DIJAMIN AMANAH\r\n- KHUSUS YANG COD, HARAP KAKAK JUGA AMANAH MENERIMA DAN MEMBAYAR PAKET YG TELAH DATANG\r\n- HARAP MEMBERIKAN PENILAIAN BINTANG 5, AGAR KAMI TERUS BISA SEMANGAT MELAYANI PESANAN KAKAK2\r\n- KITA SELALU MENERIMA MASUKAN DARI KAKAK2 , BISA LANGSUNG CHAT ADMIN YA\r\n \r\n \r\n \r\n- SEMOGA SELALU BERKAH BUAT KITA SEMUA -\r\n \r\n \r\nHARGA TERSEBUT ADALAH HARGA SATUAN\r\nBARANG YANG KAMI KIRIM SELALU KITA CHECKING AGAR TIDAK TERJADI KEKELIRUAN BAIK MOTIF MAUPUN SIZE NYA \r\n \r\n \r\nTERIMA KASIH TELAH MEMILIH TOKO KAMI\r\nHAPPY SHOOPING\r\n \r\nLOOKS DIFFERENT,KEEP COOL', 2, 0, 1),
(6, 'Mesin pemotong rumput S8000', 'https://down-id.img.susercontent.com/file/id-11134207-7r98r-lzycsxrew3c850@resize_w450_nl.webp', 11000000, 30, 'Mesin pemotong rumput s8000\r\ntenaga kerja otomatis', 1, 0, 6),
(7, 'Kapal Sampah A80', 'https://down-id.img.susercontent.com/file/id-11134207-7r98t-m0a92xfe72g08d.webp', 100000000, 10, 'Kapal Angkasa Sampah A80 Adudu', 1, 0, 1),
(8, 'Biskuit Yaya', 'https://down-id.img.susercontent.com/file/id-11134207-7r98w-m0ajp3nyd9sccd.webp', 58000, 0, 'Biskuit Khas Yaya🫦😵‍💫‼️', 1, 0, 1),
(9, 'Senjata Peluru Berpandu Nuklear L9000', 'https://down-id.img.susercontent.com/file/id-11134207-7r98t-m0a92xfdufc08d.webp', 80000000, 0, 'Senjata Peluru Berpandu Nuklear L9000 👾🚀‼️', 1, 0, 1),
(10, 'Sudip Elektrik', 'https://down-id.img.susercontent.com/file/id-11134207-7r98u-lzuvto0o31ej7f.webp', 12000000, 0, 'Ayo Abang/akak sekalian beli lah Sudip Elektrik Tinggal ambil beras terus tunggu jadi nasi langsung terus makan.Boleh Digunakan buat memukul lalat‼️', 1, 0, 1),
(11, 'Komputer Full Set Murah Intel Core i5 HDD 500GB RAM 8GB VGA 2GB DDR5 Monitor LED 19inch Lengkap Siap Pakai | BZ02', 'https://down-id.img.susercontent.com/file/id-11134207-7r98x-lvalgtqsp6fd8e.webp', 1250000, 30, ' Kategori Produk Rakitan : \r\n▪︎PC Kantor / Admin / Kasir\r\n▪︎PC UNBK / Sekolah\r\n▪︎PC Gaming / Live Streaming\r\n▪︎PC Editing / Rendering / Design \r\n_________________\r\n\r\n Nama Produk Rakitan : \r\n▪︎BLAZE 02 (FullSet Intel Core i5 Generation 2th)\r\n\r\n Kode Produk Rakitan : \r\n▪︎BZ02\r\n\r\n Rekomendasi Untuk :\r\n▪︎Office/Games/Editing/Desain grafic/Live Streaming \r\n\r\n Spesifikasi Lengkap :\r\n▪︎Motherboard chipset intel H61\r\n▪︎Intel Core i5 2400 3,40 GHz Socket LGA1155\r\n▪︎Ram DDR3 8GB (8x1) pc12800 (Sudah Include)\r\n▪︎Hdd Seagate 500GB (sudah Include)\r\n▪︎SSD 128GB/256GB (SESUAIKAN DI VARIASI)\r\n▪︎Onboard (Tanpa VGA CARD)\r\n▪︎Vga Card DDR5 4GB (SESUAIKAN DI VARIASI)\r\n▪︎Soundcard & Lancard on board\r\n▪︎Psu 500 Watt\r\n▪︎Monitor LED 19inch\r\n▪︎Keyboard Mouse Gaming RGB\r\n\r\n Varian Cassing :\r\n▪︎Casing Standard : Hose\r\n▪︎Casing M-ATX : Genuin (Black)\r\n▪︎Casing ATX : Battleground 08 (Black/White)\r\n\r\nOS : WIN 10 Pro 64 bit (ACTIVATED)\r\n\r\n Include Software :\r\n▪︎Microsoft Office\r\n▪︎Adobe\r\n▪︎Corel\r\n▪︎Winamp\r\n▪︎VLC\r\n▪︎Mozilla\r\n▪︎Chrome\r\n▪︎OBS\r\n▪︎PDF\r\n▪︎DLL\r\n\r\n Include Games : \r\n▪︎Pes 2017\r\n▪︎GTA San Andress\r\n▪︎Point Blank\r\n▪︎Dota\r\n▪︎Cod\r\n▪︎NFS\r\n▪︎Minecraft\r\n▪︎Lego Marvell\r\n▪︎PLant vs Zombie\r\n▪︎MotoGP\r\n▪︎Amerika Truck Simulator\r\n▪︎Dll\r\n\r\n Kelengkapan & Bonus :\r\n▪︎CPU Intel Core i5\r\n▪︎Monitor LED 19inch\r\n▪︎Keyboard Mouse Gaming RGB (Bonus)\r\n▪︎Usb Wifi (Bonus)\r\n▪︎Mousepad (Bonus)\r\n▪︎Fan Case RGB 1 (Bonus)\r\n▪︎Cash Back 50 - 100rb\r\n\r\n CATATAN :\r\n▪︎Khusus daerah Bandung dan sekitarnya, Pengiriman cepat bisa menggunakan Gosend/ Grab\r\n▪︎Pengiriman di Luar Bandung, Packingan menggunakan Packing Kayu dan Wrapping Tebal !! 100% Dijamin Aman Sampai Tujuan\r\n▪︎Jika Tidak ada Request Aplikasi dan Games, Maka Unit akan di Install seauai dengan standar ArfaDigital\r\n\r\n GARANSI PERSONAL :\r\n▪︎2 Tahun (1 Tahun masa Garansi Sparepart, 2 Tahun masa garansi Software) Setelah Terima Barang, dengan syarat dibawah ini : \r\n- Konfirmasi Terima Barang serta Memberikan Penilaian PUAS /SMILE :)\r\n- Memberikan Bintang dan Ulasan POSITIF\r\n- Claim Garansi Silahkan Menghubungi Customer Support kami / Admin Marketing Kami\r\n- Garansi Dianggap VOID / Tidak Berlaku Jika Memberikan Ulasan Negatif', 3, 0, 1),
(12, 'Komputer Full Set I5 Gaming Desain Editing Ram 8GB / 500GB / SSD / berkualitas', 'https://down-id.img.susercontent.com/file/id-11134207-7r98y-ly0pt5qqlp1909.webp', 1650000, 0, '■ Komputer Full Set I5 Gaming Desain Editing Ram 8GB / 500GB / SSD\r\n\r\nSpesifikasi Lengkap :\r\n▪️ Processor : Intel® Core i5 2400 Turbo Speed 3,4 Ghz Up to i7 (second)\r\n▪️ Motherboard : Chipset Intel H61 (New)\r\n▪️ VGA : Intel® HD Graphics 2000 Integrated Onboard (New)\r\n▪️ RAM : 8GB - 16GB DDR3 (New)\r\n▪️ Storage : HDD 500B Speed 7200 RPM (second)\r\n▪️ Socket : VGA & HDMI bisa konek ke Monitor / TV\r\n▪️ Socket : Sound Card + Lan Card\r\n▪️ Casing : standar random sesuai stok yang tersedia (Second)\r\n▪️ Monitor : LED 19 Inch Resolusi 1440 X 900 HD merek sesuai stok yang yang tersedia ( second )\r\n▪️ Keyboard Mouse : standar black (New)\r\n\r\nKondisi Sparepart Second Like NEW Berkualitas 90%\r\n* GARANSI 1 BULAN\r\nGaransi Tuker Unit Selama 1 Bulan (Tidak Human Error) \r\n\r\n Cpu sudah terinstal ::\r\nWindows 10 pro 64 bit \r\n▪️ Microsoft office 2019/2022 \r\n▪️ FULL ADOBE ( Photoshop Premier Ilustrator Dll )\r\n▪️ Corel Draw X7 \r\n▪️ Google Chrome \r\n▪️ Mozilla \r\n▪️ Winamp\r\n▪️ Adobe Reader\r\n▪️ Net Framework \r\n▪️ Zoom Meeting\r\n▪️ Game bisa request di catatan yah\r\nJadi agan sudah tinggal pakai saja ya\r\n\r\nKelengkapan Pengiriman : \r\n▪️ Unit CPU\r\n▪️ USB WIFI\r\n▪️ Monitor 19\" LED\r\n▪️ Keyboard Mouse RGB\r\n▪️ Kabel CPU & Kabel VGA/HDMI\r\n▪️ Packing Kayu\r\n\r\nPengiriman sudah termasuk Packing Kayu dan Wrapping Tebal Jaminan agar aman di perjalanan \r\nHappy Shopping 😉', 3, 0, 1),
(13, 'PC Gaming New Fullset Core I5/8GB/Vga 2Gb/LED19inc', 'https://down-id.img.susercontent.com/file/id-11134207-7r98v-lmo1b8inm4yz8b.webp', 2600000, 15, 'Cpu berkualitas murah meriah guys cocok gaming rendering design\r\n\r\nSpek \r\nCore i5 750/760\r\nMainboard chipset intel H55 \r\nRam ddr3 8 Gb PC 12600 Hynix\r\nHdd 500gb sata seagate Sata\r\nVga Gforce  2GB Ddr3 HM 4 gb\r\nCase Atx Gaming series\r\nPower Suply \r\nLed 19 Inc HDMI Ready\r\n\r\n\r\n\r\n*FREE WIFI\r\n*KEYBOARD MOUSE\r\n*FREE Fan (untuk Case Turbine X7/Simbadda Hitam)\r\n\r\nAplikasi\r\nWin 10 64 bit\r\nAdobe\r\nCoreldraw\r\nPhotoshop\r\nModzila \r\nDll\r\n\r\nGame \r\nPro evolution soccer (PES)\r\nPubg\r\nMobile legend\r\nFree fire\r\nDota \r\nPointblank\r\nDll bisa request\r\n\r\nGARANSI FULL 1 TAHUN', 3, 0, 1),
(14, 'JOGGER FLASH GRAY JOGGER GLOW IN THE DARK FLASH', 'https://down-id.img.susercontent.com/file/842a65eac5f4b6b77ec3555d206b5735.webp', 185000, 10, 'PRE ORDER 4 - 5 HARI\r\n\r\nColor : Gray\r\nMaterial : Polyester\r\nSize XS S M L\r\n\r\n\r\nSize = Hip - Waist - Length\r\n\r\nXS = 92cm | 59-68cm | 94cm\r\nS = 96cm | 63-72cm | 95cm\r\nM = 100cm | 67-76cm | 96cm\r\nL = 104cm | 71-81cm | 97cm', 4, 0, 1),
(15, 'Songkok / Peci RGB Nusantara Viral (Pre-Order)', 'https://down-id.img.susercontent.com/file/id-11134207-7r991-lsrtyq0t6iic84.webp', 150000, 20, 'Pre-Order Peci / Songkok RGB Nusantara Viral Pelopor Peci RGB (Pelopor Peci RGB)\r\n\r\nBARANG PRE-ORDER DIKIRIM MAKSIMAL DALAM 10 HARI UNTUK VERSI NON KABEL DAN UNTUK VERSI KABEL MAKSIMAL 4 HARI \r\nTIDAK MENERIMA CANCEL JIKA SUDAH ORDER KARENA KELAMAAN, KARENA MEMANG BARANG PRE-ORDER BUKAN READY STOK\r\n\r\nGAMBAR HANYALAH ILUSTRASI LAMPU TIDAK FULL \r\n\r\nuntuk tampilan foto asli ada di gambar kedua dan video produk (lebih bagus karena difoto hanya untuk contoh).\r\n\r\nPeci RGB adalah peci atau songkok yang memiliki lampu LED berwarna-warni yang dapat berubah-ubah sesuai dengan keinginan Anda. Peci rgb dapat dihubungkan dengan ponsel atau komputer melalui kabel USB atau Bluetooth dan dikontrol dengan aplikasi khusus. Peci rgb cocok untuk Anda yang ingin tampil beda dan modern saat Ramadhan atau hari-hari Biasa.\r\n\r\nPeci RGB ini tidak ready stok karena proses pembuatannya manual jadi hanya Preorder saja.\r\nAda 2 Varian dengan baterai dan dengan kabel data yang disambungkan ke powerbank untuk daya.\r\nsaat ini hanya tersedia hanya varian untuk varian kabel data karena susahnya mencari sparepart baterai yang tipis dan harganya terjangkau untuk meminimalkan harga. \r\n\r\nIsi dalam paket pembelian :\r\n1. Peci yang sudah dirakit Lampu LED.\r\n2. Kabel USB untuk menghidupkan Lampu LED nya.\r\n3. Remote Lampu (dapat diganti dengan HP yang ada IR Blasternya).\r\n\r\nPeci RGB memiliki kelebihan dan kekurangan yang dapat dipertimbangkan sebelum Anda membelinya. Berikut ini adalah beberapa kelebihan dan kekurangan Peci RGB :\r\n\r\nKelebihan:\r\n- Peci RGB dapat menampilkan warna-warna yang bervariasi dan menarik sesuai dengan selera Anda.\r\n- Peci RGB cocok untuk Anda yang ingin tampil beda dan modern saat Ramadhan atau hari-hari biasa.\r\n\r\nKekurangan:\r\n- Peci RGB memerlukan alat tambahan seperti kabel USB, Bluetooth, atau aplikasi khusus untuk mengatur warna dan polanya.\r\n- Peci RGB mungkin kurang nyaman untuk dipakai karena adanya led strip di dalamnya. \r\n- Peci RGB tidak disarankan dibawa ke masjid karena dapat menggangu jamaah yang lain.\r\n\r\nPENTING !!! PANDUAN UKURAN PECI\r\nNO. 1 = LINGKAR KEPALA 51cm\r\nNO. 2 = LINGKAR KEPALA 52cm\r\nNO. 3 = LINGKAR KEPALA 53cm\r\nNO. 4 = LINGKAR KEPALA 54cm\r\nNO. 5 = LINGKAR KEPALA 55cm\r\nNO. 6 = LINGKAR KEPALA 56cm\r\nNO. 7 = LINGKAR KEPALA 57cm\r\nNO. 8 = LINGKAR KEPALA 58cm\r\nNO. 9 = LINGKAR KEPALA 59cm\r\nNO. 10 = LINGKAR KEPALA 60cm\r\n\r\nHARAP DIVIDEO SAAT UNBOXING SEBAGAI BUKTI UNTUK MELAKUKAN RETUR/BARANG KURANG\r\n\r\nAPABILA ADA YANG INGIN DITANYAKAN SILAHKAN CHAT SAYA MELALUI FITUR CHAT SELLER \r\nTerimakasih dan HAPPY SHOPPING', 4, 0, 1),
(16, '(33cm) pensil HB jumbo Sanrio pensil besar cinnamorol melody kuromi pompurin', 'https://down-id.img.susercontent.com/file/id-11134207-7r98o-lkq4x8alq70j36.webp', 30000, 0, '🚛  pengiriman plg cepat hari itu juga dikirim (untuk transaksi di bawah pk. 13.00) plg lama H+1 HARI KERJA \r\n\r\n👩💻  Update pelacakan resi sekitar jam 9-12 malam jadi please jangan chat terus menerus untuk tanyak kok belum dikirim\r\n\r\n🎁 Barang selalu kami kirim dalam keadaan baik, untuk packing yang lebih aman anda bisa tambahkan Bubble Wrap ke keranjang. Untuk menjaga kenyamanan bersama dimohon untuk membuat video pada saat unboxing. \r\nKlaim retur maupun refund karena barang rusak dilayani dalam waktu 1x24 jam setelah barang diterima dengan menunjukkan bukti video unboxing.\r\n\r\n❌ Mohon untuk chat dulu apabila ada komplain sebelum memberikan penilaian\r\n\r\n⚠ Apabila memberi bintang 1/2/3 tanpa ada konfirmasi/alasan yang jelas maka tidak akan kami layani kembali\r\n\r\n❤ Membeli = Menyetujui ketentuan kami', 5, 0, 1),
(17, 'Penghapus Buah Alat Tulis Kreatif,Besar Eraser Wortel Stroberi Mangga Lucu', 'https://down-id.img.susercontent.com/file/sg-11134201-7rbk9-lo5bu6t74fj9db.webp', 10000, 0, 'Nomor item: Penghapus buah\r\nTujuan: menghapus kata-kata\r\nSpesifikasi: wortel, strawberry, mangga, \r\n\r\nHubungan pemberian hadiah yang berlaku: teman, anak-anak, teman sekelas\r\nHari libur yang berlaku: Hari Tahun Baru, Hari Anak\r\nBentuk: buah', 5, 0, 1),
(18, 'TAS SEKOLAH FREEFIRE BOOYAH', 'https://down-id.img.susercontent.com/file/id-11134207-7rask-m0czluhkbtqf02.webp', 40000, 10, 'SELAMAT DATANG DITOKO KAMI\r\nRANSEL ANAK TERBARU MOTIF FF\r\n\r\n              --MATERIAL--\r\n - Jenis Tas Ransel Anak.\r\n - 100% Produk Lokal / Handmade.\r\n - Ukuran Tas  :  42cm X 15cm X 32cm.\r\n - Model           :  Ransel \r\n - Bahan           :  Kanvas ( D300)\r\n - 100% Produk Lokal / Handmade.\r\n - Kondisi :  100% Baru.\r\n - Dropship 100% Aman.\r\n - Produk ini Bisa Bayar Ditempat ( COD )\r\n\r\nBahan INI  Berkualitas Dengan Jahitan Rapi\r\n\r\nHadir Dengan Gaya Casual Stylish\r\n\r\nPanjang Tali Bisa Disesuaikan Sesuai Keinginan\r\n\r\nDapat Dibersihkan Dengan Sikat Lembut Secara Merata\r\n\r\nSemua produk lokal yang dibuat oleh pengrajin lokal dengan keakuratan gambar 80-90%\r\n\r\nBarang Kami Ready Silahkan Klik Tambah Ke Troli', 5, 0, 1),
(19, 'TUMBLER BAYGON KAPASITAS 400 ML', 'https://down-id.img.susercontent.com/file/id-11134207-7r98q-lqx0jdzvg6t5f8.webp', 70000, 15, 'TUMBLER THERMOS BAYGON KAPASITAS 400 ML VIRAL DAN UNIK UNTUK KADO GIFT\r\n\r\nTumbler Thermos yang Unik dan Viral, hasil print cerah dan tidak pecah. \r\nKapasitas 400 ml dengan material Stainless Steel anti karat. \r\nVakuum untuk air panas atau dingin dengan ketahanan maksimla 6-8 jam.\r\n\r\nTumbler ini sangat cocok dijadikan untuk kado kepada teman saudara dan lainnya\r\nYuk buruan dibeli supaya tidak ketinngalan trend ini !!\r\n\r\nTERMOS Baygon\r\nUkuran : 400 ML\r\nDiameter : 25 x 8 x 8\r\nTahan Panas Dan Dingin yang cukup lama', 5, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `shop`
--

CREATE TABLE `shop` (
  `id` int(11) NOT NULL,
  `shop_name` varchar(255) NOT NULL,
  `shop_photo` varchar(255) NOT NULL,
  `check_toko` tinyint(1) NOT NULL DEFAULT 0,
  `checked_product` int(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shop`
--

INSERT INTO `shop` (`id`, `shop_name`, `shop_photo`, `check_toko`, `checked_product`) VALUES
(1, 'Dwi Shop', 'https://logos.textgiraffe.com/logos/logo-name/Dwi-designstyle-love-panda-m.png', 0, 0),
(2, 'Monza Shop', 'https://logos.textgiraffe.com/logos/logo-name/Monja-designstyle-smoothie-m.png', 0, 0),
(3, 'Thariq Computer', 'https://scontent.fkno3-1.fna.fbcdn.net/v/t39.30808-6/277561657_359388052871527_4799158799313430345_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=jQd1QlpuyQQQ7kNvgG57I3v&_nc_zt=23&_nc_ht=scontent.fkno3-1.fna&_nc_gid=AH4WQY31olsNytoM8dI0YoY&oh=00_AYDJlHZ', 0, 0),
(4, 'Mira Shop', 'https://i.pinimg.com/736x/2b/0e/28/2b0e28087bf2e25bebad34abb1b6d645.jpg', 0, 0),
(5, 'Josh Shop', 'https://down-cvs-id.img.susercontent.com/d79a55ca6301a113a60406023da6d89e_tn.webp', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `shop_id` (`shop_id`) USING BTREE;

--
-- Indexes for table `shop`
--
ALTER TABLE `shop`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `shop`
--
ALTER TABLE `shop`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`shop_id`) REFERENCES `shop` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
