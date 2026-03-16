<!doctype html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <title>Pengajuan Berhasil</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

</head>

<body class="bg-light d-flex align-items-center justify-content-center min-vh-100">

    <div class="card shadow p-4 text-center" style="max-width:500px">

        <div class="mb-3">
            <div class="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center"
                style="width:70px;height:70px;font-size:32px">
                ✓
            </div>
        </div>

        <h3 class="fw-bold">Pengajuan Berhasil</h3>

        <p class="text-muted">
            Data pengajuan integrasi telah berhasil dikirim.
        </p>

        <b>Kode Pengajuan:</b>

        <div class="display-6 fw-bold text-success my-3">
            {{ request('nomor') }}
        </div>

        <p class="text-muted">
            Silakan simpan atau screenshot kode ini untuk mengecek status pengajuan.
        </p>

        <a href="/" class="btn btn-danger w-100 mb-3">
            Kembali ke Halaman Utama
        </a>

    </div>

</body>

</html>
