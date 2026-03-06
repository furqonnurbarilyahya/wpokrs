<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegistrationController;

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/', function () {
    return view('main/main');
});

Route::get('/registration', [RegistrationController::class, 'index'])
    ->name('registration.index');

Route::post('/daftar', [RegistrationController::class, 'store'])->name('daftar');

Route::view('/success', 'success.success')->name('success');
