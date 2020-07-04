<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Role;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(){
        $users = User::all();
        return $users;
       // return UserResource::collection($users);
      }

      public function getEquipe(){
      $role= Role::where('name', '=', 'prof')->first();
      $idRole = $role['id'];
      $users = User::with(['role'])->where('id_role', '=', $idRole)->get();

      return UserResource::collection($users);
   
      }

    
}
