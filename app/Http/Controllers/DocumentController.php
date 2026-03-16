<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Google\Client;
use Google\Service\Sheets;
use ZipArchive;

class DocumentController extends Controller
{

    public function getIntegrationData($nomor)
    {
        $client = new Client();
        $client->setAuthConfig(storage_path('app/google/credentials.json'));
        $client->setScopes([Sheets::SPREADSHEETS]);

        $service = new Sheets($client);

        $spreadsheetId = env('SPREADSHEET_ID');

        $response = $service->spreadsheets_values->get(
            $spreadsheetId,
            'Sheet2'
        );

        $rows = $response->getValues();

        foreach ($rows as $row) {
            if ($row[14] == $nomor) {
                return $row;
            }
        }

        return null;
    }

    public function generateOdt($nomor)
    {
        $data = $this->getIntegrationData($nomor);

        $template = storage_path('app/templates/baru_integrasi.odt');

        $output = storage_path("app/public/pengajuan_$nomor.odt");

        copy($template, $output);

        $zip = new ZipArchive;

        if ($zip->open($output) === TRUE) {

            $content = $zip->getFromName('content.xml');

            $replace = [
                '${Timestamp}' => $data[0] ?? '',
                '${radio_jenis_pengajuan}' => $data[1] ?? '',
                '${nama_wbp}' => $data[2] ?? '',
                '${perkara}' => $data[4] ?? '',
                '${pasal}' => $data[5] ?? '',
                '${nama_pengaju}' => $data[6] ?? '',
                '${alamat_pengaju}' => $data[10] ?? '',
                '${no_telepon}' => $data[11] ?? '',
                '${radio_hubungan_wbp}' => $data[13] ?? '',
            ];

            foreach ($replace as $key => $value) {
                $content = str_replace($key, htmlspecialchars($value), $content);
            }

            $zip->addFromString('content.xml', $content);

            $zip->close();
        }

        return $output;
    }

    public function generatePdf($nomor)
    {
        $odtPath = $this->generateOdt($nomor);

        $outputDir = storage_path('app/public');

        $soffice = '"C:\\Program Files\\LibreOffice\\program\\soffice.exe"';

        $command = $soffice .
            " --headless --nologo --nofirststartwizard --convert-to pdf --outdir \"$outputDir\" \"$odtPath\"";

        exec($command);

        $pdfPath = $outputDir . "/pengajuan_$nomor.pdf";

        if (!file_exists($pdfPath)) {
            abort(500, 'PDF gagal dibuat oleh LibreOffice');
        }

        return response()->download($pdfPath);
    }
}