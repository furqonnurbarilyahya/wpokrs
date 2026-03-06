document.addEventListener("DOMContentLoaded", function () {

  const dataWbp = [
    { nama: "SULIHA BINTI SU'UNTONG" , klasifikasi: "Tahanan"},
    { nama: "HERI SUCIPTO BIN M SAID DJUNAIDY" , klasifikasi: "Tahanan"},
    { nama: "ILYAS KHAIRI BIN MOH.DAREK" , klasifikasi: "Tahanan"},
    { nama: "MASKANDA BIN H. SALEH" , klasifikasi: "Tahanan"},
    { nama: "ABD RAHMAN BIN ABD HAMID" , klasifikasi: "Tahanan"},
    { nama: "SAINI BIN MOH ARIFIN" , klasifikasi: "Tahanan"},
    { nama: "CICIK HARYADI BIN MOH AMIRUDIN" , klasifikasi: "Tahanan"},
    { nama: "MIFTAHOL ARIFIN BIN MOH DJAELANI" , klasifikasi: "Tahanan"},
    { nama: "SAMIR BIN ISMAIL SYAMLAN" , klasifikasi: "Tahanan"},
    { nama: "NUR ALFIAN QODRI BIN MASTARI" , klasifikasi: "Tahanan"},
    { nama: "ACHMAD MAHMUD BIN ABDUL KOWI" , klasifikasi: "Tahanan"},
    { nama: "MUHAMMAD AFTA IBRAHIM BIN FERDIANSYAH" , klasifikasi: "Tahanan"},
    { nama: "EHAK BIN DULIYE" , klasifikasi: "Tahanan"},
    { nama: "ANDRY RUSDARMANTO PUTRA BIN SUFIYANTO" , klasifikasi: "Tahanan"},
    { nama: "RISNO ALS TURIS BIN SUHRA" , klasifikasi: "Tahanan"},
    { nama: "MOH MASHURI BIN ARWIYANTO" , klasifikasi: "Tahanan"},
    { nama: "DWI HENDRA BIN SATRAWI" , klasifikasi: "Tahanan"},
    { nama: "BUNATON BIN DIMO" , klasifikasi: "Tahanan"},
    { nama: "SUPRIYADI BIN NORSAHAM BIN NORSAHAM" , klasifikasi: "Tahanan"},
    { nama: "RUKIYANTO BIN HAMARUDDIN" , klasifikasi: "Tahanan"},
    { nama: "MAULAN AMRI BIN HARIONO" , klasifikasi: "Tahanan"},
    { nama: "LALU JUMA'AH AGUSTIAN BIN UMAR BIN UMAR" , klasifikasi: "Tahanan"},
    { nama: "NABRISUL HUDA BIN SOLEHUDIN" , klasifikasi: "Tahanan"},
    { nama: "MEISY DWI PRAYOGA BIN SAIFUL ANWAR" , klasifikasi: "Tahanan"},
    { nama: "MIRJUAN BIN MUHAMMAD ABDULLAH" , klasifikasi: "Tahanan"},
    { nama: "MOH HENDRI BIN SADNAWI" , klasifikasi: "Tahanan"},
    { nama: "M SUTIKNO BIN NIHRU" , klasifikasi: "Tahanan"},
    { nama: "AMAN HARIS BIN MISALI" , klasifikasi: "Tahanan"},
    { nama: "JAISUSILAH BIN SUHAM" , klasifikasi: "Tahanan"},
    { nama: "FERI SANDI BIN SULAIMAN" , klasifikasi: "Tahanan"},
    { nama: "ANANG DARMANSYAH S,pd BIN ABD GANI" , klasifikasi: "Tahanan"},
    { nama: "MUHAMMAD TAUFIKUL HAYAT BIN HAIRULLAH" , klasifikasi: "Tahanan"},
    { nama: "MOH TAUFIK RAHMAN BIN ASRAWI" , klasifikasi: "Tahanan"},
    { nama: "RB M ARIEF FURQON P BIN RB DARUS SALAM" , klasifikasi: "Tahanan"},
    { nama: "ROMLI BIN ATNALI" , klasifikasi: "Tahanan"},
    { nama: "NORSADIK ALDI BIN MATRASA" , klasifikasi: "Tahanan"},
    { nama: "RAHMAN BIN SAWIR" , klasifikasi: "Tahanan"},
    { nama: "DODI Als EDI BIN HAKIM BIN HAKIM" , klasifikasi: "Tahanan"},
    { nama: "WANDI STIAWAN BIN MULAQI" , klasifikasi: "Tahanan"},
    { nama: "ILYAS BIN ABDUL HADI" , klasifikasi: "Tahanan"},
    { nama: "ZAHRATUN BINTI DULLADIM" , klasifikasi: "Tahanan"},
    { nama: "HASANIYAH BINTI MOH HASAN" , klasifikasi: "Tahanan"},
    { nama: "ST KHOLILA OKTOVIA BINTI EDI SUHENDRA" , klasifikasi: "Tahanan"},
    { nama: "IMAM WAHYUDI BIN IMRON ROSADI" , klasifikasi: "Tahanan"},
    { nama: "TOTOK KURNIAWAN BIN SAMSUNI" , klasifikasi: "Tahanan"},
    { nama: "MOCH ROHALIL BIN MASDUKI" , klasifikasi: "Tahanan"},
    { nama: "MOHAMMAD NAUVAL BIN ASMUNI" , klasifikasi: "Tahanan"},
    { nama: "AINUR RAFIQ BIN HODRI" , klasifikasi: "Tahanan"},
    { nama: "LUKMAN HAKIM BIN MUSLIHIN" , klasifikasi: "Tahanan"},
    { nama: "ANTRISNO BIN H SUTO" , klasifikasi: "Tahanan"},
    { nama: "ANDI ARI SANDI BIN RASINAL" , klasifikasi: "Tahanan"},
    { nama: "RADITYA FAHRIZI FIRMANSYAH BIN ABDURRAHMAN" , klasifikasi: "Tahanan"},
    { nama: "BAHTIAR BALU BIN SALEH MOLYONO" , klasifikasi: "Tahanan"},
    { nama: "ANDRIYANTO BIN SAHWINI" , klasifikasi: "Tahanan"},
    { nama: "ASIP KUSUMA BIN ." , klasifikasi: "Tahanan"},
    { nama: "MUSAHWAN BIN ." , klasifikasi: "Tahanan"},
    { nama: "TOLAK EDI BIN ." , klasifikasi: "Tahanan"},
    { nama: "SU'UD BIN ." , klasifikasi: "Tahanan"},
    { nama: "SYAIFUL HIDAYAT BIN SAHWAN" , klasifikasi: "Tahanan"},
    { nama: "RIHNO BIN MUSAHRU" , klasifikasi: "Tahanan"},
    { nama: "MOH ALI MUKTI BIN SUJIBNO" , klasifikasi: "Tahanan"},
    { nama: "PUZAINI BIN SATTROYU" , klasifikasi: "Tahanan"},
    { nama: "WAKID BIN SATRAWI" , klasifikasi: "Tahanan"},
    { nama: "UNTUNG ARIS SUSANTO BIN MOH RIFA'IE" , klasifikasi: "Tahanan"},
    { nama: "ALIP SUGIK BIN ARBIDIN" , klasifikasi: "Tahanan"},
    { nama: "MARYONO BIN ZAMAWI" , klasifikasi: "Tahanan"},
    { nama: "TAUFIQURRAHMAN BIN FATHOLLA" , klasifikasi: "Tahanan"},
    { nama: "IMAM SHOVI KURNIAWAN BIN H RISNO" , klasifikasi: "Tahanan"},
    { nama: "SIRAJUDDIN BIN AHMAD IRFAN" , klasifikasi: "Tahanan"},
    { nama: "ASIS BIN ASMUNI" , klasifikasi: "Tahanan"},
    { nama: "SAIFUL RAHMAN BIN SUHRAWI" , klasifikasi: "Tahanan"},
    { nama: "M SYAHRIL AKBAR DIMAS MAULIDI BIN H IBNU MA'RUP" , klasifikasi: "Tahanan"},
    { nama: "MOH KURNIAWAN ADI PRATAMA BIN BAGUS ARI WIBOWO" , klasifikasi: "Tahanan"},
    { nama: "ANTON ZAINOL HASAN BIN MARZUKI" , klasifikasi: "Tahanan"},
    { nama: "ARDY ISKANDAR BIN KADARUSMAN" , klasifikasi: "Tahanan"},
    { nama: "HILMANFIRMANSYAH BIN SUHARYONO" , klasifikasi: "Tahanan"},
    { nama: "IFNUL RIFANDI BIN SAIR" , klasifikasi: "Tahanan"},
    { nama: "A'LATUL BAIRI BIN SAHERI" , klasifikasi: "Tahanan"},
    { nama: "DAHRI BIN DIHAN (ALM)" , klasifikasi: "Tahanan"},
    { nama: "RAHMAT B BIN BAHARUDDIN KULLE" , klasifikasi: "Tahanan"},
    { nama: "MOH WARIS BIN SUMAHWAN" , klasifikasi: "Tahanan"},
    { nama: "FADLAN KIROMI BIN H SYAMSUL ARIFIN" , klasifikasi: "Tahanan"},
    { nama: "ALI KOYYIS BIN MUHAMMAD HAYAT" , klasifikasi: "Tahanan"},
    { nama: "MAKKI BIN SAMA'UN" , klasifikasi: "Tahanan"},
    { nama: "RASIDI BIN MOH KILIN" , klasifikasi: "Tahanan"},
    { nama: "KAMSIH BIN WAPIN" , klasifikasi: "Tahanan"},
    { nama: "BUDI MULYONO BIN NUR RAHMAD" , klasifikasi: "Tahanan"},
    { nama: "IMAM HARYADI BIN SUTAJJIB" , klasifikasi: "Tahanan"},
    { nama: "NUR WAHYUDI BIN MOH SADIK" , klasifikasi: "Tahanan"},
    { nama: "ONGKY SURYA ABDI BIN KARNO" , klasifikasi: "Tahanan"},
    { nama: "HERDIANSYAHPERMANA PUTRA BIN IMAM SUDIANSYAH" , klasifikasi: "Tahanan"},
    { nama: "AGUS HARIYANTO BIN SUKI HARIYANTO" , klasifikasi: "Tahanan"},
    { nama: "SADIS ALFIANSYAH BIN MOH ARIFIN" , klasifikasi: "Tahanan"},
    { nama: "MOHAMMAD AINUL FIQI BIN MISNAWI" , klasifikasi: "Tahanan"},
    { nama: "IMAM FATONI BIN SUJONO" , klasifikasi: "Tahanan"},
    { nama: "ANDRI PURWANTO BIN ABU JAKFAR" , klasifikasi: "Tahanan"},
    { nama: "RENDI ANDRIYONO, SE BIN LUKAS WAHYUDI" , klasifikasi: "Narapidana"},
    { nama: "HOIRIYAH BINTI MITRAD" , klasifikasi: "Narapidana"},
    { nama: "AHMAD MUHAJIR BAHRUDDIN BIN BAHRUDDIN" , klasifikasi: "Narapidana"},
    { nama: "DEDI AGUSTIAN BIN SUARMAN" , klasifikasi: "Narapidana"},
    { nama: "AHMAD FAQI ARIZONA BIN ASMAWI" , klasifikasi: "Narapidana"},
    { nama: "NURHASANAH BINTI DJATIMAN" , klasifikasi: "Narapidana"},
    { nama: "SUPRIYADI BIN H MUSRIKIN" , klasifikasi: "Narapidana"},
    { nama: "BUDIYANTO BIN MADRUS" , klasifikasi: "Narapidana"},
    { nama: "BUKAT BIN SATRABI" , klasifikasi: "Narapidana"},
    { nama: "HENDRA JULIAN PUTRA BIN ABU YASID" , klasifikasi: "Narapidana"},
    { nama: "FITRIYANTI BINTI DJATIMIN" , klasifikasi: "Narapidana"},
    { nama: "HASAN BASRI BIN DARSONO" , klasifikasi: "Narapidana"},
    { nama: "WARID BIN NORHATIM" , klasifikasi: "Narapidana"},
    { nama: "UMI LATHIFA JAMALI JOHAN BINTI JAMALI" , klasifikasi: "Narapidana"},
    { nama: "HERUL BIN SANIMAN" , klasifikasi: "Narapidana"},
    { nama: "ARISANDI TRINOMA SENJA BINTI SUDARNO (ALM)" , klasifikasi: "Narapidana"},
    { nama: "AGUS RIBUT SUSANTO BIN SUKARNO (ALM)" , klasifikasi: "Narapidana"},
    { nama: "MOHAMMAD FAIZAL BIN MOH RAMLI" , klasifikasi: "Narapidana"},
    { nama: "MUNTAHA BIN SAHID" , klasifikasi: "Narapidana"},
    { nama: "SAFRIL HIDAYAT BIN ABD HANNAN" , klasifikasi: "Narapidana"},
    { nama: "SOLEHUDIN BIN SAHRI" , klasifikasi: "Narapidana"},
    { nama: "AGUS HARIYANTO BIN BUNAWI" , klasifikasi: "Narapidana"},
    { nama: "ACHMAD ZAINURI BIN MUKLAS" , klasifikasi: "Narapidana"},
    { nama: "DIDIK RASYIDI BIN RASIT" , klasifikasi: "Narapidana"},
    { nama: "K SYAFA'AT SR BIN SYAHRILLAH (alm)" , klasifikasi: "Narapidana"},
    { nama: "AJIB ABD MALIK BIN ABD MALIK" , klasifikasi: "Narapidana"},
    { nama: "AMINULLAH BIN MAT DILLAH" , klasifikasi: "Narapidana"},
    { nama: "BAMBANG HERMANTO BIN SUNARTO" , klasifikasi: "Narapidana"},
    { nama: "BAINI BIN JALAL" , klasifikasi: "Narapidana"},
    { nama: "SAIPI BIN MISTARI" , klasifikasi: "Narapidana"},
    { nama: "HAMZAH FATHULLAH BIN AMIN RUSDI" , klasifikasi: "Narapidana"},
    { nama: "SUPRIYADI BIN SUWAHNAN" , klasifikasi: "Narapidana"},
    { nama: "SAHIRUDDIN BIN SALE" , klasifikasi: "Narapidana"},
    { nama: "M RAMLI BIN SANDER" , klasifikasi: "Narapidana"},
    { nama: "NAUFAL BIN ZAINAL ARIFIN" , klasifikasi: "Narapidana"},
    { nama: "ASNI BIN SANIKA (ALM)" , klasifikasi: "Narapidana"},
    { nama: "FERY INDRAWAN BIN HERMAN SUGIARTO" , klasifikasi: "Narapidana"},
    { nama: "ACH JAUZA BIN JATIM" , klasifikasi: "Narapidana"},
    { nama: "CONGGI BIN WAHAB" , klasifikasi: "Narapidana"},
    { nama: "RASULI BIN BUHASIN" , klasifikasi: "Narapidana"},
    { nama: "SUDIARTO BIN MUHAMMAD ZAINI" , klasifikasi: "Narapidana"},
    { nama: "AHMAD YASID BIN BUDIN" , klasifikasi: "Narapidana"},
    { nama: "SUHENDRA BIN SAINI" , klasifikasi: "Narapidana"},
    { nama: "HALILI BIN SENAR" , klasifikasi: "Narapidana"},
    { nama: "SUYITNO BIN MURHAMIN" , klasifikasi: "Narapidana"},
    { nama: "MOH.SOLEHUR NIAWAN BIN JUNAIDI" , klasifikasi: "Narapidana"},
    { nama: "AKHMAD MUSTHOFA KAMIL BIN NURUNG" , klasifikasi: "Narapidana"},
    { nama: "JUNAIDI BIN ABDUL HAMID" , klasifikasi: "Narapidana"},
    { nama: "ASMIYANTO BIN SAHARUDDIN" , klasifikasi: "Narapidana"},
    { nama: "ASIR HUZAINI RIFANI BIN SUWARDI" , klasifikasi: "Narapidana"},
    { nama: "R ARIFIN BIN ABD.RAHMAN" , klasifikasi: "Narapidana"},
    { nama: "JEMMY RAHMATULLAH BIN ABDUL GANI (ALM)" , klasifikasi: "Narapidana"},
    { nama: "NASIRUN HERDIANTO BIN ALIBUDIN" , klasifikasi: "Narapidana"},
    { nama: "RUDDI BIN DA'IR" , klasifikasi: "Narapidana"},
    { nama: "HAYDAR ALI BIN AMI NULLAH" , klasifikasi: "Narapidana"},
    { nama: "ALIYA BIN MOH SURA" , klasifikasi: "Narapidana"},
    { nama: "SILUNG BIN LATIP" , klasifikasi: "Narapidana"},
    { nama: "SYAFI'E BIN MOH SURA" , klasifikasi: "Narapidana"},
    { nama: "BUDI HARTONO BIN TASLIM" , klasifikasi: "Narapidana"},
    { nama: "KEVIN REYHAN MAGHFIRA PUTRA BIN FIRMAN JAUHARI" , klasifikasi: "Narapidana"},
    { nama: "SYAMSURI BIN MANUDDIN" , klasifikasi: "Narapidana"},
    { nama: "JIBNO BIN ENEK" , klasifikasi: "Narapidana"},
    { nama: "MUSTAFA AFIF BIN MUSAINO" , klasifikasi: "Narapidana"},
    { nama: "FARHAT BIN ACHMAD ZAINURI" , klasifikasi: "Narapidana"},
    { nama: "KAHFAD MAHYUSIN BIN HAMDANI" , klasifikasi: "Narapidana"},
    { nama: "AINUL MUTAQIN BIN AHMAD BAHRI" , klasifikasi: "Narapidana"},
    { nama: "AGUS SALAM BIN SAHRIJAN" , klasifikasi: "Narapidana"},
    { nama: "MAS ADI BIN SAHABI" , klasifikasi: "Narapidana"},
    { nama: "ABD HADI RAHMAN BIN ABD RAHEM" , klasifikasi: "Narapidana"},
    { nama: "IMAM SANTOSO BIN SAHWI" , klasifikasi: "Narapidana"},
    { nama: "AKHMAD INSAN KAMIL BIN SYAMSURI" , klasifikasi: "Narapidana"},
    { nama: "BURHANUDDIN BIN HAMIDUK" , klasifikasi: "Narapidana"},
    { nama: "FAIZAL BASRI BIN H MOH RIFA'E" , klasifikasi: "Narapidana"},
    { nama: "AHMAD ZAHROINI BIN MAT SA'WAN" , klasifikasi: "Narapidana"},
    { nama: "ILHAM KHOLID BIN H MOH YUSRON RIKI" , klasifikasi: "Narapidana"},
    { nama: "BAMBANG EKO ISWANTO BIN ACH. JUNAIDI" , klasifikasi: "Narapidana"},
    { nama: "MOH RENDY BIN MASRAWI" , klasifikasi: "Narapidana"},
    { nama: "MOH AINUR RAHMAN BIN ACH RIFAI" , klasifikasi: "Narapidana"},
    { nama: "TAUFIQUR RAHMAN Bin SAKDUKI" , klasifikasi: "Narapidana"},
    { nama: "ARFAN ROFIQI BIN SARKAWI" , klasifikasi: "Narapidana"},
    { nama: "MUNIR BIN KHOZIN" , klasifikasi: "Narapidana"},
    { nama: "UMAM SYAHRUL BIN MUNIRI" , klasifikasi: "Narapidana"},
    { nama: "MUZAKKI BIN TAHIR" , klasifikasi: "Narapidana"},
    { nama: "MIDAWI BIN MAT" , klasifikasi: "Narapidana"},
    { nama: "ABDUL RAHIM AKBARI BIN ABDUL WAHID" , klasifikasi: "Narapidana"},
    { nama: "WISKARI BIN MOH RASID" , klasifikasi: "Narapidana"},
    { nama: "JUNAIDI BIN JUMAIRA" , klasifikasi: "Narapidana"},
    { nama: "KARNO BIN SUMATRO" , klasifikasi: "Narapidana"},
    { nama: "RP DEDY APRIYANTO BIN DINAR ABDULLAH" , klasifikasi: "Narapidana"},
    { nama: "M YUSUP BIN MUSAPI" , klasifikasi: "Narapidana"},
    { nama: "MALTUP BIN ABDULLAH" , klasifikasi: "Narapidana"},
    { nama: "SYAIFUL BAHRI BIN MOH HOSEN" , klasifikasi: "Narapidana"},
    { nama: "AMIR SYABIT BIN MURA'IE" , klasifikasi: "Narapidana"},
    { nama: "IBNU HAJAR BIN RAHEM" , klasifikasi: "Narapidana"},
    { nama: "NITO BIN SUDAHNAN (ALM)" , klasifikasi: "Narapidana"},
    { nama: "HERMAN URIP BIN MISRADIN" , klasifikasi: "Narapidana"},
    { nama: "EKO NUGROHO BIN BASUKI RACHMAD" , klasifikasi: "Narapidana"},
    { nama: "RIYANTO BIN SUKRA" , klasifikasi: "Narapidana"},
    { nama: "RIZAL AFRI BIN MASKUR" , klasifikasi: "Narapidana"},
    { nama: "MOH SAHNAN BIN MAULIDIN" , klasifikasi: "Narapidana"},
    { nama: "MASHUDI BIN MOCH. SOLEH" , klasifikasi: "Narapidana"},
    { nama: "HODRIYANTO BIN H.NURHASYIM" , klasifikasi: "Narapidana"},
    { nama: "MOH.NUR HIDAYAT BIN ACHMAD SURAT" , klasifikasi: "Narapidana"},
    { nama: "ETTO RIADI BIN ASIM" , klasifikasi: "Narapidana"},
    { nama: "ALI WAFA BIN ANWAR" , klasifikasi: "Narapidana"},
    { nama: "SUNDARI BIN HAMDAN" , klasifikasi: "Narapidana"},
    { nama: "NURYADI BIN MANTO DJARJO TUKIMAN" , klasifikasi: "Narapidana"},
    { nama: "HASBULLAH BIN ABDUL MUNI" , klasifikasi: "Narapidana"},
    { nama: "AGUS WANDY BIN JA'FAR" , klasifikasi: "Narapidana"},
    { nama: "ILHAM AINUR ROFIQ BIN RAHMATUL AMIR" , klasifikasi: "Narapidana"},
    { nama: "RUDI HERMANTO BIN SUWADI" , klasifikasi: "Narapidana"},
    { nama: "MAHDA BIN SUDAHRI" , klasifikasi: "Narapidana"},
    { nama: "MOH. MAIMUN BIN SANAWI" , klasifikasi: "Narapidana"},
    { nama: "IRHAS SYAMLAN BIN GES SYAMLAN" , klasifikasi: "Narapidana"},
    { nama: "AHMALI BIN SAHUR" , klasifikasi: "Narapidana"},
    { nama: "FERY HENDRIYANTO BIN ACH MUSAFFAK" , klasifikasi: "Narapidana"},
    { nama: "SALAMET BIN SUWI" , klasifikasi: "Narapidana"},
    { nama: "SUHARTONO BIN ABD.RAHMAN" , klasifikasi: "Narapidana"},
    { nama: "K.M.ZURNI TAMAM BIN KH.HUBAIDI" , klasifikasi: "Narapidana"},
    { nama: "ABD RAHEM BIN MATHAWI" , klasifikasi: "Narapidana"},
    { nama: "HENDRA FIRMANSYAH BIN FIRMAN TAUFIK" , klasifikasi: "Narapidana"},
    { nama: "KAILANI BIN MAHMUD" , klasifikasi: "Narapidana"},
    { nama: "RISNO BIN MINAWI" , klasifikasi: "Narapidana"},
    { nama: "HENDRA GUNAWAN BIN MOH ALI" , klasifikasi: "Narapidana"},
    { nama: "BAIHAQI BIN AS'AD" , klasifikasi: "Narapidana"},
    { nama: "PUSAHRA BIN NIWAR" , klasifikasi: "Narapidana"},
    { nama: "KARIMULLAH BIN H MAHFUD" , klasifikasi: "Narapidana"},
    { nama: "HOTIM BIN HASAN" , klasifikasi: "Narapidana"},
    { nama: "NURUL KHOLIS BIN SHODIK" , klasifikasi: "Narapidana"},
    { nama: "VILA TOFIL AZAM FAZA BIN ACH JAKFAR" , klasifikasi: "Narapidana"},
    { nama: "AHMAD ZUHRA BIN ASWARI" , klasifikasi: "Narapidana"},
    { nama: "TIGOR SETIAWAN BIN ATMAWI" , klasifikasi: "Narapidana"},
    { nama: "MI'ODDIN BIN NIKOM" , klasifikasi: "Narapidana"},
    { nama: "DENI NORDIYANSAH BIN SAHEDI" , klasifikasi: "Narapidana"},
    { nama: "HARIS BIN MI'ODDIN" , klasifikasi: "Narapidana"},
    { nama: "HALILI BIN MI'ODDIN" , klasifikasi: "Narapidana"},
    { nama: "RIZKI UMAR MA'RUF BIN ," , klasifikasi: "Narapidana"},
    { nama: "RENDRA FEBRI CAHYADI BIN JONI" , klasifikasi: "Narapidana"},
    { nama: "AHMAD AINUR ROFIK BIN MUNIB" , klasifikasi: "Narapidana"},
    { nama: "MOH SOLEH BIN TOHA" , klasifikasi: "Narapidana"},
    { nama: "MOH RAMLI BIN MOH DAHLAN" , klasifikasi: "Narapidana"},
    { nama: "SAMA' BIN NARISO" , klasifikasi: "Narapidana"},
    { nama: "SAHRANI BIN MAJJANI" , klasifikasi: "Narapidana"},
    { nama: "WASIL BAHRI BIN SYAIFUL BAHRI" , klasifikasi: "Narapidana"},
    { nama: "MOH ILMI FAUZAN BIN MATSA'IE" , klasifikasi: "Narapidana"},
    { nama: "ABDUL LATIF SADY BIN SADY" , klasifikasi: "Narapidana"},
    { nama: "RAMLI BIN HASIUDIN" , klasifikasi: "Narapidana"},
    { nama: "MOH ELKIT BIN MARSUKI" , klasifikasi: "Narapidana"},
    { nama: "EMMAT BIN MISTAWI" , klasifikasi: "Narapidana"},
    { nama: "HENDRI BIN MOH. HASIM (ALM)" , klasifikasi: "Narapidana"},
    { nama: "ASAN BIN MARHAWAN" , klasifikasi: "Narapidana"},
    { nama: "FATHOL BAHRI BIN PIT YUSUF" , klasifikasi: "Narapidana"},
    { nama: "MOH FIKRI SUAIDI BIN MOH SA'I" , klasifikasi: "Narapidana"},
    { nama: "ZAINUDDIN BIN MARHATIB" , klasifikasi: "Narapidana"},
    { nama: "MOH SUHAIDI BIN SA'AT" , klasifikasi: "Narapidana"},
    { nama: "MOHAMMAD ASY'ARI BIN AMAN" , klasifikasi: "Narapidana"},
    { nama: "JUHARIYANTO BIN HALIDIN" , klasifikasi: "Narapidana"},
    { nama: "MUHAMMAD TIJANI BIN MOH MUNIR" , klasifikasi: "Narapidana"},
    { nama: "ATRAWI BIN DURRAZEK" , klasifikasi: "Narapidana"},
    { nama: "ACHMAD SANTOSO BIN H.YASET AZIZ" , klasifikasi: "Narapidana"},
    { nama: "TAUFIQURRAHMAN BIN HASAN" , klasifikasi: "Narapidana"},
    { nama: "JATIM ASHARI BIN MUNTUN" , klasifikasi: "Narapidana"},
    { nama: "AGUS BIN ATMAWI" , klasifikasi: "Narapidana"},
    { nama: "R.DWI DHARMA PUTRA BIN IMAM SANTOSO (Alm)" , klasifikasi: "Narapidana"},
    { nama: "BUZAINI BIN SAHWA" , klasifikasi: "Narapidana"},
    { nama: "NOVIL BIN QOSIM" , klasifikasi: "Narapidana"},
    { nama: "JEFRI HERMANTO BIN MISNAWI" , klasifikasi: "Narapidana"},
    { nama: "NOVAL LAILUR ROHMAN BIN RUDI HARTONO" , klasifikasi: "Narapidana"},
    { nama: "RONI BIN MUHAMMAD" , klasifikasi: "Narapidana"},
    { nama: "DIKI SETIAWAN BIN AHMADI" , klasifikasi: "Narapidana"},
    { nama: "RAHIM BIN CASLAM" , klasifikasi: "Narapidana"},
    { nama: "SUHARTONO BIN SAHI" , klasifikasi: "Narapidana"},
    { nama: "IMAM MASRUKI HARYADI BIN ACH HERI" , klasifikasi: "Narapidana"},
    { nama: "MAHFUD BIN SUNARTO" , klasifikasi: "Narapidana"},
    { nama: "FAWAID BIN ZAINAL" , klasifikasi: "Narapidana"},
    { nama: "ERFAN BIN MASRIYA" , klasifikasi: "Narapidana"},
    { nama: "RAIS BIN MUNAAM" , klasifikasi: "Narapidana"},
    { nama: "ACH.BASAIRUL ABSAR BIN MOH.HARIS" , klasifikasi: "Narapidana"},
    { nama: "TAUFIQURRAHMAN BIN MOHASAN" , klasifikasi: "Narapidana"},
    { nama: "M MU'IS BIN DULLATIF" , klasifikasi: "Narapidana"},
    { nama: "ABDUL MALIK FAIZIN BIN FALE AMIN" , klasifikasi: "Narapidana"},
    { nama: "AMHAR BIN SUBADRIH" , klasifikasi: "Narapidana"},
    { nama: "FAIZAL ADITYA KURNIAWAN BIN SUKRAM" , klasifikasi: "Narapidana"},
    { nama: "MALIKUR RAHMAN BIN BAMBANG SUKIRMAN" , klasifikasi: "Narapidana"},
    { nama: "TRISNO HADI BIN SIMAN" , klasifikasi: "Narapidana"},
    { nama: "DARWIS BIN SADIN" , klasifikasi: "Narapidana"},
    { nama: "MASHODI BIN ALWAN" , klasifikasi: "Narapidana"},
    { nama: "HARIYANTO BIN KARIM" , klasifikasi: "Narapidana"},
    { nama: "DEDI YUSUF BIN SAIFUL BAHRI" , klasifikasi: "Narapidana"},
    { nama: "SAMLI BIN TRISNO" , klasifikasi: "Narapidana"},
    { nama: "ZAINAL IRFAN FAHMI BIN MOH. RUGIK" , klasifikasi: "Narapidana"},
    { nama: "AHMAD QURTUBI BIN NURSYAMSI" , klasifikasi: "Narapidana"},
    { nama: "ALI WAFI BIN MAT" , klasifikasi: "Narapidana"},
    { nama: "YAYAN SISWANTO BIN DIDIK" , klasifikasi: "Narapidana"},
    { nama: "MESTAWI BIN BAHRON" , klasifikasi: "Narapidana"},
    { nama: "FAWAID BIN MATSULIH" , klasifikasi: "Narapidana"},
    { nama: "SAMSURI BIN DAWI" , klasifikasi: "Narapidana"},
    { nama: "ACHMAD NOER BIN BEDUH" , klasifikasi: "Narapidana"},
    { nama: "TAUFIQUR RAHMAN EMES BIN MOH DAIEH" , klasifikasi: "Narapidana"},
    { nama: "NOFEK AJI PANBUDI BIN MOH HANI" , klasifikasi: "Narapidana"},
    { nama: "JUHAIRIYAH BINTI DINAWI" , klasifikasi: "Narapidana"},
    { nama: "ACH FAID HISBULLAH BIN SUKI" , klasifikasi: "Narapidana"},
    { nama: "TAUFIQUR RAHMAN BIN RINAHWI" , klasifikasi: "Narapidana"},
    { nama: "MOH HARUN BIN JAMALUDDIN" , klasifikasi: "Narapidana"},
    { nama: "AHMAD FAWAID BIN ZIBUR" , klasifikasi: "Narapidana"},
    { nama: "BAMBANG HERMANTO BIN ACHMAD SYAIFUDIN" , klasifikasi: "Narapidana"},
    { nama: "MOHAMMAD RIZKI ROMADHAN BIN ACH SYAFIUDIN" , klasifikasi: "Narapidana"},
    { nama: "UNTUNG BIN SUHERYADI" , klasifikasi: "Narapidana"},
    { nama: "ZAIRUPI BIN SURAKNAH" , klasifikasi: "Narapidana"},
    { nama: "ANDRIYANSAH BIN MOH AWI" , klasifikasi: "Narapidana"},
    { nama: "DAYAT HARYANTO BIN ABDUR RAFIK" , klasifikasi: "Narapidana"},
    { nama: "SIGIT INDRIANTORO BIN EDI SUKARNO PUTRO" , klasifikasi: "Narapidana"},
    { nama: "MOHAMMAD JUNAIDI BIN MISNAL" , klasifikasi: "Narapidana"},
    { nama: "ANIL ABSA BIN ALI BUHNAN" , klasifikasi: "Narapidana"},
    { nama: "SYAIFUL ADY WAHYUDI BIN TAJOL" , klasifikasi: "Narapidana"},
    { nama: "MOH FAISAL GUNAWAN BIN M RUKIYANTO" , klasifikasi: "Narapidana"},
    { nama: "ABDUL SANEN BIN LIYAN" , klasifikasi: "Narapidana"},
    { nama: "EDI DARSONO BIN BAHRAWI" , klasifikasi: "Narapidana"},
    { nama: "ISMAWATI BINTI MULATUP" , klasifikasi: "Narapidana"},
    { nama: "AENGSIA IKA AGUSTIN FIKASARI BINTI ABD KARIM" , klasifikasi: "Narapidana"},
    { nama: "SULTANI RAYHAN LUTFI BIN MUHAMMAD LUTFI" , klasifikasi: "Narapidana"},
    { nama: "JUMAIRI BIN MOHAMMAD ABDUL KARIM (ALM)" , klasifikasi: "Narapidana"},
    { nama: "IQBAL FAHROBI BIN RUSDIYANTO" , klasifikasi: "Narapidana"},
    { nama: "MURHAMIN BIN BUSAHA" , klasifikasi: "Narapidana"},
    { nama: "ABD GAFFAR BIN HAMSAH" , klasifikasi: "Narapidana"},
    { nama: "JUNAIDI ABDILLAH BIN MUCHTAR" , klasifikasi: "Narapidana"},
    { nama: "NURUL FATAH BIN SAIFUL BAHRI" , klasifikasi: "Narapidana"},
    { nama: "RAHMAN HIDAYAT BIN MOH.HASAN" , klasifikasi: "Narapidana"},
    { nama: "SAHIR BIN KANTAR" , klasifikasi: "Narapidana"},
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