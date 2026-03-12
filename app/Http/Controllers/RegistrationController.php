<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\RegistrationRequest;
use Google\Client;
use Google\Service\Sheets;

class RegistrationController extends Controller
{
    public function index ()
    {
        return view('registration.index');
    }

    public function store(RegistrationRequest $request)
    {
        $nomor = $this->generateQueueCode();

        $client = new Client();
        $client->setAuthConfig(storage_path('app/google/credentials.json'));
        $client->setScopes([Sheets::SPREADSHEETS]);

        $service = new Sheets($client);

        $spreadsheetId = env('SPREADSHEET_ID');

        $data = [
            [
                now()->format('j/n/Y, H.i.s'),
                $request->radio_kartu_identitas,
                $request->id_card,
                $request->nama_lengkap,
                $request->radio_jenis_kelamin,
                $request->no_hp,
                $request->keperluan,
                $request->alamat_pengunjung,
                $request->dewasa_laki ?? 0,
                $request->dewasa_perempuan ?? 0,
                $request->anak ?? 0,
                $request->total_pengunjung ?? 0,
                $request->nama_wbp,
                $request->klasifikasi_wbp,
                "-", // upload file dihapus
                $request->radio_hubungan_wbp,
                $request->nama_barang_1 ?? "-",
                $request->jumlah_1 ?? "-",
                $request->keterangan_1 ?? "-",
                $request->nama_barang_2 ?? "-",
                $request->jumlah_2 ?? "-",
                $request->keterangan_2 ?? "-",
                $request->nama_barang_3 ?? "-",
                $request->jumlah_3 ?? "-",
                $request->keterangan_3 ?? "-",
                $request->tanggal_kunjungan,
                $nomor,
                "MENUNGGU"
            ]
        ];

        $body = new \Google\Service\Sheets\ValueRange([
            'values' => $data
        ]);

        $params = [
            'valueInputOption' => 'RAW'
        ];

        $service->spreadsheets_values->append(
            $spreadsheetId,
            'Sheet1',
            $body,
            $params
        );

        // return redirect("/success?nomor=".$nomor);
        return redirect()->route('registration.success', ['nomor' => $nomor]);
    }

    private function generateQueueCode()
    {
        $letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        $numbers = "0123456789";

        $letter = $letters[rand(0,25)];
        $num1 = $numbers[rand(0,9)];
        $num2 = $numbers[rand(0,9)];

        $arr = [$letter,$num1,$num2];
        shuffle($arr);

        return implode("",$arr);
    }
}
