<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Google\Client;
use Google\Service\Sheets;

class VerificationController extends Controller
{
    private function getSheetsService()
    {
        $client = new Client();
        $client->setAuthConfig(storage_path('app/credentials.json'));
        $client->addScope(Sheets::SPREADSHEETS);

        return new Sheets($client);
    }

    public function index()
    {
        return view('verification.index');
    }

    public function cari(Request $request)
    {
        $kode = $request->query('kode');

        if (!$kode) {
            return response()->json(['found' => false]);
        }

        $service = $this->getSheetsService();

        $spreadsheetId = env('SPREADSHEET_ID');
        $range = 'Sheet1';

        $response = $service->spreadsheets_values->get($spreadsheetId, $range);
        $rows = $response->getValues();

        if (!$rows) {
            return response()->json(['found' => false]);
        }

        $headers = $rows[0];

        foreach ($rows as $index => $row) {

            if (
                isset($row[array_search('nomor', $headers)]) &&
                $row[array_search('nomor', $headers)] == $kode
            ) {

                return response()->json([
                    'found' => true,
                    'data' => array_combine($headers, $row),
                    'rowNumber' => $index + 1
                ]);
            }
        }

        return response()->json(['found' => false]);
    }

    // public function updateStatus(Request $request)
    // {
    //     $rowNumber = $request->rowNumber;
    //     $status = $request->status_row;

    //     $service = $this->getSheetsService();

    //     $spreadsheetId = env('SPREADSHEET_ID');

    //     $range = "Sheet1!AB{$rowNumber}";

    //     $body = new \Google\Service\Sheets\ValueRange([
    //         'values' => [[$status]]
    //     ]);

    //     $params = [
    //         'valueInputOption' => 'RAW'
    //     ];

    //     $service->spreadsheets_values->update(
    //         $spreadsheetId,
    //         $range,
    //         $body,
    //         $params
    //     );

    //     return response()->json([
    //         'success' => true
    //     ]);
    // }
    public function updateStatus(Request $request)
    {
        try {

            $rowNumber = $request->rowNumber;
            $status = $request->status_row;

            if (!$rowNumber || !$status) {
                return response()->json([
                    'success' => false,
                    'error' => 'Payload tidak lengkap'
                ]);
            }

            $client = new \Google\Client();
            $client->setAuthConfig(storage_path('app/google/credentials.json'));
            $client->setScopes([\Google\Service\Sheets::SPREADSHEETS]);

            $service = new \Google\Service\Sheets($client);

            $spreadsheetId = env('SPREADSHEET_ID');

            $body = new \Google\Service\Sheets\ValueRange([
                'values' => [[$status]]
            ]);

            $service->spreadsheets_values->update(
                $spreadsheetId,
                "Sheet1!AB{$rowNumber}",
                $body,
                ['valueInputOption' => 'RAW']
            );

            return response()->json([
                'success' => true
            ]);
        } catch (\Exception $e) {

            return response()->json([
                'success' => false,
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
