<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <title>Layanan Integrasi</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap 5 CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="{{ asset('assets/css/style.css')}}" />
    <link rel="icon" href="https://i.ibb.co.com/yBWrMqZY/Gemini-Generated-Image-lc5naelc5naelc5n.png" type="image/png">
    <!-- <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/1/1a/Logo_Kemenkumham.png" sizes="32x32" type="image/png"> -->
    <!-- <link rel="icon" href="https://www.google.com/favicon.ico" type="image/x-icon"> -->


  </head>

  <body
    class="min-vh-100 d-flex align-items-center justify-content-center bg-light"
  >
    <main class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-6 col-lg-5">
          <section class="card shadow-sm rounded-4">
            <div class="card-body p-4 p-md-5">
              <!-- Header -->
               <div class="text-center mb-3">

            <img 
              src="https://i.ibb.co.com/5ggVbPJB/Logo-Kementrian-Imigrasi-dan-Pemasyarakatan-2024.png"
              class="logo-kemenkumham"
              alt="Logo Kemenkumham">

            <img 
                src="https://i.ibb.co.com/0jJvcV7c/Chat-GPT-Image-2-Jan-2026-10-54-08.png"
                class="logo-pas"
                alt="Logo Pemasyarakatan">

            <img 
                src="https://i.ibb.co.com/yBWrMqZY/Gemini-Generated-Image-lc5naelc5naelc5n.png"
                class="logo-pas"
                alt="Logo Pemasyarakatan">

          </div>
              <header class="text-center mb-4">
                <h1 class="h5 fw-bold mb-1">Pendaftaran Integrasi Online</h1>
                <p class="text-muted mb-0">
                  Rumah Tahanan Negara Kelas IIB Sumenep
                </p>
              </header>

              <!-- Form -->
        <!-- <form action="/daftar" method="post" enctype="multipart/form-data"> -->

        <form action="{{ route('integrasi.daftar')}}" method="POST" enctype="multipart/form-data">
          @csrf
             <div class="mb-3">
                <label for="jenis_pengajuan" class="form-label fw-semibold">
                  Pilih Jenis Pengajuan
                </label>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="radio_jenis_pengajuan"
                    id="pengajuan_cuti_bersyarat"
                    value="Cuti Bersyarat"
                  />
                  <label class="form-check-label" for="pengajuan_cuti_bersyarat">
                    Cuti Bersyarat
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="radio_jenis_pengajuan"
                    id="pengajuan_pembebasan_bersyarat"
                    value="Pembebasan Bersyarat"
                  />
                  <label class="form-check-label" for="pengajuan_pembebasan_bersyarat">
                    Pembebasan Bersyarat
                  </label>
                  </div>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radio_jenis_pengajuan"
                      id="pengajuan_cuti_menjelang_bebas"
                      value="Cuti Menjelang Bebas"
                    />
                    <label class="form-check-label" for="pengajuan_cuti_menjelang_bebas">
                      Cuti Menjelang Bebas (CMB)
                    </label>
                  </div>
                </div>
                <script>
                  let wbpValid = false;
                </script>
                <div class="mb-3">
                <label for="nama_wbp" class="form-label fw-semibold">
                 Nama Warga Binaan Pemasyarakatan
                 </label>

                <div class="position-relative">
                  <input
                type="text"
                id="nama_wbp"
                name="nama_wbp"
                class="form-control form-control-lg"
                placeholder="Pilih dari daftar"
                autocomplete="off"
              />
              <ul id="autocompleteList" class="list-group autocomplete-list"></ul>

                </div>
              </div>

                <div class="mb-3">
  <!-- Judul -->
                <label for="klasifikasi_wbp" class="form-label fw-semibold d-block">
                  Klasifikasi WBP
                </label>
               <input
                type="hidden"
                name="klasifikasi_wbp"
                id="klasifikasi_wbp_value"
              />
                        <!-- Radio sejajar -->
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="klasifikasi_wbp"
                    id="klasifikasi_tahanan"
                    value="Tahanan"
                  />
                  <label class="form-check-label" for="klasifikasi_tahanan">
                    Tahanan
                  </label>
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="klasifikasi_wbp"
                    id="klasifikasi_narapidana"
                    value="Narapidana"
                  />
                  <label class="form-check-label" for="klasifikasi_narapidana">
                    Narapidana
                  </label>
                </div>
              </div>
                <div class="mb-3">
                  <label for="perkara" class="form-label fw-semibold">
                    Perkara
                  </label>
                  <input
                    type="text"
                    class="form-control form-control-lg placeholder-fix"
                    id="perkara"
                    name="perkara"
                    readonly
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="pasal" class="form-label fw-semibold">
                    Pasal 
                  </label>
                  <input
                    type="text"
                    class="form-control form-control-lg placeholder-fix"
                    id="pasal"
                    name="pasal"
                    readonly
                    required
                  />
                </div>

                <div class="mb-3">
                  <b class="fs-5">= = = Data Penjamin = = =</b>
                </div>

                <div class="mb-3">
                  <label for="nama_lengkap" class="form-label fw-semibold">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    class="form-control form-control-lg placeholder-fix"
                    id="nama_pengaju"
                    name="nama_pengaju"
                    placeholder="Masukkan Nama Lengkap"
                    required
                  />
                </div>

                <div class="mb-3">
                <label for="id_card" class="form-label fw-semibold">
                  Pilih Kartu Identitas
                </label>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="radio_kartu_identitas"
                    id="kartu_identitas_nik"
                    value="NIK"
                  />
                  <label class="form-check-label" for="kartu_identitas_nik">
                    NIK
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="radio_kartu_identitas"
                    id="kartu_identitas_sim"
                    value="SIM"
                  />
                  <label class="form-check-label" for="kartu_identitas_sim">
                    SIM
                  </label>
                  </div>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radio_kartu_identitas"
                      id="kartu_identitas_paspor"
                      value="Paspor"
                    />
                    <label class="form-check-label" for="kartu_identitas_paspor">
                      Paspor
                    </label>
                  </div>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radio_kartu_identitas"
                      id="kartu_identitas_lainnya"
                      value="Lainnya"
                    />
                    <label class="form-check-label" for="kartu_identitas_lainnya">
                      Lainnya
                    </label>
                  </div>

                </div>

                <div class="mb-3">
                  <label for="id_card" class="form-label fw-semibold">
                    No. Kartu Identitas
                  </label>

                  <input
                    type="text"
                    class="form-control form-control-lg placeholder-fix"
                    id="id_card"
                    name="id_card"
                    placeholder="Masukkan NIK/No Paspor/No SIM"
                    required
                  />

                  <small id="msg" style="color:red;display:none"></small>
                </div>

                <script>
                  const radios = document.querySelectorAll('input[name="radio_kartu_identitas"]');
                  const radio_jenis_pengajuan = document.querySelectorAll('input[name="radio_jenis_pengajuan"]');
                  const idCardInput = document.getElementById("id_card");
                  const msg = document.getElementById("msg");
                  let selectedType = null;

                  radios.forEach(radio => {
                    radio.addEventListener("change", function () {
                      selectedType = this.value;
                      idCardInput.value = "";
                      msg.style.display = "none";

                      // === NIK ===
                      if (selectedType === "NIK") {
                        idCardInput.type = "text";
                        idCardInput.inputMode = "numeric";   // keyboard angka di HP
                        idCardInput.pattern = "[0-9]*";
                        idCardInput.placeholder = "Masukkan 16 digit angka";
                        idCardInput.maxLength = 16;

                        idCardInput.oninput = function () {
                          // hanya angka
                          this.value = this.value.replace(/\D/g, "");

                          if (!(this.value.length == 16)) {
                            msg.innerText = selectedType === "NIK"
                              ? "Nomor Induk Kependudukan (NIK) harus 16 digit"
                              : "Nomor Induk Kependudukan (NIK) harus 16 digit";
                            msg.style.display = "inline";
                          } else {
                            msg.style.display = "none";
                          }
                        };
                      }

                      // === SIM ====
                      if (selectedType === "SIM") {
                        idCardInput.type = "text";
                        idCardInput.inputMode = "numeric";   // keyboard angka di HP
                        idCardInput.pattern = "[0-9]*";
                        idCardInput.placeholder = "Masukkan 14 atau 16 digit angka";
                        idCardInput.maxLength = 16;

                        idCardInput.oninput = function () {
                          // hanya angka
                          this.value = this.value.replace(/\D/g, "");

                          if (!(this.value.length == 14 || this.value.length == 16)) {
                            msg.innerText = selectedType === "SIM"
                            ? "Nomor SIM harus 14 atau 16 digit"
                            :"Nomor SIM harus 14 atau 16 digit";
                            msg.style.display = "inline";
                          } else {
                            msg.style.display = "none";
                          }
                        };
                      }

                      // === PASPOR ===
                      if (selectedType === "paspor") {
                        idCardInput.type = "text";
                        idCardInput.inputMode = "text";
                        idCardInput.pattern = "[A-Za-z0-9]*";
                        idCardInput.placeholder = "Masukkan 9 digit (huruf/angka)";
                        idCardInput.maxLength = 9;

                        idCardInput.oninput = function () {
                          // hanya huruf & angka
                          this.value = this.value.replace(/[^A-Za-z0-9]/g, "");

                          if (this.value.length > 0 && this.value.length < 9) {
                            msg.innerText = "Nomor Paspor harus 9 karakter";
                            msg.style.display = "inline";
                          } else {
                            msg.style.display = "none";
                          }
                        };
                      }

                      if (selectedType === "Lainnya") {
                        idCardInput.type = "text";
                        idCardInput.inputMode = "text";
                        idCardInput.pattern = "[A-Za-z0-9]*";
                        idCardInput.placeholder = "Masukkan Maksimal 20 digit (huruf/angka)";
                        idCardInput.maxLength = 20;

                        idCardInput.oninput = function () {
                          // hanya huruf & angka
                          this.value = this.value.replace(/[^A-Za-z0-9]/g, "");

                          if (this.value.length > 0 && this.value.length < 9) {
                            msg.innerText = "Nomor Maksimal hanya 20 Karakter";
                            msg.style.display = "inline";
                          } else {
                            msg.style.display = "none";
                          }
                        };
                      }



                    });
                  });
                </script>
                
                <div class="mb-3">
                <label for="jenis_kelamin" class="form-label fw-semibold">
                  Jenis Kelamin
                </label>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="radio_jenis_kelamin"
                    id="jenis_kelamin_lk"
                    value="Laki-laki"
                  />
                  <label class="form-check-label" for="jenis_kelamin_lk">
                    Laki-laki
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="radio_jenis_kelamin"
                    id="jenis_kelamin_pr"
                    value="Perempuan"
                  />
                  <label class="form-check-label" for="jenis_kelamin_pr">
                    Perempuan
                  </label>
                </div>

                <div class="mb-3">
                  <label for="alamat_pengunjung" class="form-label fw-semibold">
                    Alamat Pengunjung
                  </label>
                  <input
                    type="text"
                    class="form-control form-control-lg placeholder-fix"
                    id="alamat_pengaju"
                    name="alamat_pengaju"
                    placeholder="Masukkan Alamat Pengunjung"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="no_hp" class="form-label fw-semibold">
                  No Telepon / WA
                  </label>
                  <input
                  type="tel"
                  class="form-control form-control-lg placeholder-fix"
                  id="no_telepon"
                  name="no_telepon"
                  placeholder="Masukkan Nomor Telepon / WA"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  maxlength="13"
                  required
                  />
                  <small id="msg_notelepon" style="color:red;display:none"></small>
                </div>

                <div class="mb-3">
                  <label for="email" class="form-label fw-semibold">
                  Email
                  </label>
                  <input
                  {{-- type="tel" --}}
                  class="form-control form-control-lg placeholder-fix"
                  id="email"
                  name="email"
                  placeholder="Masukkan Email"
                  inputmode="email"
                  required
                  />
                </div>
                <script>
                const noteleponInput = document.getElementById("no_telepon");
                const msg_notelepon = document.getElementById("msg_notelepon");
                document.getElementById("no_telepon").addEventListener("input", function () {
                  this.value = this.value.replace(/[^0-9]/g, "");
                });
                noteleponInput.oninput = function () {
                          // hanya huruf & angka
                          this.value = this.value.replace(/[^0-9]/g, "");

                          if (this.value.length < 10 || this.value.length > 13) {
                            msg_notelepon.innerText = "Isi nomor telepon minimal 10 dan maksimal 13 Angka";
                            msg_notelepon.style.display = "inline";
                          } else {
                            msg_notelepon.style.display = "none";
                          }
                        };
                </script>
               <div class="row">
      <script>
        const inputs = ["dewasa_laki", "dewasa_perempuan", "anak"];
        const totalInput = document.getElementById("total_pengunjung");
        const errorTotal = document.getElementById("error_total");

        function hitungTotal() {
          let total = 1;

          inputs.forEach(id => {
            const el = document.getElementById(id);

            // 🔒 filter supaya hanya angka
            el.value = el.value.replace(/[^0-9]/g, "");

            const val = parseInt(el.value || "0");
            total += val;
          });

          totalInput.value = total;

          // 🔔 tampilkan peringatan jika total 0
          if (total === 0) {
            errorTotal.style.display = "block";
          } else {
            errorTotal.style.display = "none";
          }
        }

        // update total setiap input berubah
        inputs.forEach(id => {
          document.getElementById(id).addEventListener("input", hitungTotal);
        });

        // inisialisasi pertama kali
        hitungTotal();
      </script>

                <!-- <div class="mb-3">
                  <label for="nama_ayah_wbp" class="form-label fw-semibold">
                    Nama Ayah WBP
                  </label>
                  <input
                    type="text"
                    class="form-control form-control-lg placeholder-fix pe-5"
                    id="nama_ayah_wbp"
                    name="nama_ayah_wbp"
                    placeholder="Masukkan Nama Ayah WBP"
                    required
                  />
                </div> -->
<script>
  let wbpValid = false;
</script>       

                <!-- <div class="mb-3">
                  <label class="form-label fw-semibold">
                    Upload Izin Besuk
                  </label>

                  <input
                    type="file"
                    class="form-control form-control-sm"
                    id="upload_izin_besuk"
                    name="upload_izin_besuk"
                    accept=".pdf,.jpg,.jpeg,.png"
                    disabled
                  />

                  <small class="text-muted">
                    Format yang diizinkan: PDF / JPG / JPEG / PNG
                  </small>
                </div> -->

                <!-- <script>
                document.addEventListener("DOMContentLoaded", function () {

                  const radios = document.querySelectorAll('input[name="klasifikasi_wbp"]');
                  const uploadInput = document.getElementById("upload_izin_besuk");

                  radios.forEach(radio => {
                    radio.addEventListener("change", function () {

                      if (this.value === "Tahanan") {
                        uploadInput.disabled = false;   // aktif
                        uploadInput.required = true;
                      } else {
                        uploadInput.disabled = true;    // nonaktif
                        uploadInput.required = false;
                        uploadInput.value = "";         // kosongkan
                      }

                    });
                  });

                });
                </script> -->

                <div class="mb-3">
                  <label
                    for="hubungan_dengan_wbp"
                    class="form-label fw-semibold"
                  >
                    Hubungan dengan WBP
                  </label>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radio_hubungan_wbp"
                      id="hubungan_wbp_ayah"
                      value="Ayah"
                    />
                    <label class="form-check-label" for="hubungan_wbp_ayah">
                      Ayah
                    </label>
                  </div>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radio_hubungan_wbp"
                      id="hubungan_wbp_ibu"
                      value="Ibu"
                    />
                    <label class="form-check-label" for="hubungan_wbp_ibu">
                      Ibu
                    </label>
                  </div>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radio_hubungan_wbp"
                      id="hubungan_wbp_adik"
                      value="Adik"
                    />
                    <label
                      class="form-check-label"
                      for="hubungan_wbp_adik"
                    >
                      Adik
                    </label>
                  </div>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radio_hubungan_wbp"
                      id="hubungan_wbp_kakak"
                      value="Kakak"
                    />
                    <label
                      class="form-check-label"
                      for="hubungan_wbp_kakak"
                    >
                      Kakak
                    </label>
                  </div>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radio_hubungan_wbp"
                      id="hubungan_wbp_suami_istri"
                      value="Suami/Istri"
                    />
                    <label
                      class="form-check-label"
                      for="hubungan_wbp_suami_istri"
                    >
                      Suami/Istri
                    </label>
                  </div>

                   <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radio_hubungan_wbp"
                      id="hubungan_wbp_anak"
                      value="Anak"
                    />
                    <label class="form-check-label" for="hubungan_wbp_anak">
                      Anak
                    </label>
                  </div>

                  <!-- <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radio_hubungan_wbp"
                      id="hubungan_wbp_teman"
                      value="Teman"
                    />
                    <label class="form-check-label" for="hubungan_wbp_teman">
                      Teman
                    </label>
                  </div> -->
                </div>

        <script>
        const inputTanggal = document.getElementById("tanggal_kunjungan");
        const alertTanggal = document.getElementById("alert-tanggal");

        inputTanggal.addEventListener("change", function () {

          alertTanggal.textContent = "";

          if (!this.value) return;

          const [y, m, d] = this.value.split("-").map(Number);
          const tanggal_kunjungan = new Date(y, m - 1, d);
          const hari = tanggal_kunjungan.getDay();
          // Minggu=0 Senin=1 Selasa=2 Rabu=3 Kamis=4 Jumat=5 Sabtu=6

          if (hari !== 2 && hari !== 4) {
            alertTanggal.textContent = "Mohon maaf, jadwal kunjungan hanya tersedia di hari Selasa dan Kamis.";
            this.value = "";
            document.dispatchEvent(new Event("checkForm"));

            // this.value = "";
            // valid
          }
        });
        </script>


                <div class="d-grid mb-3">
                  <button
                    type="button"
                    class="btn btn-success btn-lg fw-semibold"
                    id="btn-preview">
                    Kirim
                  </button>
                </div>

                <div class="d-grid">
                  <a
                    href="/"
                    type="button"
                    class="btn btn-danger btn-lg fw-semibold"
                    id="btn-preview">
                    Kembali ke Halaman Utama
                  </a>
                </div>
              </form>

              <!-- Footer -->
              <footer class="text-center mt-4">
                <small class="text-muted">
                  © Layanan Integrasi Online Rutan
                </small>
              </footer>
            </div>
          </section>
        </div>
      </div>
    </main>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Modal Konfirmasi -->
    <div class="modal fade" id="confirmModal" tabindex="-1">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Konfirmasi Data Kunjungan</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div class="modal-body">
            <div id="previewData"></div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Perbaiki Data
            </button>
            <button type="button" class="btn btn-success" id="btn-submit">
              Data Sudah Benar
            </button>
          </div>
        </div>
      </div>
    </div>
    <script src="{{asset('assets/js/autocomplete_integration.js')}}" defer></script>
    <script>
      const LABELS = {
      radio_jenis_pengajuan: "Jenis Pengajuan",
      perkara: "Perkara",
      pasal: "Pasal",
      radio_kartu_identitas: "Jenis Kartu Identitas",
      id_card: "Nomor Identitas",
      nama_pengaju: "Nama Pengaju",
      radio_jenis_kelamin: "Jenis Kelamin",
      alamat_pengaju: "Alamat Pengunjung",
      no_telepon: "No Telepon/WA",
      email: "Email",
      dewasa_laki: "Pengikut Laki-laki",
      dewasa_perempuan: "Pengikut Perempuan",
      anak: "Pengikut Anak-anak",
      total_pengunjung: "Total Pengunjung",

      nama_ayah_wbp: "Nama Ayah WBP",
      nama_wbp: "Nama WBP",
      klasifikasi_wbp: "Klasifikasi WBP",

      upload_izin_besuk: "File Izin Besuk",

      radio_hubungan_wbp: "Hubungan dengan WBP",
      // keterangan: "Daftar Barang Bawaan",
      tanggal_kunjungan: "Tanggal Kunjungan"
    };

    const btnPreview = document.getElementById("btn-preview");
    const btnSubmit = document.getElementById("btn-submit");
    const form = document.querySelector("form");
    const previewData = document.getElementById("previewData");
    const modal = new bootstrap.Modal(document.getElementById("confirmModal"));

    btnPreview.addEventListener("click", () => {

      // ambil data form
      const data = new FormData(form);

      let html = "<table class='table table-bordered'>";
      html += "<tbody>";

      for (const [key, value] of data.entries()) {

      // gunakan label custom
      const label = LABELS[key] || key;

      if (key === "upload_izin_besuk" && value instanceof File) {
        html += `<tr><th>${label}</th><td>${value.name || "-"}</td></tr>`;
      } else {
        html += `<tr><th>${label}</th><td>${value || "-"}</td></tr>`;
      }
    }
      html += "</tbody></table>";
      previewData.innerHTML = html;

      modal.show();
    });

    // submit sebenarnya
    btnSubmit.addEventListener("click", () => {
      form.submit();
    });
    </script>

    <script>
    document.addEventListener("DOMContentLoaded", function(){

      const btnPreview = document.getElementById("btn-preview");

      const radioPengajuan = document.querySelectorAll('input[name="radio_jenis_pengajuan"]');
      const radioKartu = document.querySelectorAll('input[name="radio_kartu_identitas"]');
      const radioJK = document.querySelectorAll('input[name="radio_jenis_kelamin"]');
      const hubungan = document.querySelectorAll('input[name="radio_hubungan_wbp"]');
      const klasifikasi = document.querySelectorAll('input[name="klasifikasi_wbp"]');

      const namaWbp = document.getElementById("nama_wbp");
      const namaLengkap = document.getElementById("nama_pengaju");
      const idCard = document.getElementById("id_card");
      const notelepon = document.getElementById("no_telepon");
      const alamat = document.getElementById("alamat_pengaju");
      const email = document.getElementById("email");

      let jenisId = null;

      idCard.disabled = true;
      btnPreview.disabled = true;

      function checkValid(){
        let valid = true;

        // ======================
        // JENIS PENGAJUAN
        // ======================
        if(![...radioPengajuan].some(r => r.checked)) valid = false;

        // ======================
        // NAMA WBP
        // ======================
        if(namaWbp.value.trim() === "") valid = false;

        // ======================
        // KLASIFIKASI
        // ======================
        if(![...klasifikasi].some(r => r.checked)) valid = false;

        // ======================
        // NAMA LENGKAP
        // ======================
        if(namaLengkap.value.trim() === "") valid = false;

        // ======================
        // JENIS IDENTITAS
        // ======================
        if(!jenisId) valid = false;

        // ======================
        // NOMOR IDENTITAS
        // ======================
        const v = idCard.value.trim();

        if(jenisId === "NIK" && !(v.length === 16 && /^\d+$/.test(v))) valid = false;
        if(jenisId === "SIM" && !((v.length === 14 || v.length === 16) && /^\d+$/.test(v))) valid = false;
        if(jenisId === "Paspor" && !(v.length === 9 && /^[A-Za-z0-9]+$/.test(v))) valid = false;
        if(jenisId === "Lainnya" && v === "") valid = false;

        // ======================
        // JENIS KELAMIN
        // ======================
        if(![...radioJK].some(r => r.checked)) valid = false;

        // ======================
        // ALAMAT
        // ======================
        if(alamat.value.trim() === "") valid = false;

        // ======================
        // TELEPON
        // ======================
        const tel = notelepon.value.trim();
        if(!(tel.length >= 10 && tel.length <= 13)) valid = false;

        // ======================
        // EMAIL
        // ======================
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email.value.trim())) valid = false;

        // ======================
        // HUBUNGAN
        // ======================
        if(![...hubungan].some(r => r.checked)) valid = false;

        btnPreview.disabled = !valid;
      }

      // ======================
      // EVENT
      // ======================

      radioPengajuan.forEach(r => r.addEventListener("change", checkValid));

      radioKartu.forEach(r => {
        r.addEventListener("change", function(){
          jenisId = this.value;
          idCard.disabled = false;
          idCard.value = "";
          checkValid();
        });
      });

      radioJK.forEach(r => r.addEventListener("change", checkValid));
      hubungan.forEach(r => r.addEventListener("change", checkValid));
      klasifikasi.forEach(r => r.addEventListener("change", checkValid));

      [
        namaWbp,
        namaLengkap,
        idCard,
        notelepon,
        alamat,
        email
      ].forEach(el => el.addEventListener("input", checkValid));

      checkValid();
    });
    </script> 
  </body>
</html>
