<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <title>Pendaftaran Online Kunjungan Rutan</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap 5 CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="{{ asset('assets/css/style.css')}}" />
    <link rel="icon" href="https://i.ibb.co.com/5ggVbPJB/Logo-Kementrian-Imigrasi-dan-Pemasyarakatan-2024.png" type="image/png">
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

          </div>
              <header class="text-center mb-4">
                <h1 class="h5 fw-bold mb-1">Pendaftaran Online Kunjungan</h1>
                <p class="text-muted mb-0">
                  Rumah Tahanan Negara Kelas IIB Sumenep
                </p>
              </header>

              <!-- Form -->
        <!-- <form action="/daftar" method="post" enctype="multipart/form-data"> -->

        <form action="/daftar" method="POST" enctype="multipart/form-data">


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
                  <label for="nama_lengkap" class="form-label fw-semibold">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    class="form-control form-control-lg placeholder-fix"
                    id="nama_lengkap"
                    name="nama_lengkap"
                    placeholder="Masukkan Nama Lengkap"
                    required
                  />
                </div>
                
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
                  <label for="no_hp" class="form-label fw-semibold">
                  No Telepon / WA
                  </label>
                  <input
                  type="tel"
                  class="form-control form-control-lg placeholder-fix"
                  id="no_hp"
                  name="no_hp"
                  placeholder="Masukkan Nomor Telepon / WA"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  maxlength="13"
                  required
                  />
                  <small id="msg_notelepon" style="color:red;display:none"></small>
                </div>
                <script>
                const noteleponInput = document.getElementById("no_hp");
                const msg_notelepon = document.getElementById("msg_notelepon");
                document.getElementById("no_hp").addEventListener("input", function () {
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


                <div class="mb-3">
                  <label for="keperluan" class="form-label fw-semibold">
                    Keterangan Keperluan
                  </label>
                  <input
                    type="text"
                    class="form-control form-control-lg placeholder-fix"
                    id="keperluan"
                    name="keperluan"
                    placeholder="Masukkan Keperluan"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="alamat_pengunjung" class="form-label fw-semibold">
                    Alamat Pengunjung
                  </label>
                  <input
                    type="text"
                    class="form-control form-control-lg placeholder-fix"
                    id="alamat_pengunjung"
                    name="alamat_pengunjung"
                    placeholder="Masukkan Alamat Pengunjung"
                    required
                  />
                </div>
               <div class="row">

      <!-- Dewasa Laki-laki -->
      <!-- Dewasa Laki -->
      <div class="col-md-6 mb-3">
        <label class="form-label fw-semibold" for="dewasa_laki">
          Pengikut Laki-laki
        </label>
        <input
          type="text"
          inputmode="numeric"
          pattern="[0-9]*"
          class="form-control form-control-lg"
          id="dewasa_laki"
          name="dewasa_laki"
          placeholder="0"
          
        />
      </div>

      <!-- Dewasa Perempuan -->
      <div class="col-md-6 mb-3">
        <label class="form-label fw-semibold" for="dewasa_perempuan">
          Pengikut Perempuan
        </label>
        <input
          type="text"
          inputmode="numeric"
          pattern="[0-9]*"
          class="form-control form-control-lg"
          id="dewasa_perempuan"
          name="dewasa_perempuan"
          placeholder="0"
          
        />
      </div>

      <!-- Anak-anak -->
      <div class="col-md-12 mb-3">
        <label class="form-label fw-semibold" for="anak">
          Pengikut Anak-anak
        </label>
        <input
          type="text"
          inputmode="numeric"
          pattern="[0-9]*"
          class="form-control form-control-lg"
          id="anak"
          name="anak"
          placeholder="0"
          
        />
      </div>

      <!-- Total -->
      <div class="mb-3">
        <label class="form-label fw-semibold" for="total_pengunjung">
          Total Pengunjung
        </label>
        <input
          type="number"
          class="form-control form-control-lg"
          id="total_pengunjung"
          name="total_pengunjung"
          readonly
        />

        <!-- <small id="error_total" style="color:red;display:none">
          Silakan isi daftar pengunjung terlebih dahulu
        </small> -->
      </div>

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

                <div class="mb-3">
                <label for="nama_wbp" class="form-label fw-semibold">
                 Nama WBP
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
                      id="hubungan_wbp_saudara_jauh"
                      value="Saudara Jauh"
                    />
                    <label
                      class="form-check-label"
                      for="hubungan_wbp_saudara_jauh"
                    >
                      Saudara Jauh / Teman
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
<!-- barang bawaan perlu ada revisi penyesuaian -->
                <div class="mb-3">
                  <label for="keterangan" class="form-label fw-semibold">
                    Daftar Barang Bawaan
                  </label>
                 <table border="0" cellpadding="8" cellspacing="0" style="width:100%; border-collapse:collapse;">
  
  <!-- Atur lebar kolom -->
  <colgroup>
    <col style="width:45%">
    <col style="width:10%">  <!-- Jumlah lebih kecil -->
    <col style="width:45%">
  </colgroup>

  <!-- Baris Label -->
  <tr>
    <th>Nama Barang</th>
    <th>Jumlah</th>
    <th>Keterangan</th>
  </tr>

  <!-- Baris Input 1 -->
  <tr>
    <td>
      <input type="text" id="nama_barang_1" for="nama_barang_1" name="nama_barang_1" placeholder="Nama Barang" style="width:100%;">
    </td>
    <td>
      <input type="number" id="jumlah_1" for="jumlah_1" name="jumlah_1" placeholder="0" style="width:100%; text-align:center;">
    </td>
    <td>
      <input type="text" id="keterangan_1" for="keterangan_1" name="keterangan_1" placeholder="Keterangan" style="width:100%;">
    </td>
  </tr>

  <!-- Baris Input 2 -->
  <tr>
    <td>
      <input type="text" id="nama_barang_2" for="nama_barang_2" name="nama_barang_2" placeholder="Nama Barang" style="width:100%;">
    </td>
    <td>
      <input type="number" id="jumlah_2" for="jumlah_2" name="jumlah_2" placeholder="0" style="width:100%; text-align:center;">
    </td>
    <td>
      <input type="text" id="keterangan_2" for="keterangan_2" name="keterangan_2" placeholder="Keterangan" style="width:100%;">
    </td>
  </tr>

  <!-- Baris Input 3 -->
  <tr>
    <td>
      <input type="text" id="nama_barang_3" for="nama_barang_3" name="nama_barang_3" placeholder="Nama Barang" style="width:100%;">
    </td>
    <td>
      <input type="number" id="jumlah_3" for="jumlah_3" name="jumlah_3" placeholder="0" style="width:100%; text-align:center;">
    </td>
    <td>
      <input type="text" id="keterangan_3" for="keterangan_3" name="keterangan_3" placeholder="Keterangan" style="width:100%;">
    </td>
  </tr>

</table>

        <div class="mb-3">
          <label for="tanggal_kunjungan" class="form-label fw-semibold">
            Tanggal Kunjungan ke Rutan
          </label>
          <input
            type="date"
            class="form-control form-control-lg placeholder-fix"
            id="tanggal_kunjungan"
            name="tanggal_kunjungan"
            required
          />
          <div id="alert-tanggal" style="color:red; font-size: 14px; margin-top:6px;"></div>
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


                <div class="d-grid">
                  <button
                    type="button"
                    class="btn btn-success btn-lg fw-semibold"
                    id="btn-preview">
                    Daftar Kunjungan
                  </button>
                </div>
                <div class="d-grid">
                  <button
                    type="button"
                    class="btn btn-success btn-lg fw-semibold"
                    id="btn-preview">
                    Daftar Kunjungan
                  </button>
                </div>
              </form>

              <!-- Footer -->
              <footer class="text-center mt-4">
                <small class="text-muted">
                  © Layanan Kunjungan Online Rutan
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
    <script src="{{asset('assets/js/autocomplete.js')}}" defer></script>
    <script>
      const LABELS = {
      radio_kartu_identitas: "Jenis Kartu Identitas",
      id_card: "Nomor Identitas",
      nama_lengkap: "Nama Lengkap",
      jenis_kelamin: "Jenis Kelamin",
      alamat_pengunjung: "Alamat Pengunjung",

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

  const radioKartu = document.querySelectorAll('input[name="radio_kartu_identitas"]');
  const idCard = document.getElementById("id_card");
  const namaLengkap = document.getElementById("nama_lengkap");
  const radioJK = document.querySelectorAll('input[name="radio_jenis_kelamin"]');
  const notelepon = document.getElementById("no_hp");
  const keperluan = document.getElementById("keperluan");
  const alamat = document.getElementById("alamat_pengunjung");
  const namaWbp = document.getElementById("nama_wbp");
  const hubungan = document.querySelectorAll('input[name="radio_hubungan_wbp"]');
  const klasifikasi = document.querySelectorAll('input[name="klasifikasi_wbp"]');
  const uploadIzin = document.getElementById("upload_izin_besuk");
  const tanggal = document.getElementById("tanggal_kunjungan");

  let jenisId = null;

  idCard.disabled = true;
  btnPreview.disabled = true;

  function checkValid(){
    let valid = true;

    // ===============================
    // JENIS KARTU
    // ===============================
    if(!jenisId) valid = false;

    // ===============================
    // NOMOR IDENTITAS
    // ===============================
    const v = idCard.value.trim();
    if(jenisId === "NIK" && !(v.length === 16 && /^\d+$/.test(v))) valid = false;
    if(jenisId === "SIM" && !((v.length === 14 || v.length === 16) && /^\d+$/.test(v))) valid = false;
    if(jenisId === "Paspor" && !(v.length === 9 && /^[A-Za-z0-9]+$/.test(v))) valid = false;
    if(jenisId === "Lainnya" && v === "") valid = false;

    // ===============================
    // DATA WAJIB
    // ===============================
    if(namaLengkap.value.trim() === "") valid = false;
    if(notelepon.value.trim().length < 10 || notelepon.value.trim().length > 13) valid = false;
    if(keperluan.value.trim() === "") valid = false;
    if(alamat.value.trim() === "") valid = false;
    if(namaWbp.value.trim() === "") valid = false;

    // ===============================
    // JENIS KELAMIN
    // ===============================
    if(![...radioJK].some(r => r.checked)) valid = false;

    // ===============================
    // HUBUNGAN WBP
    // ===============================
    if(![...hubungan].some(r => r.checked)) valid = false;

    // ===============================
    // KLASIFIKASI
    // ===============================
    const klas = [...klasifikasi].find(r => r.checked);
    if(!klas) valid = false;

    if(klas && klas.value === "Tahanan"){
      if(uploadIzin){
        uploadIzin.disabled = false;
        uploadIzin.required = true;
        if(uploadIzin.files.length === 0) valid = false;
      }
    } else if(uploadIzin){
      uploadIzin.disabled = true;
      uploadIzin.required = false;
    }

    // ===============================
    // TANGGAL (SELASA / KAMIS)
    // ===============================
    if(!tanggal.value){
      valid = false;
    } else {
      const [y,m,d] = tanggal.value.split("-").map(Number);
      const hari = new Date(y, m-1, d).getDay();
      if(hari !== 2 && hari !== 4) valid = false;
    }

    btnPreview.disabled = !valid;
  }

  // ===============================
  // EVENTS
  // ===============================
  radioKartu.forEach(r => {
    r.addEventListener("change", function(){
      jenisId = this.value;
      idCard.disabled = false;
      idCard.value = "";
      checkValid();
    });
  });

  [
    idCard,
    namaLengkap,
    notelepon,
    keperluan,
    alamat,
    namaWbp,
    tanggal
  ].forEach(el => el.addEventListener("input", checkValid));

  radioJK.forEach(r => r.addEventListener("change", checkValid));
  hubungan.forEach(r => r.addEventListener("change", checkValid));
  klasifikasi.forEach(r => r.addEventListener("change", checkValid));

  checkValid();
});
</script>


  </body>
</html>