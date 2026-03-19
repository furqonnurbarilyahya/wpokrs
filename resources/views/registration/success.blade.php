<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <title>Pendaftaran Berhasil</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap 5 CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link rel="icon" href="https://i.ibb.co.com/yBWrMqZY/Gemini-Generated-Image-lc5naelc5naelc5n.png" type="image/png">
  </head>

  <body
    class="min-vh-100 d-flex align-items-center justify-content-center bg-light"
  >
    <main class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-6 col-lg-5">
          <section class="card shadow-sm rounded-4">
            <div class="card-body p-4 p-md-5 text-center">
              <!-- Success Indicator -->
              <div
                class="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle bg-success text-white"
                style="width: 4.5rem; height: 4.5rem"
                aria-label="Pendaftaran berhasil"
              >
                <span class="fs-3 fw-bold">✓</span>
              </div>

              <h1 class="h5 fs-3 fw-bold mb-1">Pendaftaran Berhasil</h1>

              <p class="text-muted mb-3">Data pendaftaran Anda telah tercatat.</p>
              <b class="text-muted fs-5 mb-3">Kode Pendaftaran:</b>

              <div class="display-6 fw-bold my-4 text-success">
                {{ request('nomor') ?? '-' }}
              </div>

              <b class="text-muted fs">
                Silakan simpan / tangkap layar (screenshot) halaman ini.
              </b>
              <br><br>
              <p class="text-muted fs mb-4">
                Kemudian tunjukkan <strong>Kode Pendaftaran</strong>,
                <strong>Kartu Identitas</strong>, dan
                <strong>Surat Izin Besuk</strong> kepada petugas di loket.
              </p>

              <a href="/" class="btn btn-success btn-lg w-100 fw-semibold">
                Kembali ke Halaman Awal
              </a>

              <footer class="mt-4">
                <small class="text-muted">
                  © Layanan Pendaftaran Online Kunjungan Rutan Sumenep
                </small>
              </footer>
            </div>
          </section>
        </div>
      </div>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    {{-- <script>
      const params = new URLSearchParams(window.location.search);
      const nomor = params.get("nomor");
      document.getElementById("nomor").textContent = nomor ?? "-";
    </script> --}}
  </body>
</html>
