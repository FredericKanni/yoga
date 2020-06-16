<?php

namespace App\Http\Controllers;

use App\Http\Resources\PrestationResource;
use App\Prestation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PrestationController extends Controller
{


public function index(){
$prestations = Prestation::with(['user'])->get();
return PrestationResource::collection($prestations);
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
