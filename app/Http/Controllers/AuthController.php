<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $login = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);

        if(!Auth::attempt($login)) {
            return response(['message' => 'login invalide']);
        }


       // return 'toto';
        $accessToken = Auth::user()->createToken('authToken')->accessToken;
        return new UserResource(Auth::user($accessToken), $accessToken);
      // return response(['user' => Auth::user(),'access_token' =>$accessToken]);
    }
}
