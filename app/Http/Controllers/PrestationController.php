<?php

namespace App\Http\Controllers;

use App\Http\Resources\PrestationResource;
use App\Prestation;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PrestationController extends Controller
{


    public function index()
    {
        $prestations = Prestation::with(['user'])->get();
        return PrestationResource::collection($prestations);
    }


    public function pretationsProf(Request $request)
    {

        //recupere l user connecte via le middleware  doc mettre la route dans un mid auth

        // $prestations = Prestation::with(['user'])->get();
        $user = $request->user();
        $userId = $user->id;
        $user = User::with(['prestations'])->find($userId);
        // if (!$product) {
        //     $addToDb = new Produits;

        // }

        return   $user;
    }


    public function createOrUpdate(Request $request)
    {
        $validator = Validator::make(
            $request->input(),
            [
                "id"  => "",
                "name" => "required",
                "description" => "",
                "prix" => "required|numeric",
                "nbrmax" => "required|numeric",
                "id_user" => "numeric",

            ],
            [
                'required' => 'Le champ :attribute est requis'
            ]
        )->validate();
        // return $validator;
        //on recherche si la prestation existe on le return grace a son id et avec son user  
        $Prestation =  Prestation::where('id', '=', $validator['id'])->first();
        // return $Prestation;
        //si prestation existe alors 
        if ($Prestation) {
            $dataNewPrestation = $Prestation;
        }
        //si prestation existe pas 
        else {
            $dataNewPrestation = new Prestation;
        }

        $dataNewPrestation->name = $validator['name'];
        $dataNewPrestation->description = $validator['description'];
        $dataNewPrestation->prix = $validator['prix'];
        $dataNewPrestation->nbrmax = $validator['nbrmax'];
        $dataNewPrestation->image = '';

        //si prestation existe alors son user ne change pas 

        //sinon on la creer 
        if (!$Prestation) {
            //recupere le user connecter 
            $user = $request->user();
            //passe l id du user connecter dans la presation
            $dataNewPrestation->id_user = $user->id;
        }
        // return $dataNewPrestation;
        //on enregistre en base de donne 
        $dataNewPrestation->save();

         return new PrestationResource($dataNewPrestation);
    }
}
