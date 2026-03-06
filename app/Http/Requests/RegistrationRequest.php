<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegistrationRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }
    
    public function rules()
    {
        return [
            'nama_lengkap' => 'required|string',
            'id_card' => 'required|string',
            'radio_kartu_identitas' => 'required',
            'radio_jenis_kelamin' => 'required',
            'no_hp' => 'required',
            'tanggal_kunjungan' => 'required'
        ];
    }
}
