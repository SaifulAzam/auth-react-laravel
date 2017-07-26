<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function store(Request $request)
    {
        $validator = $this->validate($request, [
            'username' => 'required',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|confirmed',
            'timezone' => 'required|string',
        ]);

        $user = User::create([
            'username' => request('username'),
            'email' => request('email'),
            'password' => Hash::make(request('password')),
            'timezone' => request('timezone')
        ]);
    }
}
