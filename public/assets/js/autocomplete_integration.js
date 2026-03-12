document.addEventListener("DOMContentLoaded", function () {

  const dataWbp = [
    { nama: "ZAINAL IRFAN FAHMI BIN MOH. RUGIK" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "363", alamat: "DSN. GLUGUR I DS. PALENGAAN LAOK KEC. PALENGAAN KAB. PAMEKASAN", masa_pidana_2per3: "2028-10-13"},
    { nama: "JUMAIRI BIN MOHAMMAD ABDUL KARIM (ALM)" , klasifikasi: "Narapidana", kasus: "Pornografi" , pasal: "29", alamat: "DSN. GANGSIAN RT/RW 013/003 KEL. BUNBARAT KEC. RUBARU KAB. SUMENEP", masa_pidana_2per3: "2024-12-25"},
    { nama: "MURHAMIN BIN BUSAHA" , klasifikasi: "Narapidana", kasus: "Korupsi" , pasal: "2 Ayat (1) Jo Pasal 18", alamat: "DUSUN TEMOR LORONG RT 001 RW 001 DESA KALIMOOK KEC KALIANGET KAB SUMENEP", masa_pidana_2per3: "2020-10-04"},
    { nama: "SALAMET BIN SUWI" , klasifikasi: "Narapidana", kasus: "Pembunuhan" , pasal: "340 JO PSAL 55", alamat: "DESA SENTOL LAOK KEC.PRAGAAN KAB SUMENEP", masa_pidana_2per3: "2028-01-31"},
    { nama: "NITO BIN SUDAHNAN (ALM)" , klasifikasi: "Narapidana", kasus: "Pembunuhan" , pasal: "340 JO PASAL 55 ayat(1) ke-1", alamat: "DSN.BANBAN DS.CABBIYA KEC.TALANGO KAB.SUMENEP", masa_pidana_2per3: "2026-08-12"},
    { nama: "EMMAT BIN MISTAWI" , klasifikasi: "Narapidana", kasus: "Pembunuhan" , pasal: "340 JO PASAL 55", alamat: "DSN.BUNIS DS.ESSANG KEC.TALANGO KAB.SUMENEP", masa_pidana_2per3: "2027-03-23"},
    { nama: "HOTIM BIN HASAN" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "81 Ayat (3)", alamat: "Dsn. Pandian Laok, DS. Prancak, Kec. Pasongsongan, Kab. Sumenep.", masa_pidana_2per3: "2027-03-10"},
    { nama: "ETTO RIADI BIN ASIM" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "81 Ayat (1) dan (2)", alamat: "DUSUN CANDI DS.PALASA KEC.TALANGO KAB.SUMENEP", masa_pidana_2per3: "2026-04-08"},
    { nama: "SAHIR BIN KANTAR" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat(2)", alamat: "DUSUN BUNGERENG RT.03/RW.04 DS.BULLA'AN KEC.BATUPUTIH KAB.SUMENEP", masa_pidana_2per3: "2026-06-07"},
    { nama: "ERFAN BIN MASRIYA" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "114 Ayat (2)", alamat: "DUSUN TOKERBUY DESA ESSANG KEC.TALANGO KAB.SUMENEP", masa_pidana_2per3: "2027-09-17"},
    { nama: "KAILANI BIN MAHMUD" , klasifikasi: "Narapidana", kasus: "Pembunuhan" , pasal: "340", alamat: "DSN.KAJISARI RT.09/RW.05 DS.TORJEK KEC.ARJASA KAB.SUMENEP", masa_pidana_2per3: "2027-08-18"},
    { nama: "MOH. MAIMUN BIN SANAWI" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "363 Ayat (1) ke-3,ke-5", alamat: "DSN. PONJUN DS. JADDUNG KEC. PRAGAAN KAB. SUMENEP", masa_pidana_2per3: "2025-04-16"},
    { nama: "ATRAWI BIN DURRAZEK" , klasifikasi: "Narapidana", kasus: "Pembunuhan" , pasal: "340", alamat: "DSN. KOMBUNG BARAT DS. ELLAK DAYA KEC. LENTENG KAB. SUMENEP", masa_pidana_2per3: "2026-05-27"},
    { nama: "MUNIR BIN KHOZIN" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat(1)", alamat: "DSN.KOMERE DS.BATU PUTIH LAOKKEC.BATU PUTIH KAB.SUMENEP", masa_pidana_2per3: "2025-09-14"},
    { nama: "JUNAIDI ABDILLAH BIN MUCHTAR" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat(1)", alamat: "DSN.KERAJJAN DS.KEBUNAN KEC.KOTA KAB.SUMENEP", masa_pidana_2per3: "2025-01-09"},
    { nama: "HARIS BIN MI'ODDIN" , klasifikasi: "Narapidana", kasus: "Pembunuhan" , pasal: "338 JO PASAL 55 Ayat (1) ke-1", alamat: "DUSUN WAKDUAK RT.06/RW.05 DESA BELLUKRAJA KEC.AMBUNTEN KAB.SUMENEP", masa_pidana_2per3: "2027-01-01"},
    { nama: "HALILI BIN MI'ODDIN" , klasifikasi: "Narapidana", kasus: "Pembunuhan" , pasal: "338 JO PASAL 55 Ayat (1) ke-1", alamat: "DUSUN WAKDUAK RT.06/RW.05/DS,BELLUK RAJA KEC.AMBUNTEN KAB.SUMENEP", masa_pidana_2per3: "2026-05-01"},
    { nama: "MI'ODDIN BIN NIKOM" , klasifikasi: "Narapidana", kasus: "Pembunuhan" , pasal: "338 JO PASAL 55 Ayat (1) ke-1", alamat: "DUSUN WAKDUAK RT.06/RW.05/DS.BELLUK RAJA KEC.AMBUNTEN KAB.SUMENEP", masa_pidana_2per3: "2026-05-01"},
    { nama: "RAHMAN HIDAYAT BIN MOH.HASAN" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat(1)", alamat: "JL.NANGKA NO.14 KELURAHAN KARANGDUAK KEC.KOTA KAB.SUMENEP", masa_pidana_2per3: "2025-11-05"},
    { nama: "MOH.NUR HIDAYAT BIN ACHMAD SURAT" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "114 Ayat (1)", alamat: "JALAN PAHLAWAN Gg.II/53 ADS.PAMOLAKAN KEC.KOTA KAB.SUMENEP", masa_pidana_2per3: "2026-09-30"},
    { nama: "MAHDA BIN SUDAHRI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "114 Ayat(2) jo pasal 132 ayat (1)", alamat: "DSN.BATUBINTANG RT.07/RW.06 DS.NYABAKAN TIMUR KEC.BATANG-BATANG KAB.SUMENEP", masa_pidana_2per3: "2027-03-05"},
    { nama: "PUSAHRA BIN NIWAR" , klasifikasi: "Narapidana", kasus: "Pembunuhan" , pasal: "340 JO PSL 55 Ayat (1) ke-1", alamat: "DUSUN SUMBER TENGAHKELURAHAN LEBBEKKEC.PAKONG KAB.PAMEKASANDUSUN SUMBER TENGA KELURAHAN LEBBEK KEC.PAKONG KAB.PAMEKASAN", masa_pidana_2per3: "2029-02-07"},
    { nama: "BUDIYANTO BIN MADRUS" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "81 Ayat (1)", alamat: "DUSUN PAJAGUNGAN DS.PANAGAN KEC.GAPURA KAB.SUMENEP", masa_pidana_2per3: "2027-07-02"},
    { nama: "AENGSIA IKA AGUSTIN FIKASARI BINTI ABD KARIM" , klasifikasi: "Narapidana", kasus: "Korupsi" , pasal: "3 JO 18", alamat: "PERUM ASRI IGg MURAI BATU NO.07 KEL.TEMBOKREJO KEC.PURWOREJO KAB.PASURUAN", masa_pidana_2per3: "2024-03-31"},
    { nama: "AHMALI BIN SAHUR" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat(1)", alamat: "DSN.BUNIS TIMUR DS.ESSANG KEC.TALANGO KAB.SUMENEP", masa_pidana_2per3: "2027-05-06"},
    { nama: "NURYADI BIN MANTO DJARJO TUKIMAN" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat(1)", alamat: "DESA KRAJAN JOMBORAN KEC.KLATEN TENGAH KAB.KLATEN PROVINSI JAWA TENGAH", masa_pidana_2per3: "2026-11-22"},
    { nama: "K.M.ZURNI TAMAM BIN KH.HUBAIDI" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "81 Ayat (1)", alamat: "DUSUN MANJINGAN RT.03/RW.05 DS.BULLA'AN KEC.BATUPUTIH KAB.SUMENEP", masa_pidana_2per3: "2027-07-30"},
    { nama: "NURUL FATAH BIN SAIFUL BAHRI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat(1)", alamat: "DUSUN TANGSEH RT.11/RW.05 DESA KALISANGKA KEC.ARJASA KAB.SUMENEP", masa_pidana_2per3: "2025-07-23"},
    { nama: "AHMAD ZUHRA BIN ASWARI" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "363 Ayat (1) ke-4.5", alamat: "DUSUN MALAKAH DESA JADDUNG KEC.PRAGAAN KAB.SUMENEP", masa_pidana_2per3: "2026-07-22"},
    { nama: "AINUL MUTAQIN BIN AHMAD BAHRI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "114 Ayat (2)jo Pasal 132 Ayat (1)", alamat: "DUSUN DUWEK BUTER DESA DUWEK BUTIR KEC.KWANYAR KAB.BANGKALAN", masa_pidana_2per3: "2034-10-05"},
    { nama: "FARHAT BIN ACHMAD ZAINURI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat (2)jo Pasal 132 Ayat (1)", alamat: "DUSUN DUWEK BUTIR DESA DUWEK BUTIR KEC.KWANYAR KAB.BANGKALAN", masa_pidana_2per3: "2034-10-05"},
    { nama: "ALI WAFA BIN ANWAR" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "114 Ayat (2)jo Pasal 132 Ayat (1)", alamat: "DUSUN GUNUNG PENANG DS.SEDDUR KEC.PAKONG KAB,PAMEKASAN", masa_pidana_2per3: "2026-11-30"},
    { nama: "HASBULLAH BIN ABDUL MUNI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "114 Ayat (2)jo Pasal 132 Ayat (1)", alamat: "DUSUN GUWA 1 DS.TAMPOJUNG GUWA KEC.WARU KAB.PAMEKASAN", masa_pidana_2per3: "2026-03-30"},
    { nama: "SAMA' BIN NARISO" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "82 ayat (1)", alamat: "DUSUN TOROS RT.02/RW.01 DESA BABBALAN KEC.BATUAN KAB.SUMENEP", masa_pidana_2per3: "2028-07-06"},
    { nama: "RIZKI UMAR MA'RUF BIN ," , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "363 Ayat (1) ke-4", alamat: "DUSUN MASJID  DS.SAOBI KEC.KANGIYAN KAB.SUMENEP", masa_pidana_2per3: "2027-05-03"},
    { nama: "AHMAD AINUR ROFIK BIN MUNIB" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "363 Ayat (1) ke-4", alamat: "DUSUN MASJID DS.SAOBI KEC.KANGAYAN KAB.SUMENEP", masa_pidana_2per3: "2027-05-03"},
    { nama: "SAHRANI BIN MAJJANI" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "81 Ayat (1)", alamat: "DUSUN ARES TENGAH RT/RW 004/003 DS.LANJUK KEC.MANDING KAB,SUMENEP", masa_pidana_2per3: "2027-06-23"},
    { nama: "WASIL BAHRI BIN SYAIFUL BAHRI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat(1)", alamat: "DSN.MASJID DS.BANDUNGAN KEC.PAKONG KAB.PAMEKASAN", masa_pidana_2per3: "2026-08-30"},
    { nama: "MOH SUHAIDI BIN SA'AT" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "363 Ayat (1) ke-3,ke-4", alamat: "DSN.NEGGARA RT.011/RW.006 DS.BUMBUNGAN KEC.BLUTO KAB.SUMENEP", masa_pidana_2per3: "2025-03-27"},
    { nama: "BUZAINI BIN SAHWA" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "81 Ayat (1)", alamat: "DSN.BANYURABA DS.BANUAJU TIMUR KEC.BATANG-BATANG KAB.SUMENEP", masa_pidana_2per3: "2028-07-23"},
    { nama: "ALI WAFI BIN MAT" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "81 Ayat (3)", alamat: "DUSUN BARU DESA MASALIMA KEC.MASALEMBU KAB.SUMENEP", masa_pidana_2per3: "2028-08-07"},
    { nama: "SAIPI BIN MISTARI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat(2)", alamat: "DUSUN BRUMBUNG RT.003/RW.003 DESA BATU AMPAR KEC.GULUK GULUK KAB.SUMENEP", masa_pidana_2per3: "2027-01-13"},
    { nama: "ACHMAD NOER BIN BEDUH" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "81 Ayat (3)", alamat: "DUSUN BARU RT.01/RW.02 DESA MASALIMA KEC.MASALEMBU KAB.SUMENEP", masa_pidana_2per3: "2029-04-10"},
    { nama: "RONI BIN MUHAMMAD" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "363 Ayat (1) ke-4,ke-5", alamat: "DUSUN TENONAN RT.02/RW.05 DESA TENONAN KEC.MANDING KAB.SUMENEP", masa_pidana_2per3: "2026-02-11"},
    { nama: "ABD GAFFAR BIN HAMSAH" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "114 Ayat (1)", alamat: "DSN.PAJAGALAN DS.BATANG-BATANG LAOK KEC.BATANG-BATANG KAB.SUMENEP", masa_pidana_2per3: "2025-12-25"},
    { nama: "AMHAR BIN SUBADRIH" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "81 Ayat (3)", alamat: "DSN.RENGPERENG RT.003/RW.005 DS.KARDULUK KEC.PRAGAAN KAB.SUMENEP", masa_pidana_2per3: "2029-05-08"},
    { nama: "MALIKUR RAHMAN BIN BAMBANG SUKIRMAN" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "82 ayat (2)", alamat: "JL.CEMPAKA 1 RT.03 RW.07 DS.KOLOR KEC.KOTA KAB.SUMENEP", masa_pidana_2per3: "2026-05-12"},
    { nama: "MESTAWI BIN BAHRON" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "81 Ayat (3)", alamat: "DUSUN PONDOK KELOR DESA TORJEK KEC.KANGAYAN KAB.SUMENEP", masa_pidana_2per3: "2029-09-09"},
    { nama: "MOH.SOLEHUR NIAWAN BIN JUNAIDI" , klasifikasi: "Narapidana", kasus: "PEMERKOSAAN ATAU PENCABULAN" , pasal: "285", alamat: "DUSUN BLUMBANG DESA PRAGAAN KEC.PRAGAAN KAB.SUMENEP", masa_pidana_2per3: "2026-05-20"},
    { nama: "CONGGI BIN WAHAB" , klasifikasi: "Narapidana", kasus: "Pembunuhan" , pasal: "338", alamat: "DSN II KAMPUNG MAKASSAR RT.011 RW.04 DS.SASEEL KEC.SAPEKEN KAB.SUMENEP", masa_pidana_2per3: "2030-04-20"},
    { nama: "DIDIK RASYIDI BIN RASIT" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat(1)", alamat: "DUSUN BATUJARAN DS.PRAGAAN DAYA KEC.PRAGAAN KAB.SUMENEP", masa_pidana_2per3: "2027-04-20"},
    { nama: "BURHANUDDIN BIN HAMIDUK" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "81 Ayat (3)", alamat: "DSN.UJUNG RT.01 RW.01 DS.PAGERUNGAN KECIL KEC.SAPEKEN KAB.SUMENEP", masa_pidana_2per3: "2029-10-01"},
    { nama: "SILUNG BIN LATIP" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "81 Ayat (2)", alamat: "DSN.LEMBANA RT.003 RW.003 DS.BANCAMARA KEC.DUNGKEK KAB.SUMENEP", masa_pidana_2per3: "2029-05-14"},
    { nama: "BUKAT BIN SATRABI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat (2)jo Pasal 132 Ayat (1)", alamat: "DSN.KARANG ROKEM DS.BILANGAN KEC.BATANG-BATANG KAB.SUMENEP", masa_pidana_2per3: "2026-02-26"},
    { nama: "MUNTAHA BIN SAHID" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "82 ayat (1)", alamat: "DSN.TENONAN BARAT RT.4 RW.4 DS.TENONAN KEC.MANDING KAB.SUMENEP", masa_pidana_2per3: "2026-10-16"},
    { nama: "BAIHAQI BIN AS'AD" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "81 Ayat (3)", alamat: "DSN.PANDIAN LAOK  DS PRANCAK KEC.PASONGSONGAN KAB.SUMENEP", masa_pidana_2per3: "2028-06-06"},
    { nama: "KARIMULLAH BIN H MAHFUD" , klasifikasi: "Narapidana", kasus: "Pembunuhan" , pasal: "338", alamat: "DSN.PANDIAN LAOK RT.002 RW.003 DS.PRANCAK KEC.PASONGSONGAN KAB.SUMENEP", masa_pidana_2per3: "2029-02-16"},
    { nama: "JIBNO BIN ENEK" , klasifikasi: "Narapidana", kasus: "Pembunuhan" , pasal: "340", alamat: "DSN.MUNGGUK RT.001 RW.005 DS.JURUAN DAYA KEC.BATU PUTIH KAB.SUMENEP", masa_pidana_2per3: "2029-02-17"},
    { nama: "RUDI HERMANTO BIN SUWADI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "114 Ayat (2)", alamat: "DUSUN PODAK DS.KACONGAN KEC. KOTA KAB.SUMENEP", masa_pidana_2per3: "2029-03-12"},
    { nama: "VILA TOFIL AZAM FAZA BIN ACH JAKFAR" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat(2)", alamat: "DSN.DEMOK DS.ANGON ANGON KEC.ARJASA KAB.SUMENEP", masa_pidana_2per3: "2028-06-29"},
    { nama: "MUHAMMAD TIJANI BIN MOH MUNIR" , klasifikasi: "Narapidana", kasus: "Pembunuhan" , pasal: "338", alamat: "DSN.ONGGE'EN RT.012 RW.003 DS.PRENDUAN KEC.PRAGAAN KAB.SUMENEP", masa_pidana_2per3: "2027-03-26"},
    { nama: "DENI NORDIYANSAH BIN SAHEDI" , klasifikasi: "Narapidana", kasus: "Penipuan" , pasal: "378", alamat: "JL.TEUKU UMAR RT.001 RW.004 DS.PANDIAN  KEC.KOTA KAB.SUMENEP", masa_pidana_2per3: "2026-03-19"},
    { nama: "RAIS BIN MUNAAM" , klasifikasi: "Narapidana", kasus: "Kekerasan terhadap Wanita & Anak" , pasal: "81 Ayat (1) jo pasal 76 E", alamat: "DSN.KENGKANG  DS.GENDANG BARAT KEC.GAYAM KAB.SUMENEP", masa_pidana_2per3: "2027-04-07"},
    { nama: "TIGOR SETIAWAN BIN ATMAWI" , klasifikasi: "Narapidana", kasus: "Kekerasan Seksual" , pasal: "6 huruf b", alamat: "DSN.PERRENG TALE RT.03 RW.04 DS.PARSANGA KEC.KOTA KAB.SUMENEP", masa_pidana_2per3: "2027-11-24"},
    { nama: "FATHOL BAHRI BIN PIT YUSUF" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat(2)", alamat: "DSN.BEDDI DS.MARENGAN LAOK KEC.KALIANGET KAB.SUMENEP", masa_pidana_2per3: "2027-05-20"},
    { nama: "MOH ILMI FAUZAN BIN MATSA'IE" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (2)", alamat: "DSN.SUMBER DS.TORJEK KEC.KANGAYAN KAB.SUMENEP", masa_pidana_2per3: "2027-05-26"},
    { nama: "ACHMAD SANTOSO BIN H.YASET AZIZ" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat(1)", alamat: "JL.MANIKAM RT.003 RW.004 KEL.BANGSELOK KEC.KOTA KAB.SUMENEP", masa_pidana_2per3: "2026-09-22"},
    { nama: "SUHARTONO BIN SAHI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "114 Ayat (1)", alamat: "DSN.BARAT LORONG RT.006 RW.003 DS.BLUTO KEC.BLUTO KAB.SUMENEP", masa_pidana_2per3: "2029-01-08"},
    { nama: "MOHAMMAD ASY'ARI BIN AMAN" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "81 Ayat (3) jo pasal 76 D", alamat: "DSN.SLAT BRATA RT.002 RW.005 DS.PRAMBANAN KEC.GAYAM KAB.SUMENEP", masa_pidana_2per3: "2031-05-08"},
    { nama: "JEFRI HERMANTO BIN MISNAWI" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "365 Ayat (1)", alamat: "DSN.KALOWANG RT.03 RW.06 DS.KALIKATAK KEC.ARJASA KAB.SUMENEP", masa_pidana_2per3: "2028-06-11"},
    { nama: "R.DWI DHARMA PUTRA BIN IMAM SANTOSO (Alm)" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat(1)", alamat: "JLN HOSCOKROAMINOTO KEL.KEPANJIN KEC.KOTA KAB.SUMENEP", masa_pidana_2per3: "2029-11-23"},
    { nama: "TAUFIQURRAHMAN BIN MOHASAN" , klasifikasi: "Narapidana", kasus: "Senjata Tajam/ Senjata Api/ Bahan Peledak" , pasal: "2 ayat (1)", alamat: "DSN.LENGKONG DEJEH RT.001 RW.005 DS.BRAGUNG KEC.GULUK-GULUK KAB.SUMENEP", masa_pidana_2per3: "2029-11-13"},
    { nama: "DIKI SETIAWAN BIN AHMADI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat(1)", alamat: "DSN.KEMIRI RT.003 RW.002 DS.KEMIRI KEC.SINGOJURUH KAB.BANYUWANGI", masa_pidana_2per3: "2026-07-21"},
    { nama: "ACH.BASAIRUL ABSAR BIN MOH.HARIS" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "81 Ayat (1) jo pasal 76 D", alamat: "DUSUN PARSE RT 001 RW 001, DESA DUKO, KEC ARJASA, KAB SUMENEP", masa_pidana_2per3: "2026-10-10"},
    { nama: "ACHMAD ZAINURI BIN MUKLAS" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (2)JUNCTO PASAL 132 AYAT (1)", alamat: "DSN.PASAR DS.MLATEN KEC.NGULING KAB.PASURUAN", masa_pidana_2per3: "2027-09-20"},
    { nama: "SOLEHUDIN BIN SAHRI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (2)JUNCTO PASAL 132 AYAT (1)", alamat: "DSN.KEBONAGUNG KEL.SUKOLELO KEC.PRIGEN KAB.PASURUAN", masa_pidana_2per3: "2028-05-23"},
    { nama: "AHMAD FAQI ARIZONA BIN ASMAWI" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "81 Ayat(1)", alamat: "DSN DUKO TENGAH RT 03, RW 03, DS DUKO, KEC ARJASA, KAB SUMENEP", masa_pidana_2per3: "2026-04-12"},
    { nama: "DARWIS BIN SADIN" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "363 Ayat(1) ke-3,ke-4", alamat: "DSN LEGUNG RT 02 RW 04, DS LEGUNG BARAT, KEC BATANG BATANG, KAB SUMENEP", masa_pidana_2per3: "2027-04-27"},
    { nama: "MAHFUD BIN SUNARTO" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat(1)", alamat: "DSN TEMOR LORONG RT.20 RW.09 DS.BLUTO KEC.BLUTO KAB.SUMENEP", masa_pidana_2per3: "2026-09-24"},
    { nama: "TRISNO HADI BIN SIMAN" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (1)JUNCTO PASAL 132 AYAT (1)", alamat: "DSN TAMBIAYU,DS AENGDAKE,KEC BLUTO,KAB SUMENEP", masa_pidana_2per3: "2026-04-21"},
    { nama: "MOHAMMAD FAIZAL BIN MOH RAMLI" , klasifikasi: "Narapidana", kasus: "Korupsi" , pasal: "3 JUNCTO  PSL 18", alamat: "DSN KALANG LANGGAR RT 07,RW 04,DS.DAPENDA, KEC.BATANG-BATANG KAB SUMENEP", masa_pidana_2per3: "2026-01-09"},
    { nama: "AGUS RIBUT SUSANTO BIN SUKARNO (ALM)" , klasifikasi: "Narapidana", kasus: "Korupsi" , pasal: "3 Jo Psl 18", alamat: "JL.DR CIPTO VII BLOK H-23 RT.001 RW 006 DSKOLOR KEC KOTA KAB SUMENEP", masa_pidana_2per3: "2026-09-11"},
    { nama: "ASNI BIN SANIKA (ALM)" , klasifikasi: "Narapidana", kasus: "Penipuan" , pasal: "378", alamat: "DSN TAMBAK RT 010 RW 002 DS GING GING KEC BLUTO KAB SUMENEP", masa_pidana_2per3: "2027-08-15"},
    { nama: "M RAMLI BIN SANDER" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "363 Ayat(1) ke-1,ke-3,ke-4", alamat: "DSN GUNGGUNG DS GADU TIMUR KEC GANDING KAB SUMENEP", masa_pidana_2per3: "2026-03-14"},
    { nama: "RASULI BIN BUHASIN" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (1)", alamat: "JL.CENDANA NO.01RT.04RW.07 DS.KOLOR KEC.KOTA KAB.SUMENEP", masa_pidana_2per3: "2026-08-23"},
    { nama: "FAWAID BIN MATSULIH" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "363 Ayat (1) KE 5", alamat: "DSN.LEGUNG RT.011 RW.003 DS.PAYUDAN DUNDANG KEC.GULUK-GULUK KAB.SUMENEP", masa_pidana_2per3: "2027-12-22"},
    { nama: "SAHIRUDDIN BIN SALE" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "363 Ayat(1) ke-1,ke-3,ke-4", alamat: "DSN BANANGGER BARAT DS GADU TIMUR KEC GANDING KAB SUMENEP", masa_pidana_2per3: "2025-10-21"},
    { nama: "SUDIARTO BIN MUHAMMAD ZAINI" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "82 Ayat(2),AYAT (4) JUNCTO PASAL 76E", alamat: "JL.YUDONEGORORT.08/RW.04 DS.KEBONAGUNG KEC.KOTA KAB.SUMENEP", masa_pidana_2per3: "2033-07-19"},
    { nama: "ABD HADI RAHMAN BIN ABD RAHEM" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "114 Ayat (2)", alamat: "DSN KOLOR DS ROMBASAN KEC PRAGAAN KAB SUMENEP", masa_pidana_2per3: "2029-05-12"},
    { nama: "HALILI BIN SENAR" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "76D JO PSL 81 AYAT (3)", alamat: "DSN KLABAAN RT 01 RW 05 DS GULUK GULUK KEC GULUK GULUK KAB SUMENEP", masa_pidana_2per3: "2031-05-19"},
    { nama: "HERUL BIN SANIMAN" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (1)", alamat: "DSN CAMPOR RT 07 RW 04 DS CAMPOR BARAT KEC AMBUNTEN KAB SUMENEP", masa_pidana_2per3: "2027-10-08"},
    { nama: "HENDRA JULIAN PUTRA BIN ABU YASID" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "82 Ayat(1)", alamat: "DSN.SEMPANGAN RT 05 RW.04 DS.KALIANGET BARAT KEC.KALIANGET KAB.SUMENEP", masa_pidana_2per3: "2029-02-11"},
    { nama: "SUPRIYADI BIN SUWAHNAN" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "82 Ayat(1) JUNCTO PASAL 76E", alamat: "DSN BUNOT RT 03 RW 01 DS JULUK KEC SARONGGI KAB SUMENEP", masa_pidana_2per3: "2029-09-01"},
    { nama: "HODRIYANTO BIN H.NURHASYIM" , klasifikasi: "Narapidana", kasus: "Pembunuhan" , pasal: "340", alamat: "DSN.GABER RT.04 RW.04 DS.SODDARA KEC.PASONGSONGAN KAB.SUMENEP", masa_pidana_2per3: "2034-02-17"},
    { nama: "NURUL KHOLIS BIN SHODIK" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "81 Ayat(3)", alamat: "JL IMAM BONJOL NO 63 RT 01 RW 01 DS PAMOLOKAN KEC KOTA SUMENEP KAB SUMENEP", masa_pidana_2per3: "2032-02-10"},
    { nama: "ACH JAUZA BIN JATIM" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "81 Ayat(3)", alamat: "DSN LISUN RT 10 RW 01 DS KALIANGET TIMUR KEC KALIANGET KAB SUMENEP", masa_pidana_2per3: "2035-11-12"},
    { nama: "ABD RAHEM BIN MATHAWI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (2)", alamat: "DSN MANJINGAN RT 02 RW 04 DS BULLA'AN KEC BATU PUTIH KAB SUMENEP", masa_pidana_2per3: "2029-08-26"},
    { nama: "IRHAS SYAMLAN BIN GES SYAMLAN" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (1)", alamat: "DSN DUKO TIMUR DS PAKONG KEC PAKONG KAB PAMEKASAN", masa_pidana_2per3: "2028-01-13"},
    { nama: "RISNO BIN MINAWI" , klasifikasi: "Narapidana", kasus: "Kekerasan dalam Rumah Tangga" , pasal: "44 AYAT(3)", alamat: "DSN TALARAN RT 04 RW 04 DS JURUAN DAYA KEC BATU PUTIH KAB SUMENEP", masa_pidana_2per3: "2032-05-02"},
    { nama: "SUNDARI BIN HAMDAN" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "114 Ayat (2)", alamat: "DSN ANYAR RT 02 RW 02 DS KALIANYAR KEC ARJASA KAB SUMENEP", masa_pidana_2per3: "2029-01-04"},
    { nama: "KAHFAD MAHYUSIN BIN HAMDANI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat (1)", alamat: "DSN KETTEP RT 12 RW 07 DS ARJASA KEC ARJASA KAB SUMENEP", masa_pidana_2per3: "2025-12-05"},
    { nama: "MALTUP BIN ABDULLAH" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (1)", alamat: "DSN ARTAKOH DS PAYUDAN DALEMAN KEC GULUK GULUK KAB SUMENEP", masa_pidana_2per3: "2027-10-02"},
    { nama: "EKO NUGROHO BIN BASUKI RACHMAD" , klasifikasi: "Narapidana", kasus: "Perbankan" , pasal: "49 AYAT (1) huruf a", alamat: "DSN TENGAH DS PEGANTENAN KEC PEGANTENAN KAB PAMEKASAN", masa_pidana_2per3: "2028-05-22"},
    { nama: "NAUFAL BIN ZAINAL ARIFIN" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "81 Ayat(1)", alamat: "DSN BUKABU RT 03 RW 02 DS BUKABU KEC AMBUNTEN KAB SUMENEP", masa_pidana_2per3: "2031-01-14"},
    { nama: "JEMMY RAHMATULLAH BIN ABDUL GANI (ALM)" , klasifikasi: "Narapidana", kasus: "Penggelapan" , pasal: "372", alamat: "JL.KERAPU 5A DS.KOLOR KEC.KOTA KAB.SUMENEP", masa_pidana_2per3: "2026-02-15"},
    { nama: "WARID BIN NORHATIM" , klasifikasi: "Narapidana", kasus: "Penggelapan" , pasal: "372", alamat: "DSN.LANGGUNDI TIMUR RT.003 RW.001 DS.LEMBUNG TIMUR KEC.LENTENG KAB.SUMENEP", masa_pidana_2per3: "2026-09-10"},
    { nama: "MOH ELKIT BIN MARSUKI" , klasifikasi: "Narapidana", kasus: "Pembunuhan" , pasal: "338", alamat: "DSN BARUNAH RT 03 RW 02 DS GADDING KEC MANDING KAB SUMENEP", masa_pidana_2per3: "2034-06-06"},
    { nama: "RENDRA FEBRI CAHYADI BIN JONI" , klasifikasi: "Narapidana", kasus: "Kekerasan Seksual" , pasal: "6 huruf b jo pasal 15 ayat (1) huruf a", alamat: "DSN TAROMAN RT 01 RW 12 DS BATANG BATANG DAYA KEC BATANG BATANG KAB SUMENEP", masa_pidana_2per3: "2026-08-16"},
    { nama: "SYAIFUL BAHRI BIN MOH HOSEN" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (1)", alamat: "DSN TENGAH RT 01 RW 01 DS KETUPAT KEC RAAS KAB SUMENEP", masa_pidana_2per3: "2026-10-01"},
    { nama: "HENDRA FIRMANSYAH BIN FIRMAN TAUFIK" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (1)", alamat: "JL MUSTIKA NO 06 KEL BANGSELOK KEC KOTA KAB SUMENEP", masa_pidana_2per3: "2027-04-28"},
    { nama: "IQBAL FAHROBI BIN RUSDIYANTO" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (1)JUNCTO PASAL 132 AYAT (1)", alamat: "Jl.RADEN PATAH 1145 LINGKUNGAN KEBONDALEM RT.002 RW.026, DS.KEPATIHAN KEC.KALIWATES KAB.JEMBER", masa_pidana_2per3: "2025-07-25"},
    { nama: "SULTANI RAYHAN LUTFI BIN MUHAMMAD LUTFI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (1)JUNCTO PASAL 132 AYAT (1)", alamat: "JLN. WAHID HASYIM, GG. 17/99, RT/RW. 002/022, DS. KEPATIHAN. KEC. KALIWATES, KAB. JEMBER.", masa_pidana_2per3: "2025-07-25"},
    { nama: "FAIZAL ADITYA KURNIAWAN BIN SUKRAM" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (1)JUNCTO PASAL 132 AYAT (1)", alamat: "JL. PAJAJARAN VIII/127, LINGK. SADENGAN, RT/RW. 006/023, DS. KEBONSARI, KEC. SUMBERSARI, KAB. JEMBER", masa_pidana_2per3: "2027-05-05"},
    { nama: "HENDRA GUNAWAN BIN MOH ALI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (1)", alamat: "DSN LENGKONG BARAT RT 01 RW 02 DS BRAGUNG KEC GULUKGULUK KAB SUMENEP", masa_pidana_2per3: "2027-01-03"},
    { nama: "MOH AINUR RAHMAN BIN ACH RIFAI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat (1)", alamat: "JL GARUDA RT 03 RW 02 DS PANDIAN KEC KOTA KAB SUMENEP", masa_pidana_2per3: "2028-06-13"},
    { nama: "MUSTAFA AFIF BIN MUSAINO" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat (1) juncto Pasal 132 Ayat (1)", alamat: "JL BURUNBUNG RT 06 RW 06 DS PALIAT KEC SAPEKEN KAB SUMENEP", masa_pidana_2per3: "2025-10-17"},
    { nama: "JUHARIYANTO BIN HALIDIN" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "76D ", alamat: "DSN PASAR DAYA RT 05 RW 05 DS TALANGO KEC TALANGO KAB SUMENEP", masa_pidana_2per3: "2032-06-17"},
    { nama: "SAMSURI BIN DAWI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (1)", alamat: "DSN SOKON RT 09 RW 07 DS JADUNG KEC DUNGKEK KAB SUMENEP", masa_pidana_2per3: "2027-08-14"},
    { nama: "ASAN BIN MARHAWAN" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (1)", alamat: "DSN TAROMAN RT 002 RW 027, DS GAPURANA, KEC TALANGO KAB, SUMENEP", masa_pidana_2per3: "2027-11-13"},
    { nama: "ARFAN ROFIQI BIN SARKAWI" , klasifikasi: "Narapidana", kasus: "Kekerasan dalam Rumah Tangga" , pasal: "44 Ayat (3)", alamat: "DSN BIRAMPAK RT 006 RW 008 DS JENANGGER KEC BATANG-BATANG KAB SUMENEP", masa_pidana_2per3: "2034-10-05"},
    { nama: "BAMBANG EKO ISWANTO BIN ACH. JUNAIDI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "114 AYAT (2)", alamat: "Dusun Bhaba RT 002 RW 014 Desa Palasa Kec. Talango Kab. Sumenep", masa_pidana_2per3: "2030-03-04"},
    { nama: "ZAINUDDIN BIN MARHATIB" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (1)JUNCTO PASAL 132 AYAT (1)", alamat: "DSN KLAMPOK RT 04 RW 04 DS CENLECEN KEC PAKONG KAB PAMEKASAN", masa_pidana_2per3: "2028-07-04"},
    { nama: "MOH FIKRI SUAIDI BIN MOH SA'I" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (1)JUNCTO PASAL 132 AYAT (1)", alamat: "DSN BIRSA RT 03 RW 01 DS BAKEONG KEC GULUK GULUK KAB SUMENEP", masa_pidana_2per3: "2028-07-04"},
    { nama: "UMAM SYAHRUL BIN MUNIRI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat (1)", alamat: "DS PAKANDANGAN TENGAH KEC BLUTO KAB SUMENEP", masa_pidana_2per3: "2027-10-03"},
    { nama: "KEVIN REYHAN MAGHFIRA PUTRA BIN FIRMAN JAUHARI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (1) UU RI NO.35/2009", alamat: "DSN PERENG TALERT 04 RW 04 DS PARSANGA KEC KOTA KAB SUMENEP", masa_pidana_2per3: "2026-03-01"},
    { nama: "AHMAD ZAHROINI BIN MAT SA'WAN" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (1)", alamat: "DSN GANG ASEM SELATAN DS GULUK GULUK KEC GULUK GULUK KAB SUMENEP", masa_pidana_2per3: "2026-04-07"},
    { nama: "KAMSIH BIN WAPIN" , klasifikasi: "Tahanan", kasus: "Perlindungan Anak" , pasal: "81 AYAT (1)", alamat: "DSN LEBAK RT 01 RW 02 DS PASONGSONGAN KEC PASONGSONGAN KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "HOIRIYAH BINTI MITRAD" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat (1)", alamat: "JL PELABUHAN KERTASADA DS KERTASADA KEC KALIANGET KAB SUMENEP", masa_pidana_2per3: "2026-05-23"},
    { nama: "M MU'IS BIN DULLATIF" , klasifikasi: "Narapidana", kasus: "Penipuan" , pasal: "378", alamat: "DSN BRAKAS LAOK DS GULUK GULUK KEC GULUK GULUK KAB SUMENEP", masa_pidana_2per3: "2025-10-26"},
    { nama: "AGUS HARIYANTO BIN BUNAWI" , klasifikasi: "Narapidana", kasus: "Kekerasan dalam Rumah Tangga" , pasal: "44 AYAT(3)", alamat: "JL RAYA GAPURA RT 01 RW 01 DS PABERASAN KEC KOTA KAB SUMENEP", masa_pidana_2per3: "2031-07-27"},
    { nama: "AGUS BIN ATMAWI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (2)JUNCTO PASAL 132 AYAT (1)", alamat: "DSN OPELAN TIMUR RT 01 RW 08 DS MANTAJUN KEC DASUK KAB SUMENEP", masa_pidana_2per3: "2030-12-22"},
    { nama: "JATIM ASHARI BIN MUNTUN" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (2)JUNCTO PASAL 132 AYAT (1)", alamat: "DSN OPELAN TIMUR RT 02 RW 08 DS MANTAJUN KEC DASUK KAB SUMENEP", masa_pidana_2per3: "2030-12-22"},
    { nama: "AGUS SALAM BIN SAHRIJAN" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat (1)", alamat: "DSN BENTENG DS PANAONGAN KEC PASONGSONGAN  KAB SUMENEP", masa_pidana_2per3: "2026-09-15"},
    { nama: "NUR WAHYUDI BIN MOH SADIK" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "114 Ayat (1)", alamat: "DSN JERUK POROT DS BATANG BATANG DAYA KEC BATANG BATANG KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "HASAN BASRI BIN DARSONO" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "114 Ayat (1)", alamat: "DSN ARES TENGAH DS TOTOSAN KEC BATANG BATANG KAB SUMENEP", masa_pidana_2per3: "2027-02-09"},
    { nama: "NOVIL BIN QOSIM" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "363 Ayat (1) KE 5", alamat: "DSN LANJUK RT 03 RW 02 DS LANJUK KEC MANDING KAB SUMENEP", masa_pidana_2per3: "2026-08-22"},
    { nama: "MOH SOLEH BIN TOHA" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "362", alamat: "DSN MONDIS LAOK RT 29 RW 06 DS SOKOBANAH TENGAH KEC SOKOBANAH KAB SAMPANG", masa_pidana_2per3: "2027-04-30"},
    { nama: "AHMAD QURTUBI BIN NURSYAMSI" , klasifikasi: "Narapidana", kasus: "Senjata Tajam/ Senjata Api/ Bahan Peledak" , pasal: "2 AYAT (1)", alamat: "DSN BUGIS RT 01 RW 06 DS PAJANANGGER KEC ARJASA KAB SUMENEP", masa_pidana_2per3: "2026-02-22"},
    { nama: "IBNU HAJAR BIN RAHEM" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (1) JO PSL 132 AYAT (1)", alamat: "DSN KAUMAN DSN PINGGIR PAPAS KEC KALIANGET KAB SUMENEP", masa_pidana_2per3: "2027-01-16"},
    { nama: "HERMAN URIP BIN MISRADIN" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 ayat (1) jo pasal 132 Ayat (1)", alamat: "DSN AGENG DS PINGGIR PAPAS KEC KALIANGET KAB SUMENEP", masa_pidana_2per3: "2026-05-16"},
    { nama: "IMAM MASRUKI HARYADI BIN ACH HERI" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "365 Ayat (1)", alamat: "DSN KOMBUNG BARAT RT 24 RW 10 DS ELLAK DAYA KEC LENTENG KAB SUMENEP", masa_pidana_2per3: "2026-09-07"},
    { nama: "FAWAID BIN ZAINAL" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "363 Ayat(1) ke-3,ke-4.ke-5", alamat: "DSN PAJAGALAN RT 03 RW 07 DS BATANG BATANG LAOK KEC BATANG BATANG KAB SUMENEP", masa_pidana_2per3: "2027-09-13"},
    { nama: "RIYANTO BIN SUKRA" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (1)", alamat: "DSN NYABUNGAN RT 02 RW 04 DS JANANGGER KEC BATANG BATANG KAB SUMENEP", masa_pidana_2per3: "2027-02-10"},
    { nama: "ABDUL MALIK FAIZIN BIN FALE AMIN" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "365 Ayat (1)", alamat: "JL WILIS NO 14 DS BABADAN KEC WLINGI KAB BLITAR", masa_pidana_2per3: "2026-05-11"},
    { nama: "NOVAL LAILUR ROHMAN BIN RUDI HARTONO" , klasifikasi: "Narapidana", kasus: "Penggelapan" , pasal: "372", alamat: "DSN TACEPAH DS PLAKPAK KEC PAGANTENAN KAB PAMEKASAN", masa_pidana_2per3: "2025-10-11"},
    { nama: "DEDI AGUSTIAN BIN SUARMAN" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat (1)", alamat: "JL KERMATA 17 RT 02 RW 01 DS SARONGGI KEC SARONGGI KAB SUMENBEP", masa_pidana_2per3: "2026-05-10"},
    { nama: "RAHIM BIN CASLAM" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "365 Ayat (1)", alamat: "DSN 01 RT 05 RW 01 DS KARANGWANGUN KEC BABAKAN KAB CIREBON", masa_pidana_2per3: "2026-02-13"},
    { nama: "AMIR SYABIT BIN MURA'IE" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (1)", alamat: "JL SALURAN AIR DS PAMOLOKAN KEC KOTA KQB SUMENEP", masa_pidana_2per3: "2026-06-26"},
    { nama: "FERY INDRAWAN BIN HERMAN SUGIARTO" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (1)", alamat: "JL SUMBA NO 01 RT 07 RW 04 DS KERTASADA KEC KALIANGET KAB SUMENEP", masa_pidana_2per3: "2029-10-26"},
    { nama: "SUHENDRA BIN SAINI" , klasifikasi: "Narapidana", kasus: "Pembunuhan" , pasal: "340", alamat: "DSN SUSUNAN RT 01RW 02 DS PALIAT KEC SAPEKEN KAB SUMENEP", masa_pidana_2per3: "2033-08-20"},
    { nama: "FAIZAL BASRI BIN H MOH RIFA'E" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (1)", alamat: "JL DR CIPTO DS KOLOR KEC KOTA KAB SUMENEP", masa_pidana_2per3: "2028-07-12"},
    { nama: "MASHODI BIN ALWAN" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "363 Ayat(1) ke-3,ke-4", alamat: "DSN MADUNGAN RT 01 RW 03 DS DASUK LAOK KEC DASUK KAB SUMENEP", masa_pidana_2per3: "2027-03-01"},
    { nama: "HARIYANTO BIN KARIM" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "363 Ayat(1) ke-3,ke-4", alamat: "DSN JUNG JUNGAN RT 03 RW 03 DS JABA'AN KEC MANDING KAB SUMENEP", masa_pidana_2per3: "2027-03-01"},
    { nama: "ONGKY SURYA ABDI BIN KARNO" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat (1)", alamat: "DSN GUWA RT 03 RW 04 DS JADUNG KEC DUNGKEK KAB SUMENEP", masa_pidana_2per3: "2028-12-01"},
    { nama: "K SYAFA'AT SR BIN SYAHRILLAH (alm)" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "82 Ayat(2)", alamat: "DSN.WAKDUWAK RT.003/RW.002 DS.BELUK RAJA KEC.AMBUNTEN KAB.SUMENEP", masa_pidana_2per3: "2029-03-19"},
    { nama: "MOH RENDY BIN MASRAWI" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "81 Ayat(1)", alamat: "DSN.KO'ONG RT/RW 003/001 DS.ALAS MALANG KEC.RA'AS KAB.SUMENEP", masa_pidana_2per3: "2027-10-29"},
    { nama: "FITRIYANTI BINTI DJATIMIN" , klasifikasi: "Narapidana", kasus: "Penipuan" , pasal: "378 JO PSL 55 AYAT (1) KE-1", alamat: "JL ASOKA NO 03 RT 12 RW 02 KELURAHAN PAJAGALAN KEC KOTA SUMENEP KAB SUMENEP", masa_pidana_2per3: "2026-09-02"},
    { nama: "NURHASANAH BINTI DJATIMAN" , klasifikasi: "Narapidana", kasus: "Penipuan" , pasal: "378 JO PSL 55 AYAT (1) KE-1", alamat: "JL SELUDANG i/16 RT 01 RW 01 KELURAHAN PAJAGALAN KEC KOTA SUMENEP KAB SUMENEP", masa_pidana_2per3: "2026-08-27"},
    { nama: "YAYAN SISWANTO BIN DIDIK" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (1)", alamat: "DSN DAJA DS JELBUDAN KEC DASUK KAB SUMENEP", masa_pidana_2per3: "2029-12-04"},
    { nama: "AHMAD YASID BIN BUDIN" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (2)", alamat: "JL.LUMBA-LUMBA RT.05 RW.02 DS.KOLOR KEC.KOTA KAB.SUMENEP", masa_pidana_2per3: "2030-05-13"},
    { nama: "BAINI BIN JALAL" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "363 Ayat(1) ke-3,ke-4", alamat: "DSN KLABAAN RT 01 RW 05 DS GULUK GULUK KEC GULUKGULUK KAB SUMENEP", masa_pidana_2per3: "2026-06-02"},
    { nama: "AHMAD MUHAJIR BAHRUDDIN BIN BAHRUDDIN" , klasifikasi: "Narapidana", kasus: "Cipta Kerja" , pasal: "122 JO PASAL 115", alamat: "DS GULUK TENGAH RT 06 RW 03 DS GULUK GULUK KEC GULUK GULUK KAB SUMENEP", masa_pidana_2per3: "2027-11-07"},
    { nama: "AMINULLAH BIN MAT DILLAH" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "363 Ayat(1) ke-3,ke-4", alamat: "DSN GANG ASEM RT 01 RW 10 DS GULUK GULUK KEC GULUK GULUK KAB SUMENEP", masa_pidana_2per3: "2026-06-02"},
    { nama: "ASIR HUZAINI RIFANI BIN SUWARDI" , klasifikasi: "Narapidana", kasus: "Penggelapan" , pasal: "372", alamat: "DSN POLALANG RT 01 RW 01 DS GAPURA BARAT KEC GAPURA KAB SUMENEP", masa_pidana_2per3: "2026-06-01"},
    { nama: "HERDIANSYAHPERMANA PUTRA BIN IMAM SUDIANSYAH" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 ayat (1) jo pasal 132 Ayat (1)", alamat: "JL PAHLAWAN DS PANDIAN KEC KOTA  KAB SUMENEP", masa_pidana_2per3: "2026-08-26"},
    { nama: "DAYAT HARYANTO BIN ABDUR RAFIK" , klasifikasi: "Narapidana", kasus: "Penggelapan" , pasal: "372", alamat: "DSN SUMBER PANDAN RT 03 RW 03 DS GULUK MANJUNG KEC BLUTO KAB SUMENEP", masa_pidana_2per3: "2025-12-26"},
    { nama: "AGUS HARIYANTO BIN SUKI HARIYANTO" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 ayat (1) jo pasal 132 Ayat (1)", alamat: "DSN PANGGULAN DS BANARESEP TIMUR KEC LENTENG KAB SUMENEP", masa_pidana_2per3: "2026-08-26"},
    { nama: "SADIS ALFIANSYAH BIN MOH ARIFIN" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "114 Ayat (1) Subs Pasal 132 Ayat (1)", alamat: "DSN TEGA DS NAMBAKOR KEC SARONGGI KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "AKHMAD MUSTHOFA KAMIL BIN NURUNG" , klasifikasi: "Narapidana", kasus: "Penipuan" , pasal: "378", alamat: "JL PERMATA SELONG BLOK A 18 RT 05 RW 09 DS GUNUNG SEKAR KEC SAMPANG KAB SAMPANG", masa_pidana_2per3: "2027-05-01"},
    { nama: "HAMZAH FATHULLAH BIN AMIN RUSDI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (2)", alamat: "DSN NANGGER DS JAMBU KEC LENTENG KAB SUMENEP", masa_pidana_2per3: "2030-01-06"},
    { nama: "NASIRUN HERDIANTO BIN ALIBUDIN" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "114 AYAT (1)", alamat: "DSN SEMPANGAN DS KALIANGET BARAT KEC KALIANGET KAB SUMENEP", masa_pidana_2per3: "2029-05-07"},
    { nama: "UMI LATHIFA JAMALI JOHAN BINTI JAMALI" , klasifikasi: "Narapidana", kasus: "Penipuan" , pasal: "378", alamat: "DSN SALUMANURUNG DS SALUMANURUNG KEC BUDONG BUDONG KAB MAMUJU TENGAH PROPENSI SULAWESI BARAT", masa_pidana_2per3: "2026-06-30"},
    { nama: "TAUFIQUR RAHMAN EMES BIN MOH DAIEH" , klasifikasi: "Narapidana", kasus: "KAWIN SIRI" , pasal: "279 AYAT (1) KE-1", alamat: "DSN KRAJAN RT 05 RW 07 DS GENTENG WETAN KEC GENTENG KAB BANYUWANGI", masa_pidana_2per3: "2026-02-07"},
    { nama: "JUNAIDI BIN ABDUL HAMID" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "362", alamat: "DSN TANAH MERAH RT 06 RW 02 DS TANAH MERAH KEC NONGGUNONG KAB SUMENEP", masa_pidana_2per3: "2026-05-16"},
    { nama: "MOH SAHNAN BIN MAULIDIN" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "81 AYAT (3)", alamat: "DSN SUMBER RT 08 RW 02 DS KALISANGKA KEC ARJASA KAB SUMENEP", masa_pidana_2per3: "2038-10-08"},
    { nama: "EDI DARSONO BIN BAHRAWI" , klasifikasi: "Narapidana", kasus: "Informasi dan Transaksi Elektronik" , pasal: "45 Ayat (3) jo psl 27 Ayat (2)", alamat: "DSN DUKO TIMUR RT 03 RW 01 DS ELLAK LAOK KEC LENTENG KAB SUMENEP", masa_pidana_2per3: "2026-01-16"},
    { nama: "FADLAN KIROMI BIN H SYAMSUL ARIFIN" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "114 Ayat (1)", alamat: "DSN ANGSANAH DS BRAGUNG KEC GULUK GULUK KAB SUMENEP", masa_pidana_2per3: "2026-08-31"},
    { nama: "HAYDAR ALI BIN AMI NULLAH" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "81 AYAT (3)", alamat: "DSN TOBALANG III DS WARU BARAT KEC WARU KAB PAMEKASAN", masa_pidana_2per3: "2030-09-07"},
    { nama: "ALIYA BIN MOH SURA" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "363 AYAT (1) KE-1,KE 3 ,Ke 4 dan ke-5", alamat: "DSN MANDALA TIMUR RT 08 RW 03 DS GADU BARAT KEC GANDING KAB SUMENEP", masa_pidana_2per3: "2026-07-05"},
    { nama: "SYAFI'E BIN MOH SURA" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "363 AYAT (1) KE-1,KE 3 ,Ke 4 dan ke-5 KUHP", alamat: "DSN MANDALA TIMUR RT 08 RW 04 DS GADU BARAT KEC GANDING KAB SUMENEP", masa_pidana_2per3: "2026-07-05"},
    { nama: "BUDI MULYONO BIN NUR RAHMAD" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "114 AYAT (1),112 AYAT (1)", alamat: "DSN BATU LENGER TIMUR DS BIRA TENGAH KEC SOKOBANAH KAB SAMPANG", masa_pidana_2per3: ""},
    { nama: "MAKKI BIN SAMA'UN" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "114 AYAT (1),112 AYAT (1),127 AYAT (1)", alamat: "DSN BARAT LEKE DS PANANGGUNGAN KEC GULUK GULUK   KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "IMAM HARYADI BIN SUTAJJIB" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "114 Ayat (1)", alamat: "DSN TAJJAN LAOK DS SLOPENG KEC DASUK KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "ALI KOYYIS BIN MUHAMMAD HAYAT" , klasifikasi: "Tahanan", kasus: "Perlindungan Anak" , pasal: "82 Ayat (2)", alamat: "DSN ORO RT 04 RW 01 DS KASENGAN KEC MANDING KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "ANDRI PURWANTO BIN ABU JAKFAR" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "114 AYAT (1),112 AYAT (1)", alamat: "DSN GANJUR DS LALANGON KEC MANDING KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "ACH FAID HISBULLAH BIN SUKI" , klasifikasi: "Narapidana", kasus: "Perjudian" , pasal: "303 BIS aYAT (1) KE-1", alamat: "DSN GUA RT 05 RW 03 DS MANDING DAYA KEC MANDING KAB SUMENEP", masa_pidana_2per3: "2026-02-16"},
    { nama: "TAUFIQUR RAHMAN BIN RINAHWI" , klasifikasi: "Narapidana", kasus: "Perjudian" , pasal: "303 ayat (1) ke-1", alamat: "DSN BURAJA RT 10 RW 04 DS LAPAK LAOK KEC DUNGKEK KAB SUMENEP", masa_pidana_2per3: "2026-02-16"},
    { nama: "KARNO BIN SUMATRO" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "363 AYAT (1) KE 4", alamat: "DSN RUNGBIRUNG RT 10 RW 03 DS JANGKONG KEC BATANG BATANG KAB SUMENEP", masa_pidana_2per3: "2027-01-10"},
    { nama: "DAHRI BIN DIHAN (ALM)" , klasifikasi: "Tahanan", kasus: "Senjata Tajam/ Senjata Api/ Bahan Peledak" , pasal: "2 AYAT (1)", alamat: "DSN.MALEANGEN RT.006 RW.007 DS.BANCAMARA KEC.DUNGKEK KAB.SUMENEP", masa_pidana_2per3: ""},
    { nama: "MAS ADI BIN SAHABI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (1)", alamat: "DSN PANGKALAN DS LAPA TAMAN KEC DUNGKEK KAB SUMENEP", masa_pidana_2per3: "2028-10-23"},
    { nama: "MOH WARIS BIN SUMAHWAN" , klasifikasi: "Tahanan", kasus: "Penganiayaan" , pasal: "351 AYAT (3)", alamat: "DSN BANTELAN RT 02 RW 07 DS SERGANG KEC BATUPUTIH KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "RASIDI BIN MOH KILIN" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "114 Ayat (2) ", alamat: "DSN GUNTONG DS CABBIYA KEC TALANGO KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "M YUSUP BIN MUSAPI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat (2)", alamat: "DSN TIMUR DAYA DS BANGSEREH KEC BATUMARMAR KAB PAMEKASAN", masa_pidana_2per3: "2030-11-19"},
    { nama: "IMAM SANTOSO BIN SAHWI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "127 Ayat (1) huruf a", alamat: "DSN TENONAN RT 03 RW 04 DS TENONAN KEC MANDING KAB SUMENEP", masa_pidana_2per3: "2026-05-28"},
    { nama: "ARISANDI TRINOMA SENJA BINTI SUDARNO (ALM)" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "127 Ayat (1) huruf a", alamat: "JL. BATANG HARI, NO. 76, RT/RW. 04/09, DS. JOGOTRUNAN, KEC. LUMAJANG, KAB. LUMAJANG.", masa_pidana_2per3: "2026-07-18"},
    { nama: "MOHAMMAD AINUL FIQI BIN MISNAWI" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "114 Ayat (1)", alamat: "DSN CAREMI RT 07 RW 01 DS GAPURA BARAT KEC GAPURA KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "AKHMAD INSAN KAMIL BIN SYAMSURI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "127 Ayat (1) huruf a", alamat: "DSN.GILIR RT.001 RW.001 DS.TORBANG KEC.BATUAN KAB.SUMENEP", masa_pidana_2per3: "2026-07-18"},
    { nama: "ILHAM KHOLID BIN H MOH YUSRON RIKI" , klasifikasi: "Narapidana", kasus: "Penggelapan" , pasal: "372", alamat: "DSN TENGAH RT 04 RW 01 DS ROMBEN GUNA KEC DUNGKEK KAB SUMENEP", masa_pidana_2per3: "2027-03-17"},
    { nama: "SYAMSURI BIN MANUDDIN" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "127 Ayat (1) huruf a", alamat: "DSN PARSE RT 01 RW 01 DS DUKO KEC ARJASA KAB SUMENEP", masa_pidana_2per3: "2026-09-07"},
    { nama: "IMAM FATONI BIN SUJONO" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "114 Ayat (1)", alamat: "JL DIPONOGORO PA/34 RT 07 RW 01 KELURAHAN JOGOYUDAN KEC KOTA LUMAJANG KAB LUMAJANG", masa_pidana_2per3: ""},
    { nama: "RP DEDY APRIYANTO BIN DINAR ABDULLAH" , klasifikasi: "Narapidana", kasus: "Penggelapan" , pasal: "372", alamat: "JL PENDEKAR 17/19 RT 06 RW 02 KELURAHAN KEPANJIN KEC KOTA SUMENEP KAB SUMENEP", masa_pidana_2per3: "2026-10-11"},
    { nama: "MUZAKKI BIN TAHIR" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "114 Ayat (2)", alamat: "DSN NONG MALANG RT 01 RW 02 DS AENG PANAS KEC PRAGAAN KAB SUMENEP", masa_pidana_2per3: "2030-11-18"},
    { nama: "BAMBANG HERMANTO BIN ACHMAD SYAFIUDIN" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "363 AYAT (1) KE 3 dan Ke 4 ", alamat: "JL POTRE KONING II BLOK GB/48 DS KOLOR KEC KOTA SUMENEP KAB SUMENEP", masa_pidana_2per3: "2026-03-17"},
    { nama: "MOHAMMAD RIZKI ROMADHAN BIN ACH SYAFIUDIN" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "363 AYAT (1) KE 3 dan Ke 4 ", alamat: "JL JAGALAN KAL BARURAMBAT KEC KOTA PAMEKASAN KAB PAMEKASAN", masa_pidana_2per3: "2026-03-17"},
    { nama: "SUPRIYADI BIN H MUSRIKIN" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 Ayat (2)", alamat: "DSN DERBING DS PANCOR KEC KETAPANG KAB SAMPANG", masa_pidana_2per3: "2033-08-01"},
    { nama: "HILMANFIRMANSYAH BIN SUHARYONO" , klasifikasi: "Tahanan", kasus: "Perlindungan Anak" , pasal: "81 AYAT (2)", alamat: "DSN WA'DUWAK RT 02 RW 01 DS PANCOR KEC GAYAM KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "IFNUL RIFANDI BIN SAIR" , klasifikasi: "Narapidana", kasus: "Kesehatan" , pasal: "435", alamat: "KAMP KOTA BAU RT 03 RW 03 DS SAPEKEN KEC SAPEKEN KAB SUMENEP", masa_pidana_2per3: "2026-01-14"},
    { nama: "MOH HARUN BIN JAMALUDDIN" , klasifikasi: "Narapidana", kasus: "Kesehatan" , pasal: "435", alamat: "KAMP BUKUT RT 04 RW 01 DS SAPEKEN KEC SAPEKEN KAB SUMENEP", masa_pidana_2per3: "2026-01-10"},
    { nama: "TOTOK KURNIAWAN BIN SAMSUNI" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "363 AYAT (1) KE 3 dan Ke 5", alamat: "DSN KASENGAN TENGAH RT 04 RW 03 DS KASENGAN KEC MANDING KAB SUMENEP", masa_pidana_2per3: "2026-09-26"},
    { nama: "WISKARI BIN MOH RASID" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "363 AYAT (1) KE 3 dan Ke 4 ", alamat: "DSN KORBAK RT 01 RW 01 DS DASUK BARAT KEC DASUK KAB SUMENEP", masa_pidana_2per3: "2026-08-17"},
    { nama: "ABDUL RAHIM AKBARI BIN ABDUL WAHID" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (2)", alamat: "JL SAYU GERINGSING NO 45 RT 02 RW 03 DS KAMPUNG MANDAR KEC BANYUWANGI KAB BANYUWANGI", masa_pidana_2per3: "2029-08-23"},
    { nama: "MOCH ROHALIL BIN MASDUKI" , klasifikasi: "Narapidana", kasus: "" , pasal: "473 Ayat (1) jo Ayat (4)", alamat: "DSN TELENTE RT 01 RW 08 DS LONGOS KEC GAPURA KAB SUMENEP", masa_pidana_2per3: "2033-07-23"},
    { nama: "RAHMAT B BIN BAHARUDDIN KULLE" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "362", alamat: "JL URIP SUMOHARJO LR 04 NO 87 RT 03 RW 03 DS KURUWESI UTARA KEC PANAKKUKANG KAB KOTA MAKASAR SULAWESI SELATAN", masa_pidana_2per3: "2026-07-14"},
    { nama: "IMAM WAHYUDI BIN IMRON ROSADI" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "81 AYAT (2)", alamat: "DSN SUMBER BHAKTI DS KETAPANG BARAT KEC KETAPANG KAB SAMPANG", masa_pidana_2per3: "2032-10-21"},
    { nama: "JUNAIDI BIN JUMAIRA" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "362", alamat: "DSN BATU JARAN RT 03 RW 023 DS POJA KEC GAPURA KAB SUMENEP", masa_pidana_2per3: "2026-08-27"},
    { nama: "RIZAL AFRI BIN MASKUR" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "365 AYAT (1) JO KE 53 AYAT (1)", alamat: "DSN MUSTIKA RT 01 RW 04 DS PAJANANGGER KEC ARJASA KAB SUMENEP", masa_pidana_2per3: "2026-08-24"},
    { nama: "MOHAMMAD NAUFAL BIN ASMUNI" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "477 Ayat (1) huruf e ,f, g", alamat: "DSN TONGGAL RT 01 RW 01 DS MEDDELAN KEC LENTENG KAB SUMENEP", masa_pidana_2per3: "2026-07-13"},
    { nama: "MOH ALI MUKTI BIN SUJIBNO" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "477 Ayat (1) huruf e ,f, g", alamat: "DSN BANDUNGAN RT 01 RW 01 DS DARAMISTA KEC LENTENG KAB SUMENEP", masa_pidana_2per3: "2026-07-13"},
    { nama: "AINUR RAFIQ BIN HODRI" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "477 Ayat (1) huruf e,f,g", alamat: "DSN BANDUNGAN RT 02 RW 04 DS DARAMISTA KEC LENTENG KAB SUMENEP", masa_pidana_2per3: "2026-07-13"},
    { nama: "NABRISUL HUDA BIN SOLEHUDIN" , klasifikasi: "Narapidana", kasus: "Penggelapan" , pasal: "486", alamat: "DSN DALEMAN RT 01 RW 04 DS KARDULUK KEC PRAGAAN KAB SUMENEP", masa_pidana_2per3: "2026-10-28"},
    { nama: "LUKMAN HAKIM BIN MUSLIHIN" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "114 Ayat (1)", alamat: "JL PAHLAWAN N0 22 DS PAMOLOKAN KEC KOTA SUMENEP KAB SUMENEP", masa_pidana_2per3: "2027-04-30"},
    { nama: "ANTRISNO BIN H SUTO" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "114 ayat (1) jo pasal 132 Ayat (1)", alamat: "DSN POREH TENGAH DS POREH KEC LENTENG KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "AHMAD FAWAID BIN ZIBUR" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "363 AYAT (1) KE 3 ", alamat: "DSN MANDALA RT 19 RW 10 DS KETAWANG KARAY KEC GANDING KAB SUMENEP", masa_pidana_2per3: "2026-05-02"},
    { nama: "ANDI ARI SANDI BIN RASINAL" , klasifikasi: "Narapidana", kasus: "Perlindungan Anak" , pasal: "415 huruf b", alamat: "DSN NEGGARA RT 12 RW 06 DS BUMBUNGAN KEC BLUTO KAB SUMENEP", masa_pidana_2per3: "2030-04-10"},
    { nama: "RADITYA FAHRIZI FIRMANSYAH BIN ABDURRAHMAN" , klasifikasi: "Tahanan", kasus: "Perlindungan Anak" , pasal: "81 AYAT (3)", alamat: "DSN BUNUT RT 01 RW 01 DS DUKO KEC ARJASA KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "ZAHRATUN BINTI DULLADIM" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "114 ayat (1) jo pasal 132 Ayat (1)", alamat: "DSN KOLOR RT 09 RW 10 DS BRINGIN KEC DASUK KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "BAHTIAR BALU BIN SALEH MOLYONO" , klasifikasi: "Narapidana", kasus: "Kesehatan" , pasal: "435", alamat: "DSN KEBUN RT 03 RW 02 DS BERAJI KEC GAPURA KAB SUMENEP", masa_pidana_2per3: "2026-04-30"},
    { nama: "A'LATUL BAIRI BIN SAHERI" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "114 AYAT (2),112 AYAT (2)", alamat: "JL URIP SUMOHARJO GG ii DS PANGARANGAN KEC BLUTO KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "ANDRIYANTO BIN SAHWINI" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "114 ayat (1) jo pasal 132 Ayat (1)", alamat: "DSN BUKABU RT 04 RW 01 DS BUKABU KEC AMBUNTEN KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "SYAIFUL HIDAYAT BIN SAHWAN" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "477 Ayat (1) huruf e dan huruf f", alamat: "DSN POCANG RT 09 RW 03 DS CANGKRENG KEC LENTENG KAB SUMENEP", masa_pidana_2per3: "2026-09-09"},
    { nama: "PUZAINI BIN SATTROYU" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "476 JO PASAL 477 huruf e,f & g ", alamat: "DSN CEPOR RT 01 RW 01 DS BATANG BATANG LAOK KEC BATANG BATANG KAB SUMENEP", masa_pidana_2per3: "2027-01-09"},
    { nama: "RIHNO BIN MUSAHRU" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "476 JO,PASAL 477 huruf e,f & g", alamat: "DSN PARSE RT 02 RW 01 DS BANUAJU KEC BATANG BATNG KAB SUMENEP", masa_pidana_2per3: "2027-01-09"},
    { nama: "NOFEK AJI PANBUDI BIN MOH HANI" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "476", alamat: "DSN PANDIAN RT 11 RW 05 DS PABERASAN KEC KOTA KAB SUMENEP", masa_pidana_2per3: "2026-04-23"},
    { nama: "HASANIYAH BINTI MOH HASAN" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "114 AYAT (1),112 AYAT (1)", alamat: "DSN GUNUNG TUNGGAL DS TAMBAAGUNG BARAT KEC AMBUNTEN KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "WAKID BIN SATRAWI" , klasifikasi: "Narapidana", kasus: "Pelanggaran Lalu Lintas" , pasal: "311 AYAT (5)", alamat: "DSN PARADDAN RT 01 RW 04 DS LANJUK KEC MANDING KAB SUMENEP", masa_pidana_2per3: "2027-09-15"},
    { nama: "MARYONO BIN ZAMAWI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "609 Ayat (1) huruf a", alamat: "DS SUKA DAMAI KEC HINAI KAB LANGKAT PROV SUMATRA UTARA", masa_pidana_2per3: "2028-04-29"},
    { nama: "IMAM SHOVI KURNIAWAN BIN H RISNO" , klasifikasi: "Narapidana", kasus: "Penipuan" , pasal: "492", alamat: "DSN GALIS RT 04 RW 06 DS AMBUNTEN TENGAH KEC AMBUNTEN KAB SUMENEP", masa_pidana_2per3: "2026-09-23"},
    { nama: "ASIS BIN ASMUNI" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "114 Ayat (1)", alamat: "DSN POLAY BARAT RT 25 RW 12 DS GADU TIMUR KEC GANDING KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "ZAIRUPI BIN SURAKNAH" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "127 AYAT (1)", alamat: "DSN JAMBU MONYET II RT 02 RW 03 DS LENTENG BARAT KEC LENTENG KAB SUMENEP", masa_pidana_2per3: "2026-06-21"},
    { nama: "ANDRIYANSAH BIN MOH AWI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "127 AYAT (1) huruf a", alamat: "DSN TAMBANGAN RT 07 RW 05 DS KALIANGET TIMUR KEC KALIANGET KAB SUMENEP", masa_pidana_2per3: "2026-06-10"},
    { nama: "UNTUNG ARIS SUSANTO BIN MOH RIFA'IE" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "114 AYAT (1),112 AYAT (1)", alamat: "DSN PADUREKSO RT 05 RW 03 DS KALIANET TIMUR KEC KALIANGET KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "SAIFUL RAHMAN BIN SUHRAWI" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "114 AYAT (1),112 AYAT (1),127 AYAT (1)", alamat: "DSN UTARA PASAR DS KALI KATAK RT 03 RW 01 KEC ARJASA KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "ALIP SUGIK BIN ARBIDIN" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "114 AYAT (1),112 AYAT (1),127 AYAT (1)", alamat: "DSN MENGOK DS MENGOK RT 27 RW 08 KEC PUJER KAB BONDOWOSO", masa_pidana_2per3: ""},
    { nama: "MOH KURNIAWAN ADI PRATAMA BIN BAGUS ARI WIBOWO" , klasifikasi: "Narapidana", kasus: "Kekerasan Seksual" , pasal: "6 Huruf b", alamat: "DSN KEBUN KELAPA RT 02 RW 03 DS KALIANGET BARAT KEC KALIANGET KAB SUMENEP", masa_pidana_2per3: "2029-01-30"},
    { nama: "M SYAHRIL AKBAR DIMAS MAULIDI BIN H IBNU MA'RUP" , klasifikasi: "Tahanan", kasus: "Perlindungan Anak" , pasal: "81 AYAT (3)", alamat: "JL GAPURA RT 11 RW 05 DS PABERASAN KEC KOTA KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "SIRAJUDDIN BIN AHMAD IRFAN" , klasifikasi: "Tahanan", kasus: "Penipuan" , pasal: "378", alamat: "DSN TAJJIN RT 03 RW 02 DS SLOPENG KEC DASUK KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "ANTON ZAINOL HASAN BIN MARZUKI" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "127 Ayat (1) huruf a", alamat: "DSN.SAROTAK RT.001 RW.007 DS.POTERAN KEC.TALANGO KAB.SUMENEP", masa_pidana_2per3: "2026-07-02"},
    { nama: "MEISY DWI PRAYOGA BIN SAIFUL ANWAR" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "477 Ayat (1) huruf e ", alamat: "JL.GARUDA RT.001 RW.009 DS PAMOLOKAN KEC KOTA KAB SUMENEP", masa_pidana_2per3: "2026-02-05"},
    { nama: "ARDY ISKANDAR BIN KADARUSMAN" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "114 Ayat (2)", alamat: "KAMP BUKUT DS SAPEKEN KEC SAPEKEN KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "ST KHOLILA OKTOVIA BINTI EDI SUHENDRA" , klasifikasi: "Tahanan", kasus: "Perlindungan Anak" , pasal: "80 Ayat (4)", alamat: "DSN.PARSE RT/RW 001/001 DS DUKO KEC ARJASA KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "ABDUL SANEN BIN LIYAN" , klasifikasi: "Narapidana", kasus: "PERKAWINAN" , pasal: "284 Ayat (1) ke-1 huruf a", alamat: "DSN.BARA' SONGAI RT.01/RW.03 DS.KAPEDI KEC.BLUTO KAB.SUMENEP", masa_pidana_2per3: "2026-02-23"},
    { nama: "MIRJUAN BIN MUHAMMAD ABDULLAH" , klasifikasi: "Tahanan", kasus: "Perlindungan Anak" , pasal: "332 Ayat (1) ke-2", alamat: "JL BHAYANGKARA GG TOKO PEDIA RT 22 RW 00 DS SUNGAI MERIAM KEC ANGGANA KAB KUTAI KARTANEGARA", masa_pidana_2per3: ""},
    { nama: "MOH HENDRI BIN SADNAWI" , klasifikasi: "Tahanan", kasus: "Pencurian" , pasal: "363 Ayat (1) ke 3 JO PSL 56 KE-2", alamat: "DSN MADDUNGAN RT 01 RW 01 DS DASUK LAOK KEC DASUK KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "M SUTIKNO BIN NIHRU" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "114 AYAT (1),112 AYAT (1)", alamat: "DSN LUBULU RT 02 RW 01 DS GUNUNG KEMBAR KEC MANDING KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "AMAN HARIS BIN MISALI" , klasifikasi: "Tahanan", kasus: "Pencurian" , pasal: "363 Ayat (1) ke 3,4", alamat: "DSN KARONGKONG RT 01 RW 01 DS MATANAIR KEC RUBARU KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "JAISUSILAH BIN SUHAM" , klasifikasi: "Tahanan", kasus: "Pencurian" , pasal: "363 Ayat (1) ke 3,5", alamat: "DSN KARONGKONG RT 05 RW 01 DS MATANAIR KEC RUBARU KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "FERI SANDI BIN SULAIMAN" , klasifikasi: "Tahanan", kasus: "Migas" , pasal: "55 Jo UU No. 6 Tahun 2023 tentang penetapan Perpu No. 2 Tahun 2022 tentang Cipta Kerja", alamat: "JL PAHLAWAN RT 01 RW 01 DS PANDIAN KEC KOTA KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "ANANG DARMANSYAH S,pd BIN ABD GANI" , klasifikasi: "Tahanan", kasus: "Migas" , pasal: "55 Jo UU No. 6 Tahun 2023 tentang penetapan Perpu No. 2 Tahun 2022 tentang Cipta Kerja", alamat: "JL RAYA MANDING RT 01 RW 02 DS KEBUNAN KEC KOTA KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "MUHAMMAD TAUFIKUL HAYAT BIN HAIRULLAH" , klasifikasi: "Tahanan", kasus: "Migas" , pasal: "55 Jo UU No. 6 Tahun 2023 tentang penetapan Perpu No. 2 Tahun 2022 tentang Cipta Kerja", alamat: "JL SLAMET RIADI NO 16 RT 01 RW 03 DS PABIAN KEC KOTA KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "MOH TAUFIK RAHMAN BIN ASRAWI" , klasifikasi: "Tahanan", kasus: "Migas" , pasal: "55 Jo UU No. 6 Tahun 2023 tentang penetapan Perpu No. 2 Tahun 2022 tentang Cipta Kerja", alamat: "JL PAHLAWAN GG II RT 03 RW 01 DS PANDIAN KEC KOTA KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "RB M ARIEF FURQON P BIN RB DARUS SALAM" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "476 JO PASAL 477  huruf e dan f", alamat: "JL HALIM PERDANA KUSUMA GG II RT 01 RW 10 DS PAMOLOKAN KEC KOTA KAB SUMENEP", masa_pidana_2per3: "2026-10-21"},
    { nama: "MOH MASHURI BIN ARWIYANTO" , klasifikasi: "Tahanan", kasus: "Pencurian" , pasal: "477 Ayat (1) Ke-7", alamat: "JL TEUKU UMAR IX/68 DS PANDIAN KEC KOTA KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "ROMLI BIN ATNALI" , klasifikasi: "Tahanan", kasus: "Pencurian" , pasal: "477 Ayat (1) Ke-7", alamat: "DS.BASOKA KEC. RUBARU KAB.SUMENEP", masa_pidana_2per3: ""},
    { nama: "NORSADIK ALDI BIN MATRASA" , klasifikasi: "Tahanan", kasus: "Kesehatan" , pasal: "435", alamat: "DSN.BARAT RT/RW 01/01 DS.SUMBERNANGKA KEC.ARJASA KAB.SUMENEP", masa_pidana_2per3: ""},
    { nama: "ILYAS BIN ABDUL HADI" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "476 JO 477 huruf e & f", alamat: "DSN GULUK GULUK TIMUR RT 01 RW 01 DS GULUK KEC GULUK GULUK KAB SUMENEP", masa_pidana_2per3: "2028-03-09"},
    { nama: "WANDI STIAWAN BIN MULAQI" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "609 Ayat (1) huruf a", alamat: "DSN. DALEMAN RT.01 RW.03 DS.PAYUDAN DALEMAN KEC.GULUK GULUK KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "DWI HENDRA BIN SATRAWI" , klasifikasi: "Tahanan", kasus: "Penggelapan" , pasal: "480", alamat: "Dsn. Rembang RT 3/ RW 2 Ds. Pragaan Daya Kec. Pragaan Kab. Sumenep", masa_pidana_2per3: ""},
    { nama: "RAHMAN BIN SAWIR" , klasifikasi: "Tahanan", kasus: "Penggelapan" , pasal: "486", alamat: "JL.PELABUHAN KERTASADA RT.003/RW.002 DS.KERTASADA KEC.KALIANGET KAB.SUMENEP", masa_pidana_2per3: ""},
    { nama: "DODI Als EDI BIN HAKIM" , klasifikasi: "Narapidana", kasus: "Pencurian" , pasal: "477 Ayat (1) huruf g ", alamat: "DSN. SUMBER HIDUP RT.001 RW.003 DS. KRAMIAN KEC.MASALEMBU KAB.SUMENEP", masa_pidana_2per3: "2026-05-29"},
    { nama: "BUNATON BIN DIMO" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "114 Ayat (1)", alamat: "DSN.PEYANGAN RT.05 RW.01 DESA TAMBAKSARI KEC.RUBARU KAB.SUMENEP", masa_pidana_2per3: ""},
    { nama: "SUPRIYADI BIN NORSAHAM" , klasifikasi: "Tahanan", kasus: "Pencurian" , pasal: "477 Ayat (2)", alamat: "DSN POLAY BARAT RT/RW 02/07 DS. GADU TIMUR KEC. GANDING KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "RUKIYANTO BIN HAMARUDDIN" , klasifikasi: "Tahanan", kasus: "Pencurian" , pasal: "477 Ayat (2)", alamat: "DSN. BILLATOMPOK, RT/017 RW/006,DS. DARAMISTA, KEC. LENTENG KAB. SUMENEP", masa_pidana_2per3: ""},
    { nama: "MAULAN AMRI BIN HARIONO" , klasifikasi: "Tahanan", kasus: "Pencurian" , pasal: "477", alamat: "KUPANGJAYA 2/86 RT/RW 003/006 KEL. SONO KWIJENAN, KEC, SUKOMANUNGGAL KOTA SURABAYA", masa_pidana_2per3: ""},
    { nama: "LALU JUMA'AH AGUSTIAN BIN UMAR BIN UMAR" , klasifikasi: "Tahanan", kasus: "Pencurian" , pasal: "477", alamat: "SUMBER HIDUP, RT 005 RW 003, DESA KRAMIAN, KEC. MASALEMBU, KAB. SUMENEP", masa_pidana_2per3: ""},
    { nama: "ILYAS KHAIRI BIN MOH.DAREK" , klasifikasi: "Tahanan", kasus: "Pelanggaran Lalu Lintas" , pasal: "310 Ayat (4)", alamat: "DSN.AENG BUTON, RT/06 RW/03 DESA TORJEK KEC.KANGAYAN KAB.SUMENEP", masa_pidana_2per3: ""},
    { nama: "MASKANDA BIN H. SALEH" , klasifikasi: "Tahanan", kasus: "Senjata Tajam/ Senjata Api/ Bahan Peledak" , pasal: "306", alamat: "DSN.KRAMAT RT/RW 003/004 DS. BANJAR BARAT KEC. GAPURA KAB. SUMENEP", masa_pidana_2per3: ""},
    { nama: "CICIK HARYADI BIN MOH AMIRUDIN" , klasifikasi: "Tahanan", kasus: "Perlindungan Anak" , pasal: "80 Ayat (2)", alamat: "DSN TANGGINAH RT 01 RW 03 DS KETAWANG LARANGAN KEC GANDING KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "SULIHA BINTI SU'UNTONG" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "PASAL 609 AYAT 2", alamat: "DSN TAMBERU ALET BARAT DS BATU BINTANG KEC.BATU MARMAR KAB.PAMEKASAN", masa_pidana_2per3: ""},
    { nama: "ISMAWATI BINTI MULATUP" , klasifikasi: "Narapidana", kasus: "Informasi dan Transaksi Elektronik" , pasal: "45 Ayat (4) jo PAsal 27 A", alamat: "DSN.CANG CANG PANGGUNG RT.006 RW.002 DS.LOMBENG KEC.GILIGENTING KAB.SUMENEP", masa_pidana_2per3: "2026-03-28"},
    { nama: "MIFTAHOL ARIFIN BIN MOH DJAELANI" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "609 Ayat (1) huruf a", alamat: "DSN BELTOK RT 03 RW 02 DS LARANGAN BADUNG KEC PALENGAAN KAB PAMEKASAN", masa_pidana_2per3: ""},
    { nama: "NUR ALFIAN QODRI BIN MASTARI" , klasifikasi: "Tahanan", kasus: "Penggelapan" , pasal: "486", alamat: "JL.SLAMET RIADI RT.004 RW.002 DS.PABIAN KEC.KOTA KAB.SUMENEP", masa_pidana_2per3: ""},
    { nama: "SAMIR BIN ISMAIL SYAMLAN" , klasifikasi: "Tahanan", kasus: "Penggelapan" , pasal: "486", alamat: "JL. PALIAT BLOK BB-04 RT/RW : 005/011 DS. PAMOLOKAN, KEC. KOTA SUMENEP KAB. SUMENEP", masa_pidana_2per3: ""},
    { nama: "ACHMAD MAHMUD BIN ABDUL KOWI" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "609 Ayat (1) huruf a", alamat: "PATEMON BARAT SUNGAI RT/RW 001/003, KEL. PATEMON KEC. PAMEKASAN KAB. PAMEKASAN", masa_pidana_2per3: ""},
    { nama: "MUHAMMAD AFTA IBRAHIM BIN FERDIANSYAH" , klasifikasi: "Tahanan", kasus: "Kesehatan" , pasal: "435", alamat: "JL. SELUDANG NO. 37A KEL. PAJAGALAN KEC. KOTA SUMENEP KAB. SUMENEP", masa_pidana_2per3: ""},
    { nama: "EHAK BIN DULIYE" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "609 Ayat (1) huruf a", alamat: "DS. BAN-BAN RT/RW 01/09 DESA TALANGO KECAMATAN TALANGO KABUPATEN SUMENEP", masa_pidana_2per3: ""},
    { nama: "RISNO ALS TURIS BIN SUHRA" , klasifikasi: "Tahanan", kasus: "Pencurian" , pasal: "477 Ayat (1) huruf e ", alamat: "DSN.PONDUK KELOR RT.002/ RW.001 DS.TORJEK KEC.KANGAYAN KAB.SUMENEP", masa_pidana_2per3: ""},
    { nama: "ANDRY RUSDARMANTO PUTRA BIN SUFIYANTO" , klasifikasi: "Tahanan", kasus: "Penggelapan" , pasal: "492", alamat: "JL.GRESIK PUTRI TIMUR RT.07 RW.05 DS.KALIANGET TIMUR KEC.KALIANGET KAB.SUMENEP", masa_pidana_2per3: ""},
    { nama: "HERI SUCIPTO BIN M SAID DJUNAIDY" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "PASAL 114 (1) SUBSIDER PASAL 112 (1) SUBSIDER PASAL 127 (1)", alamat: "DSN.GEDUNGAN BARAT TR.01/RW.02 DS.GEDUNGAN KEC.BATUAN KAB.SUMENEP", masa_pidana_2per3: ""},
    { nama: "AHMAD ESYAN BIN ABDURRAHMAN ESYAN" , klasifikasi: "Tahanan", kasus: "PENCABULAN" , pasal: "414 AYAT (1) HURUF B", alamat: "JL.KH. MANSYUR, RT/RW 010/003, DS. PANGARANGAN, KEC. KOTA KAB. SUMENEP.", masa_pidana_2per3: ""},
    { nama: "HASANI BIN ABU BAKKAR" , klasifikasi: "Tahanan", kasus: "Pencurian" , pasal: "Pasal 363 ayat 1", alamat: "BANJAR DINAS TEGAL SARI RT 07 RW 04 DS PATAS KEC GEROKGAK KAB BULELENG", masa_pidana_2per3: ""},
    { nama: "RUDI BIN NURRUDIN" , klasifikasi: "Tahanan", kasus: "Pencurian" , pasal: "Pasal 363 ayat 1", alamat: "DSN TENGAH RT 01 RW 03 DS KETUPAT KEC RAAS KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "MOH.FARIS ALS FAFA BIN MUDAYU" , klasifikasi: "Tahanan", kasus: "Penggelapan" , pasal: "492 AYAT 1", alamat: "DUSUN NAGGER, RT/RW. 004/002, DESA KALPO KEC BATANG-BATANG KAB. SUMENEP", masa_pidana_2per3: ""},
    { nama: "ADI NINGRAT BIN SUNAHMO" , klasifikasi: "Tahanan", kasus: "Penipuan" , pasal: "492 AYAT 1", alamat: "DUSUN GUNTONG RT 02/RW 08 DESA LEGUNG TIMUR KECAMATAN BATANG BATANG KABUPATEN SUMENEP", masa_pidana_2per3: ""},
    { nama: "TAUFIK ANWAR BIN MUNIR" , klasifikasi: "Tahanan", kasus: "Pencurian" , pasal: "PASAL 477 AYAT 1", alamat: "DSN. LAMBENG DEJE RT 001 RW 001 DS KALIKATAK KEC ARJASA KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "RASULI BIN HOSNI" , klasifikasi: "Tahanan", kasus: "Pencurian" , pasal: "PASAL 477 AYAT 1", alamat: "DSN. LAMBENG DEJE RT 002 RW 001 DS KALIKATAK KEC ARJASA KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "RESTU ANDREANSYAH BIN SUKMA HADI" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "114 AYAT 1", alamat: "JL RAYA LETNAN ABDULLAH NO 213 RT/RW 004/001 DS. TANJUNG JATI KEC. KAMAL KAB. BANGKALAN", masa_pidana_2per3: ""},
    { nama: "ACH BUDIYANTO BIN MUSAHRAWI" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "PASAL 609 AYAT 1", alamat: "DSN. KEBUN KELAPA RT/RW 04/03 DS. KALIANGET BARAT KEC. KALIANGET KAB. SUMENEP", masa_pidana_2per3: ""},
    { nama: "MOH WARIS BIN MATLAWI" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "PASAL 114 AYAT 1", alamat: "DSN. DUKO RT/RW 002/001 DS.AENGTONGTONG KEC. SARONGGI KAB. SUMENEP", masa_pidana_2per3: ""},
    { nama: "EDI SUPITRO BIN SULIMIN" , klasifikasi: "Tahanan", kasus: "Pencurian" , pasal: "PASAL 477 AYAT 1", alamat: "DUSUN PANGGUNG RT 001 RW 003 DESA KARANGANYAR KECAMATAN KALIANGET KABUPATEN SUMENEP", masa_pidana_2per3: ""},
    { nama: "REZKY GALANG AINULLAH BIN SHODIKIN" , klasifikasi: "Tahanan", kasus: "Pencurian" , pasal: "482 AYAT 1", alamat: "DUSUN UTARA RT/RW 005/001 DS PENGANTENAN KEC PANGANTENAN KAB PAMEKASAN", masa_pidana_2per3: ""},
    { nama: "SAMSUL ARIFIN BIN KAMIL" , klasifikasi: "Tahanan", kasus: "Pencurian" , pasal: "591", alamat: "DSN SANGGAR DS PASANGGAR KEC PAGENTENAN KAB PAMEKASAN", masa_pidana_2per3: ""},
    { nama: "ANTON SRIWIJAYA BIN SUKRIBANG (ALM)" , klasifikasi: "Tahanan", kasus: "Penganiayaan" , pasal: "PASAL 466 AYAT 1", alamat: "DSN. GUTUGUH RT.03/RW.01 DS.POREH KEC.LENTENG KAB.SUMENEP", masa_pidana_2per3: ""},
    { nama: "MOH WAHYUDI BIN PARI" , klasifikasi: "Tahanan", kasus: "Penganiayaan" , pasal: "PASAL 170 AYAT 1", alamat: "DSN.KOKEMBANG RT.15/RW.03 DS.LEBENG BARAT KEC.PASONGSONGAN KAB.SUMENEP", masa_pidana_2per3: ""},
    { nama: "ANTON SUPRIADY BIN MOH SOFYAN" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "PASAL 609 AYAT 1", alamat: "JL JATI MAS GG 11 NO 06 DESA PANGARANGAN KEC KOTA KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "ABDULLAH AL FAHMI BIN MOH SURJI" , klasifikasi: "Tahanan", kasus: "Kesehatan" , pasal: "PASAL 435", alamat: "KAMPKOTA RT 02 RW 03 DS SAPEKEN KEC SAPEKEN KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "MOH MASSER BIN BUWANG" , klasifikasi: "Tahanan", kasus: "Penipuan" , pasal: "492", alamat: "DSN PANGGUNG RT 005 RW 003 DS KARANG ANYAR KEC KALIANGET KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "AGUS IFANDI BIN ZAINAL ABIDIN" , klasifikasi: "Tahanan", kasus: "Penggelapan" , pasal: "492", alamat: "DSN TANJUNG ALANG DESA PADIKE KEC TALANGO KAB SUMENEP", masa_pidana_2per3: ""},
    { nama: "RUDIYANTO BIN ADRA'I" , klasifikasi: "Tahanan", kasus: "Pencurian" , pasal: "PASAL 477 AYAT 1", alamat: "DSN BEDDI MARENGAN LAOK KEC KALIANGET KABUPATEN SUMENEP", masa_pidana_2per3: ""},
    { nama: "AHMAD DAHLAN JAENURI BIN AHMAD ZAENURI" , klasifikasi: "Tahanan", kasus: "Pencurian" , pasal: "PASAL 477 AYAT 1", alamat: "KP. TULANG KUNING DESA WARU KECAMATAN PARUNG KABUPATEN BOGOR PROVINSI JAWA BARAT", masa_pidana_2per3: ""},
    { nama: "ANDI WARTO BIN EMMAD" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "Pasal114 ayat [1] ", alamat: "JL. PURI KEMBANG RT/RW 011/005 KELURAHAN KEDOYA SELATAN KEC KEBON JERUK KAB JAKARTA BARAT", masa_pidana_2per3: ""},
    { nama: "JAZULI BIN OBRAS" , klasifikasi: "Tahanan", kasus: "Senjata Tajam/ Senjata Api/ Bahan Peledak" , pasal: "306", alamat: "DUSUN ARES DAJA RT 001 RW 001 DESA BELUK ARES KECAMATAN AMBUTEN KABUPATEN SUMENEP", masa_pidana_2per3: ""},
    { nama: "BANGBANG SUTRISNO BIN MOSAHNAN" , klasifikasi: "Tahanan", kasus: "Pencurian" , pasal: "PASAL 477 AYAT 1", alamat: "DSN. BEDDI RT.02/RW.02 DS.MARENGAN LAOK KEC.KALIANGET KAB.SUMENEP", masa_pidana_2per3: ""},
    { nama: "SAMSUDDIN BIN HASIM" , klasifikasi: "Tahanan", kasus: "Kekerasan Seksual" , pasal: "PASAL 473 AYAT 1", alamat: "DUSUN MUSTIKA RT.01 RW.04 DESA PAJANANGGER KEC.ARJASA KAB.SUMENEP", masa_pidana_2per3: ""},
    { nama: "SA'I BIN MISTUKI" , klasifikasi: "Tahanan", kasus: "Senjata Tajam/ Senjata Api/ Bahan Peledak" , pasal: "PASAL 488 AYAT 1", alamat: "DSN. TENGAH RT 001 RW 002 DS. SUKAJERUK KEC. MASALEMBU KAB. SUMENEP", masa_pidana_2per3: ""},
    { nama: "ZAINOL HASAN BIN SA'I" , klasifikasi: "Tahanan", kasus: "Senjata Tajam/ Senjata Api/ Bahan Peledak" , pasal: "448 AYAT 1", alamat: "DSN. AMBULUNG RT 002 RW 003 DS. SUKAJERUK KEC. MASALEMBU KAB. SUMENEP", masa_pidana_2per3: ""},
    { nama: "AHMAD READIYANTO BIN ASMUNI" , klasifikasi: "Tahanan", kasus: "Penganiayaan" , pasal: "PASAL 262 AYAT 1", alamat: "DSN WAK DUWAK RT/RW 003/004 DESA BELUK RAJA, KEC, AMBUNTEN KAB. SUMENEP", masa_pidana_2per3: ""},
    { nama: "FAUZI BIN SUTOMO" , klasifikasi: "Tahanan", kasus: "Penganiayaan" , pasal: "PASAL 262 AYAT 1", alamat: "WAK TUWAK RT02 RW04 DESA BELUK RAJA KEC. AMBUNTEN KAB. SUMENEP", masa_pidana_2per3: ""},
    { nama: "MEILANA BINTI MARSUKI" , klasifikasi: "Tahanan", kasus: "Penggelapan" , pasal: "486", alamat: "PERUM BATUAN BLOK RR NO. 21, DESA BATUAN, KEC. BATUAN, KAB. SUMENEP: JLN. TRUNOJOYO NO. 105 RT/RW 004/004, DS. KOLOR, KEC, KOTA SUMENEP, KAB. SUMENEP", masa_pidana_2per3: ""},
    { nama: "MOH HOSEN BIN MUJALIS" , klasifikasi: "Tahanan", kasus: "Pencurian" , pasal: "PASAL 477 AYAT 1", alamat: "DSN. TALANG RT 07 RW 02, DS. KETAWANG LAOK, KEC. GULUK-GULUK, KAB. SUMENEP", masa_pidana_2per3: ""},
    { nama: "SUDAR BIN MIASIT" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "PASAL 609 AYAT 1", alamat: "DUSUN JURGANG RT/RW 10/04, DESA JURUAN LAOK, KEC. BATU PUTIH, KAB. SUMENEP", masa_pidana_2per3: ""},
    { nama: "MUNIHWI BIN SANEMMO" , klasifikasi: "Tahanan", kasus: "Narkotika" , pasal: "PASAL 609 AYAT 1", alamat: "DUSUN KALOMPANG RT/RW 02/03, DESA KOLPO, KEC. BATANG-BATANG, KAB. SUMENEP", masa_pidana_2per3: ""},
    { nama: "MASHUDI BIN MOCH. SOLEH" , klasifikasi: "Narapidana", kasus: "Narkotika" , pasal: "112 AYAT (1)", alamat: "KMP. BAJIK DS. TANJUNGBUMI KEC. TANJUNGBUMI KAB. BANGKALAN", masa_pidana_2per3: "2025-07-30"},
  ];

  const input = document.getElementById("nama_wbp");
  const list = document.getElementById("autocompleteList");
  const radioTahanan = document.getElementById("klasifikasi_tahanan");
  const radioNapi = document.getElementById("klasifikasi_narapidana");

  if (!input || !list) return;

  let selectedFromList = false;
  window.wbpValid = false;

  function resetKlasifikasi() {
    radioTahanan.checked = false;
    radioNapi.checked = false;
    radioTahanan.disabled = true;
    radioNapi.disabled = true;
  }

  resetKlasifikasi();

  input.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();
    list.innerHTML = "";
    selectedFromList = false;
    window.wbpValid = false;

    resetKlasifikasi();

    if (!keyword) {
      document.dispatchEvent(new Event("checkForm"));
      return;
    }

    dataWbp
      .filter(w => w.nama.toLowerCase().includes(keyword))
      .forEach(wbp => {

        const item = document.createElement("li");
        item.className = "list-group-item list-group-item-action";
        item.textContent = wbp.nama;

        const hiddenKlasifikasi = document.getElementById("klasifikasi_wbp_value");

        item.addEventListener("click", () => {
          input.value = wbp.nama;
          list.innerHTML = "";

          window.wbpValid = true;

          if (wbp.klasifikasi === "Tahanan") {
            radioTahanan.checked = true;
            radioNapi.checked = false;
            hiddenKlasifikasi.value = "Tahanan";
          } else {
            radioNapi.checked = true;
            radioTahanan.checked = false;
            hiddenKlasifikasi.value = "Narapidana";
          }

          // isi perkara
          document.getElementById("perkara").value = wbp.kasus;

          // isi pasal
          document.getElementById("pasal").value = wbp.pasal;

          // kunci radio
          radioTahanan.disabled = true;
          radioNapi.disabled = true;

          document.dispatchEvent(new Event("checkForm"));
        });

        list.appendChild(item);
      });
  });

  input.addEventListener("blur", function () {
  if (!selectedFromList) {
    input.value = "";

    radioTahanan.checked = false;
    radioNapi.checked = false;

    radioTahanan.disabled = true;
    radioNapi.disabled = true;

    hiddenKlasifikasi.value = "";

    window.wbpValid = false;
    document.dispatchEvent(new Event("checkForm"));
  }
  });

});