<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\IntegrationRequest;
use Google\Client;
use Google\Service\Sheets;

class IntegrationController extends Controller
{
    public function index()
    {
        return view('integration.index');
    }

    public function store(IntegrationRequest $request)
    {
        $nomor = $this->generateSubmissionCode();
        $client = new Client();
        $client->setAuthConfig(storage_path('app/google/credentials.json'));
        $client->setScopes([Sheets::SPREADSHEETS]);

        $service = new Sheets($client);

        $spreadsheetId = env('SPREADSHEET_ID');

        $data = [
            [
                now()->locale('id')->translatedFormat('j F Y'),
                $request->radio_jenis_pengajuan,
                $request->nama_wbp,
                $request->klasifikasi_wbp,
                $request->perkara ?? "-",
                $request->pasal ?? "-",
                $request->nama_pengaju,
                $request->radio_kartu_identitas,
                $request->id_card,
                $request->radio_jenis_kelamin,
                $request->alamat_pengaju,
                $request->no_telepon,
                $request->email,
                $request->radio_hubungan_wbp,
                $nomor,
                "Sedang diproses"
            ]
        ];

        $body = new \Google\Service\Sheets\ValueRange([
            'values' => $data
        ]);

        $params = [
            'valueInputOption' => 'RAW'
        ];

        // dd($data);

        $service->spreadsheets_values->append(
            $spreadsheetId,
            'Sheet2',
            $body,
            $params
        );

        return redirect()->route('integration.success', ['nomor' => $nomor]);
    }

    private function generateSubmissionCode()
    {
        $letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        $numbers = "0123456789";

        $letter = $letters[rand(0, 25)];
        $num1 = $numbers[rand(0, 9)];
        $num2 = $numbers[rand(0, 9)];

        $arr = [$letter, $num1, $num2];
        shuffle($arr);

        return "INT-" . implode("", $arr);
    }
}
