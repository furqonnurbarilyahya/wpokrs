<!doctype html>
<html lang="id">

<head>
    <meta charset="UTF-8" />
    <title>Loket Verifikasi Kunjungan</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link rel="icon" href="https://i.ibb.co.com/5ggVbPJB/Logo-Kementrian-Imigrasi-dan-Pemasyarakatan-2024.png"
        type="image/png">
</head>

<body class="bg-light">
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h5 class="fw-bold text-center mb-3">
                            Verifikasi Kode Kunjungan
                        </h5>

                        <input id="kode" class="form-control form-control-lg mb-3 text-uppercase"
                            placeholder="Contoh: A87" />

                        <div class="d-grid">
                            <button class="btn btn-primary btn-lg" onclick="cariKode()">
                                Cari
                            </button>
                        </div>

                        <div id="hasil" class="mt-4"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        let currentStatus = null;
        let currentData = null;
        let currentRow = null;

        async function cariKode() {
            const kode = document.getElementById("kode").value.trim().toUpperCase();
            const hasil = document.getElementById("hasil");

            if (!kode) {
                hasil.innerHTML =
                    "<div class='alert alert-warning'>Kode wajib diisi</div>";
                return;
            }

            hasil.innerHTML = "🔍 Mencari data...";

            // const res = await fetch(`/api/cari?kode=${kode}`);
            const res = await fetch(`/api/cari?kode=${kode}`);
            const json = await res.json();

            if (!json.found) {
                hasil.innerHTML =
                    "<div class='alert alert-danger'>Kode tidak ditemukan</div>";
                return;
            }

            currentData = json.data;
            currentStatus = json.data["status_row"];
            currentRow = json.rowNumber;

            render();
        }

        function render() {
            let badge = "secondary";
            if (currentStatus === "DITERIMA") badge = "success";
            if (currentStatus === "DITOLAK") badge = "danger";

            let html = `
    <div class="text-center mb-3">
      <span class="badge bg-${badge} fs-6 px-4 py-2">
        Status: ${currentStatus}
      </span>
    </div>

    <table class="table table-bordered">
      <tbody>
  `;

            // for (const [k, v] of Object.entries(currentData)) {
            //   if (k === "Status Pendaftaran") continue;
            //   html += `<tr><th>${k}</th><td>${v}</td></tr>`;
            // }
            for (const [k, v] of Object.entries(currentData)) {
                if (k === "status_row") continue;
                html += `<tr><th>${k}</th><td>${v}</td></tr>`;
            }

            const disabled = currentStatus !== "MENUNGGU" ? "disabled" : "";

            html += `
      </tbody>
    </table>

    <div class="d-flex gap-3">
      <button class="btn btn-success w-100" ${disabled}
        onclick="updateStatus('DITERIMA')">
        Terima
      </button>

      <button class="btn btn-danger w-100" ${disabled}
        onclick="updateStatus('DITOLAK')">
        Tolak
      </button>
    </div>
  `;

            document.getElementById("hasil").innerHTML = html;
        }

        // async function updateStatus(status) {
        //     if (!currentRow) {
        //         alert("Row tidak valid, silakan cari ulang data");
        //         return;
        //     }

        //     const res = await fetch("/api/update-status", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({
        //             rowNumber: currentRow,
        //             status_row: status,
        //         }),
        //     });

        //     const json = await res.json();

        //     if (!json.success) {
        //         alert("Gagal update status");
        //         return;
        //     }

        //     currentStatus = status;
        //     render();
        //     currentRow = json.rowNumber;
        //     console.log("CURRENT ROW:", currentRow);
        // }
        async function updateStatus(status) {

            if (!currentRow) {
                alert("Row tidak valid");
                return;
            }

            const res = await fetch("/api/update-status", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": document
                        .querySelector('meta[name="csrf-token"]')
                        .getAttribute("content"),
                },
                body: JSON.stringify({
                    rowNumber: currentRow,
                    status_row: status,
                }),
            });

            const json = await res.json();

            if (!json.success) {
                alert("Gagal update status");
                return;
            }

            currentStatus = status;
            render();
        }
    </script>
</body>

</html>
