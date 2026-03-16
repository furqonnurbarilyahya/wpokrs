<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\VerificationController;
use App\Http\Controllers\IntegrationController;

Route::get('/', function () {
    return view('main/main');
});

Route::get('/registration', [RegistrationController::class, 'index'])
    ->name('registration.index');

Route::get('/integration', [IntegrationController::class, 'index'])
    ->name('integration.index');

Route::prefix('kunjungan')->group(function () {

    Route::post('/daftar', [RegistrationController::class, 'store'])
        ->name('kunjungan.daftar');

});

Route::prefix('integrasi')->group(function () {

    Route::post('/daftar', [IntegrationController::class, 'store'])
        ->name('integrasi.daftar');

});

Route::view('/registration-success', 'registration.success')
    ->name('registration.success');

Route::view('/integration-success', 'integration.success')
    ->name('integration.success');

Route::get('/verifikasi', [VerificationController::class, 'index']);

Route::get('/api/cari', [VerificationController::class, 'cari']);

Route::post('/api/update-status', [VerificationController::class, 'updateStatus']);