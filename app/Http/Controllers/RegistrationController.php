<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RegistrationController extends Controller
{
    public function index ()
    {
        return view('registration.index');
    }

    // public function store(RegistrationRequest $request)
    // {
    // $data = $request->validated();
    
    // }
}
