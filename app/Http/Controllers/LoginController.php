<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function auth(Request $request){
   
         if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) 
        {
            // Authentication passed...
            info("correct");
        }
        else
        {
            info("login data incorrect!");

        }
    }
}

