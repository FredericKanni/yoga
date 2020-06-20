<?php

namespace App\Http\Controllers;

use App\Http\Resources\PrestationResource;
use App\Prestation;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PrestationController extends Controller
{


public function index(){
$prestations = Prestation::with(['user'])->get();
return PrestationResource::collection($prestations);
}


public function pretationsProf(Request $request){

//recupere l user connecte via le middleware  doc mettre la route dans un mid auth

    $prestations = Prestation::with(['user'])->get();
    $user=$request->user();
$userId=$user->id;
     $user = User::with(['prestations'])->find($userId);
    // if (!$product) {
    //     $addToDb = new Produits;
        
    // }

    return   $user;
    }


    public function create(Request $request){
        $dataToverify = Validator::make(
            $request->input(),
            [
              
                "name" => "required",
                "description" => "",
                "prix" => "required|numeric",
                "nbrmax" => "required|numeric",
                "id_user" => "",
              
            ],
            [
                'required' => 'Le champ :attribute est requis'
            ]
        )->validate();

        $dataNewPrestation = new Prestation;

        $dataNewPrestation->name= $dataToverify['name'];
        $dataNewPrestation->description= $dataToverify['description'];
        $dataNewPrestation->prix= $dataToverify['prix'];
        $dataNewPrestation->nbrmax= $dataToverify['nbrmax'];
       
        $user = $request->user();
        $dataNewPrestation->id_user= $user->id;
       

        $dataNewPrestation->save();
return new PrestationResource($dataNewPrestation );
      }
}
