<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>Pendaftaran Online Layanan Kunjungan</title>
    <meta name="description" content="" />
    <meta name="keywords" content="" />

    <!-- Favicons -->
    <link href="assets/img/favicon.png" rel="icon" />
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com" rel="preconnect" />
    <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
      rel="stylesheet"
    />

    <!-- Vendor CSS Files -->
    <link href="{{ asset('assets/vendor/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/vendor/bootstrap-icons/bootstrap-icons.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/vendor/aos/aos.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/vendor/swiper/swiper-bundle.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/vendor/glightbox/css/glightbox.min.css') }}" rel="stylesheet">

    <!-- Main CSS File -->
    <link href="{{asset('assets/css/main.css')}}" rel="stylesheet" />
    <link rel="icon" href="https://i.ibb.co.com/5ggVbPJB/Logo-Kementrian-Imigrasi-dan-Pemasyarakatan-2024.png" type="image/png">
  </head>

  <body class="index-page">
    <header id="header" class="header fixed-top">
      <div class="container-fluid container-xl position-relative">
        <div class="top-row d-flex align-items-center justify-content-between">
          <a href="index.html" class="logo d-flex align-items-center">
            <!-- Uncomment the line below if you also wish to use an image logo -->
            <!-- <img src="assets/img/logo.webp" alt=""> -->
            <!-- <h1 class="sitename">Logo</h1> -->
            <img
              src="https://i.ibb.co.com/5ggVbPJB/Logo-Kementrian-Imigrasi-dan-Pemasyarakatan-2024.png"
              class="logo-kemenkumham"
              alt="Logo Kemenkumham"
            />
          </a>

          <div class="d-flex align-items-center">
            <div class="social-links">
              <a
                href="https://www.facebook.com/rutan2bsumenep/"
                class="facebook"
                onclick="
                  setTimeout(function () {
                    window.location =
                      'fb://facewebmodal/f?href=https://www.facebook.com/rutan2bsumenep/';
                  }, 100)
                "
              >
                <i class="bi bi-facebook"></i>
              </a>

              <a
                href="https://x.com/RtnSumenep355"
                class="twitter"
                onclick="
                  setTimeout(function () {
                    window.location =
                      'twitter://user?screen_name=RtnSumenep355';
                  }, 100)
                "
              >
                <i class="bi bi-twitter"></i>
              </a>

              <a
                href="https://www.instagram.com/rutansumenep/"
                class="instagram"
                onclick="
                  setTimeout(function () {
                    window.location = 'instagram://user?username=rutansumenep';
                  }, 100)
                "
              >
                <i class="bi bi-instagram"></i>
              </a>

              <a
                href="https://www.tiktok.com/@rutansumenep"
                class="tiktok"
                onclick="
                  setTimeout(function () {
                    window.location = 'snssdk1128://user/profile/rutansumenep';
                  }, 100)
                "
              >
                <i class="bi bi-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="nav-wrap">
        <div class="container d-flex justify-content-center position-relative">
          <nav id="navmenu" class="navmenu">
            <ul>
              <li><a href="#hero" class="active">Beranda</a></li>
              <li><a href="#about">Tentang Kami</a></li>
              <li><a href="#features">Informasi</a></li>
              <li><a href="#services">Jadwal</a></li>
              <!-- <li><a href="#pricing">Testimoni</a></li> -->
              <li><a href="#portfolio">Galeri</a></li>
              <!-- <li><a href="#team">Team</a></li>
            <li class="dropdown"><a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#">Dropdown 1</a></li>
                <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
              </ul>
            </li>
            <li><a href="#contact">Contact</a></li> -->
            </ul>
            <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </div>
    </header>

    <main class="main">
      <!-- Hero Section -->
      <section id="hero" class="hero section dark-background">
        <div class="video-background">
          <!-- <video autoplay="" muted="" loop="" playsinline="">
          <source src="assets/img/video/video-2.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video> -->
          <img
            src="{{ asset('assets/images/Gemini_Generated_Image_ba8fryba8fryba8f.png')}}"
            style="width: 100%; height: auto"
            alt=""
          />
          <div class="video-overlay"></div>
        </div>

        <div class="hero-content">
          <div class="container position-relative">
            <div class="row justify-content-center text-center">
              <div class="col-lg-10">
                <h1 data-aos="fade-up" data-aos-delay="100">
                  Pendaftaran Online Layanan Kunjungan
                </h1>
                <p data-aos="fade-up" data-aos-delay="200">
                  RUMAH TAHANAN NEGARA KELAS IIB SUMENEP
                </p>
                <!-- <p data-aos="fade-up" class="fs-6" data-aos-delay="200">Daftarkan kunjungan Anda dengan mudah, cepat, dan aman.</p> -->
                <div
                  class="hero-buttons"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <a href="{{ route('registration.index')}}" class="btn btn-midnightblue"
                    >Pendaftaran Online</a
                  >
                  <a href="#services" class="btn btn-warning"
                    >Layanan Integrasi</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /Hero Section -->

      <!-- About Section -->
      <section id="about" class="about section">
        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
          <!-- <span class="subtitle">About</span> -->
          <h2>Tentang Kami</h2>
          <p class="mb-4">
            Website ini merupakan layanan resmi untuk pendaftaran kunjungan dan
            penitipan barang pada rutan yang bertujuan meningkatkan pelayanan
            kepada masyarakat secara digital.
          </p>
          <div class="container">
            <div class="row g-4">
              <div class="col-lg-3 col-md-6">
                <div class="feature-card">
                  <div class="feature-icon">
                    <i class="bi bi-globe"></i>
                  </div>
                  <div class="feature-title">
                    Pendaftaran kunjungan dilakukan secara online
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="feature-card">
                  <div class="feature-icon">
                    <i class="bi bi-people"></i>
                  </div>
                  <div class="feature-title">
                    Mempermudah proses pendaftaran
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="feature-card">
                  <div class="feature-icon">
                    <i class="bi bi-lightning-charge"></i>
                  </div>
                  <div class="feature-title">Proses verifikasi lebih cepat</div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="feature-card">
                  <div class="feature-icon">
                    <i class="bi bi-ticket-perforated"></i>
                  </div>
                  <div class="feature-title">
                    Mendapat nomor antrean otomatis
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Section Title -->

        <div class="container" data-aos="fade-up" data-aos-delay="100"></div>
      </section>
      <!-- /About Section -->

      <!-- Features Section -->
      <section id="features" class="features section dark-background-section">
        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
          <!-- <span class="subtitle">Features</span> -->
          <h2>Informasi</h2>
          <!-- <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> -->

          <div class="container">
            <div class="row g-5">
              <!-- ALUR -->
              <div class="col-lg-7">
                <h3 class="section-title" data-aos="fade-up">
                  Alur Pendaftaran
                </h3>

                <div class="timeline">
                  <div class="timeline-item" data-aos="fade-right">
                    <div class="timeline-dot">1</div>
                    <div class="timeline-card">Isi formulir pendaftaran</div>
                  </div>

                  <div
                    class="timeline-item"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  >
                    <div class="timeline-dot">2</div>
                    <div class="timeline-card">
                      Upload dokumen yang diperlukan
                    </div>
                  </div>

                  <div
                    class="timeline-item"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    <div class="timeline-dot">3</div>
                    <div class="timeline-card">Dapatkan nomor antrean</div>
                  </div>

                  <div
                    class="timeline-item"
                    data-aos="fade-right"
                    data-aos-delay="300"
                  >
                    <div class="timeline-dot">4</div>
                    <div class="timeline-card">Datang sesuai jadwal</div>
                  </div>
                </div>
              </div>

              <!-- PERSYARATAN -->
              <div class="col-lg-5">
                <h3 class="section-title" data-aos="fade-up">
                  Persyaratan Kunjungan
                </h3>

                <div class="requirement-box" data-aos="fade-left">
                  <div class="req-item">
                    <div class="req-icon">
                      <i class="bi bi-person-badge"></i>
                    </div>
                    Membawa KTP asli
                  </div>

                  <div class="req-item">
                    <div class="req-icon">
                      <i class="bi bi-check-circle"></i>
                    </div>
                    Sudah terdaftar secara online
                  </div>

                  <div class="req-item">
                    <div class="req-icon">
                      <i class="bi bi-calendar-event"></i>
                    </div>
                    Datang sesuai jadwal
                  </div>

                  <div class="req-item">
                    <div class="req-icon">
                      <i class="bi bi-shield-check"></i>
                    </div>
                    Mematuhi tata tertib kunjungan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Section Title -->
      </section>
      <!-- /Features Section -->

      <!-- Services Section -->
      <section id="services" class="services section">
        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
          <!-- <span class="subtitle">Services</span>
        <h2>Jadwal Kunjungan</h2> -->
          <!-- <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> -->

          <div class="container">
            <div class="text-center mb-5">
              <h2 class="schedule-title">Jadwal Layanan Kunjungan</h2>
              <!-- <p class="text-muted">Jam layanan: 08.30 - 11.30</p> -->
            </div>

            <div class="row g-4">
              <!-- SENIN -->
              <div class="col-lg-4 col-md-6">
                <div class="schedule-card">
                  <div class="schedule-header">
                    <div class="schedule-icon">
                      <i class="bi bi-calendar"></i>
                    </div>
                    <div class="schedule-day">Senin</div>
                  </div>

                  <span class="service-tag">Penitipan Barang</span>

                  <div class="schedule-time">
                    <i class="bi bi-clock"></i>
                    08.30 - 11.30 WIB
                  </div>
                </div>
              </div>

              <!-- SELASA -->
              <div class="col-lg-4 col-md-6">
                <div class="schedule-card">
                  <div class="schedule-header">
                    <div class="schedule-icon">
                      <i class="bi bi-calendar"></i>
                    </div>
                    <div class="schedule-day">Selasa</div>
                  </div>

                  <span class="service-tag">Kunjungan Tatap Muka</span>
                  <span class="service-tag">Penitipan Barang</span>

                  <div class="schedule-time">
                    <i class="bi bi-clock"></i>
                    08.30 - 11.30 WIB
                  </div>
                </div>
              </div>

              <!-- RABU -->
              <div class="col-lg-4 col-md-6">
                <div class="schedule-card">
                  <div class="schedule-header">
                    <div class="schedule-icon">
                      <i class="bi bi-calendar"></i>
                    </div>
                    <div class="schedule-day">Rabu</div>
                  </div>

                  <span class="service-tag">Penitipan Barang</span>

                  <div class="schedule-time">
                    <i class="bi bi-clock"></i>
                    08.30 - 11.30 WIB
                  </div>
                </div>
              </div>

              <!-- KAMIS -->
              <div class="col-lg-4 col-md-6">
                <div class="schedule-card">
                  <div class="schedule-header">
                    <div class="schedule-icon">
                      <i class="bi bi-calendar"></i>
                    </div>
                    <div class="schedule-day">Kamis</div>
                  </div>

                  <span class="service-tag">Kunjungan Tatap Muka</span>
                  <span class="service-tag">Penitipan Barang</span>

                  <div class="schedule-time">
                    <i class="bi bi-clock"></i>
                    08.30 - 11.30 WIB
                  </div>
                </div>
              </div>

              <!-- JUMAT -->
              <div class="col-lg-4 col-md-6">
                <div class="schedule-card">
                  <div class="schedule-header">
                    <div class="schedule-icon">
                      <i class="bi bi-calendar"></i>
                    </div>
                    <div class="schedule-day">Jum'at</div>
                  </div>

                  <span class="service-tag">Penitipan Barang</span>

                  <div class="schedule-time">
                    <i class="bi bi-clock"></i>
                    08.30 - 11.30 WIB
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Section Title -->
      </section>
      <!-- /Services Section -->

      <!-- Portfolio Section -->
    <section id="portfolio" class="portfolio section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Batik Catra</h2>
        <p>Hasil karya batik yang dibuat oleh warga binaan sebagai bagian dari program pembinaan keterampilan di Rutan Kelas IIB Sumenep.</p>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="isotope-layout" data-default-filter="*" data-layout="fitRows" data-sort="original-order">

          <div class="portfolio-filters-wrapper" data-aos="fade-up" data-aos-delay="100">
            <ul class="portfolio-filters isotope-filters">
              <li data-filter="*" class="filter-active">Semua</li>
              <li data-filter=".filter-branding">Galeri</li>
              <li data-filter=".filter-web">Produk</li>
            </ul>
          </div>

          <div class="row gy-4 portfolio-grid isotope-container" data-aos="fade-up" data-aos-delay="200">

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div class="portfolio-card">
                <div class="image-container">
                  <img src="{{ asset('assets/images/pameran_1.webp') }}" class="img-fluid" alt="Brand Identity" loading="lazy">
                  <div class="overlay">
                    <div class="overlay-content">
                      <a href="{{ asset('assets/images/pameran_1.webp') }}" class="glightbox zoom-link" title="Brand Identity Project">
                        <i class="bi bi-zoom-in"></i>
                      </a>
                      <!-- <a href="portfolio-details.html" class="details-link" title="View Project Details">
                        <i class="bi bi-arrow-right"></i> -->
                      </a>
                    </div>
                  </div>
                </div>
                <div class="content">
                  <h3>Brand Identity</h3>
                  <p>Corporate branding and visual identity system</p>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
              <div class="portfolio-card">
                <div class="image-container">
                  <img src="{{ asset ('assets/images/produk_1.webp') }}" class="img-fluid" alt="E-commerce Platform" loading="lazy">
                  <div class="overlay">
                    <div class="overlay-content">
                      <a href="{{ asset ('assets/images/produk_1.webp') }}" class="glightbox zoom-link" title="E-commerce Platform">
                        <i class="bi bi-zoom-in"></i>
                      </a>
                      <!-- <a href="portfolio-details.html" class="details-link" title="View Project Details">
                        <i class="bi bi-arrow-right"></i> -->
                      </a>
                    </div>
                  </div>
                </div>
                <div class="content">
                  <h3>E-commerce Platform</h3>
                  <p>Modern online shopping experience</p>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div class="portfolio-card">
                <div class="image-container">
                  <img src="{{ asset ('assets/images/pameran_6.webp') }}" class="img-fluid" alt="Logo Collection" loading="lazy">
                  <div class="overlay">
                    <div class="overlay-content">
                      <a href="{{ asset ('assets/images/pameran_6.webp') }}" class="glightbox zoom-link" title="Logo Collection">
                        <i class="bi bi-zoom-in"></i>
                      </a>
                      <!-- <a href="portfolio-details.html" class="details-link" title="View Project Details">
                        <i class="bi bi-arrow-right"></i> -->
                      </a>
                    </div>
                  </div>
                </div>
                <div class="content">
                  <h3>Logo Collection</h3>
                  <p>Diverse brand mark explorations</p>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div class="portfolio-card">
                <div class="image-container">
                  <img src="{{ asset ('assets/images/pameran_2.webp') }}" class="img-fluid" alt="Logo Collection" loading="lazy">
                  <div class="overlay">
                    <div class="overlay-content">
                      <a href="{{ asset ('assets/images/pameran_2.webp') }}" class="glightbox zoom-link" title="Logo Collection">
                        <i class="bi bi-zoom-in"></i>
                      </a>
                      <!-- <a href="portfolio-details.html" class="details-link" title="View Project Details">
                        <i class="bi bi-arrow-right"></i> -->
                      </a>
                    </div>
                  </div>
                </div>
                <div class="content">
                  <h3>Logo Collection 2</h3>
                  <p>Diverse brand mark explorations</p>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div class="portfolio-card">
                <div class="image-container">
                  <img src="{{ asset ('assets/images/pameran_3.webp') }}" class="img-fluid" alt="Logo Collection" loading="lazy">
                  <div class="overlay">
                    <div class="overlay-content">
                      <a href="{{ asset ('assets/images/pameran_3.webp') }}" class="glightbox zoom-link" title="Logo Collection">
                        <i class="bi bi-zoom-in"></i>
                      </a>
                      <!-- <a href="portfolio-details.html" class="details-link" title="View Project Details">
                        <i class="bi bi-arrow-right"></i> -->
                      </a>
                    </div>
                  </div>
                </div>
                <div class="content">
                  <h3>Logo Collection 3</h3>
                  <p>Diverse brand mark explorations</p>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
              <div class="portfolio-card">
                <div class="image-container">
                  <img src="{{ asset ('assets/images/produk_5.webp') }}" class="img-fluid" alt="Mobile App Design" loading="lazy">
                  <div class="overlay">
                    <div class="overlay-content">
                      <a href="{{ asset ('assets/images/produk_5.webp') }}" class="glightbox zoom-link" title="Mobile App Design">
                        <i class="bi bi-zoom-in"></i>
                      </a>
                      <!-- <a href="portfolio-details.html" class="details-link" title="View Project Details">
                        <i class="bi bi-arrow-right"></i> -->
                      </a>
                    </div>
                  </div>
                </div>
                <div class="content">
                  <h3>Mobile App Design</h3>
                  <p>User-centered interface design</p>
                </div>
              </div>
            </div><!-- End Portfolio Item -->
            
            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
              <div class="portfolio-card">
                <div class="image-container">
                  <img src="{{ asset ('assets/images/produk_4.webp') }}" class="img-fluid" alt="Mobile App Design" loading="lazy">
                  <div class="overlay">
                    <div class="overlay-content">
                      <a href="{{ asset ('assets/images/produk_4.webp') }}" class="glightbox zoom-link" title="Mobile App Design">
                        <i class="bi bi-zoom-in"></i>
                      </a>
                      <!-- <a href="portfolio-details.html" class="details-link" title="View Project Details">
                        <i class="bi bi-arrow-right"></i> -->
                      </a>
                    </div>
                  </div>
                </div>
                <div class="content">
                  <h3>Mobile App Design 2</h3>
                  <p>User-centered interface design</p>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
              <div class="portfolio-card">
                <div class="image-container">
                  <img src="{{ asset ('assets/images/produk_7.webp') }}" class="img-fluid" alt="Mobile App Design" loading="lazy">
                  <div class="overlay">
                    <div class="overlay-content">
                      <a href="{{ asset ('assets/images/produk_7.webp') }}" class="glightbox zoom-link" title="Mobile App Design">
                        <i class="bi bi-zoom-in"></i>
                      </a>
                      <!-- <a href="portfolio-details.html" class="details-link" title="View Project Details">
                        <i class="bi bi-arrow-right"></i> -->
                      </a>
                    </div>
                  </div>
                </div>
                <div class="content">
                  <h3>Mobile App Design 3</h3>
                  <p>User-centered interface design</p>
                </div>
              </div>
            </div><!-- End Portfolio Item -->
          </div><!-- End Portfolio Grid -->

        </div>

      </div>

    </section><!-- /Portfolio Section -->


    <footer id="footer" class="footer dark-background">
      <div class="container">
        <div class="row gy-5">
          <div class="col-lg-4">
            <div class="footer-content">
              <a href="index.html" class="logo d-flex align-items-center mb-4">
                <span class="sitename">Website</span>
              </a>
              <p class="mb-4">
                Platform digital yang memudahkan proses pendaftaran kunjungan dan penitipan barang secara online dengan sistem yang cepat, praktis, dan transparan di Rumah Tahanan Negara Kelas IIB Sumenep.
              </p>

              <div class="newsletter-form">
                <h5>Stay Updated</h5>
                <form
                  action="forms/newsletter.php"
                  method="post"
                  class="php-email-form"
                >
                  <!-- <div class="input-group">
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder="Enter your email"
                      required=""
                    />
                    <button type="submit" class="btn-subscribe">
                      <i class="bi bi-send"></i>
                    </button>
                  </div> -->
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Thank you for subscribing!</div>
                </form>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-6">
            <div class="footer-links">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#"><i class="bi bi-chevron-right"></i> About</a>
                </li>
                <li>
                  <a href="#"><i class="bi bi-chevron-right"></i> Careers</a>
                </li>
                <li>
                  <a href="#"><i class="bi bi-chevron-right"></i> Press</a>
                </li>
                <li>
                  <a href="#"><i class="bi bi-chevron-right"></i> Blog</a>
                </li>
                <li>
                  <a href="#"><i class="bi bi-chevron-right"></i> Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <!-- <div class="col-lg-2 col-6">
            <div class="footer-links">
              <h4>Solutions</h4>
              <ul>
                <li>
                  <a href="#"
                    ><i class="bi bi-chevron-right"></i> Digital Strategy</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="bi bi-chevron-right"></i> Cloud Computing</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="bi bi-chevron-right"></i> Data Analytics</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="bi bi-chevron-right"></i> AI Solutions</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="bi bi-chevron-right"></i> Cybersecurity</a
                  >
                </li>
              </ul>
            </div>
          </div> -->

          <div class="col-lg-4">
            <div class="footer-contact">
              <h4>Get in Touch</h4>
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="bi bi-geo-alt"></i>
                </div>
                <div class="contact-info">
                  <p>
                    Jl. Kiyai H. Mansyur No.355, Podak, Pabian, Kec. Kota Sumenep, Kabupaten Sumenep, Jawa Timur 69417
                  </p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="bi bi-telephone"></i>
                </div>
                <div class="contact-info">
                  <p>(0328) 662124</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="bi bi-envelope"></i>
                </div>
                <div class="contact-info">
                  <p>rutansumenep@yahoo.com</p>
                </div>
              </div>

              <div class="footer-social">
                <a href="#"><i class="bi bi-facebook"></i></a>
                <a href="#"><i class="bi bi-twitter-x"></i></a>
                <a href="#"><i class="bi bi-linkedin"></i></a>
                <a href="#"><i class="bi bi-youtube"></i></a>
                <a href="#"><i class="bi bi-github"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="copyright">
                <p>
                  © <span>Copyright</span>
                  <strong class="px-1 sitename">Website</strong>
                  <span>All Rights Reserved</span>
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
              </div>
              <div class="credits">
                <!-- All the links in the footer should remain intact. -->
                <!-- You can delete the links only if you've purchased the pro version. -->
                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
                Designed by
                <a href="https://bootstrapmade.com/">BootstrapMade</a> |
                <a href="https://bootstrapmade.com/tools/">DevTools</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- Scroll Top -->
    <a
      href="#"
      id="scroll-top"
      class="scroll-top d-flex align-items-center justify-content-center"
      ><i class="bi bi-arrow-up-short"></i
    ></a>

    <!-- Preloader -->
    <div id="preloader"></div>

    <!-- Vendor JS Files -->
    <script src="{{ asset ('assets/vendor/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
    <script src="{{ asset ('assets/vendor/php-email-form/validate.js')}}"></script>
    <script src="{{ asset ('assets/vendor/aos/aos.js')}}"></script>
    <script src="{{ asset ('assets/vendor/purecounter/purecounter_vanilla.js')}}"></script>
    <script src="{{ asset ('assets/vendor/swiper/swiper-bundle.min.js')}}"></script>
    <script src="{{ asset ('assets/vendor/imagesloaded/imagesloaded.pkgd.min.js')}}"></script>
    <script src="{{ asset ('assets/vendor/isotope-layout/isotope.pkgd.min.js')}}"></script>
    <script src="{{ asset ('assets/vendor/glightbox/js/glightbox.min.js')}}"></script>

    <!-- Main JS File -->
    {{-- <script src="js/main.js"></script> --}}
    <script src="{{ asset('assets/js/main.js') }}"></script>
    <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
    <script>
      AOS.init({
        duration: 800,
        once: true,
        offset: 80,
      });
    </script>
  </body>
</html>
