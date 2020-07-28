<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

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


    public function logout() {

         Log::debug('Logout');
        
            $accessToken = Auth::user()->token();

            $accessToken->revoke();

            
        return response('Vous etes bien deconnectee',200);


     }


     
    public function register(Request $request)
    {

        
        $user = $request->validate([
            'name'=>'required',
            'email' => 'required|string|email',
            'password' => 'required|string',
          
        ]);   

        $request->id_role=3;
        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->id_role = $request->id_role;
        $user->save();

        return response()->json(['status' => 'success'], 200);

    }
}
