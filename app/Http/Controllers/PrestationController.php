<?php

namespace App\Http\Controllers;

use App\Http\Resources\PrestationResource;
use App\Prestation;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class PrestationController extends Controller
{


    public function index()
    {
        $prestations = Prestation::with(['user'])->get();
        return PrestationResource::collection($prestations);
    }

    public function showDetails(Request $request)
    {

        $validator = Validator::make(
            $request->input(),
            [
                "id"  => "required|numeric",
            ],
            [
                'required' => 'Le champ :attribute est requis'
            ]
        )->validate();
$prestation = Prestation::with(['user'])->where('id', '=', $validator['id'])->first();
      return $prestation;
      
    }

    


    public function prestationsProf(Request $request)
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
                "image"  => "",
            ],
            [
                'required' => 'Le champ :attribute est requis'
            ]
        )->validate();
       
        // return $validator;
        //on recherche si la prestation existe on le return grace a son id et avec son user 
        if (isset( $validator['id'])){ 
        $Prestation =  Prestation::where('id', '=', $validator['id'])->first();
         //return $Prestation;   
    }
   // return $validator;
        //si prestation existe alors 
        if (isset( $Prestation)){ 
    
            $dataNewPrestation = $Prestation;
            // return  $dataNewPrestation;
        }
        // return "toto";
        //si prestation existe pas 
        else {
            $dataNewPrestation = new Prestation;
        }

        $dataNewPrestation->name = $validator['name'];
        $dataNewPrestation->description = $validator['description'];
        $dataNewPrestation->prix = $validator['prix'];
        $dataNewPrestation->nbrmax = $validator['nbrmax'];
      

        // return  $dataNewPrestation;
        //si prestation existe alors son user ne change pas 

        //sinon on la creer alors on affrme  que c bien user connecté qui est propritaire
        if (!isset($Prestation)){ 
        // if (!$Prestation) {
            //recupere le user connecter 
            $user = $request->user();
            // return $request;
            // return $user->id;
            //passe l id du user connecter dans la presation
            $dataNewPrestation->id_user = $user->id;
         }



         if (isset($dataNewPrestation->image)) { //Si ceci est vrai, alors on save dans la base
            return 'image eite';
            $dataNewPrestation->save();
        }
        else{
            $img = $request->get('image');
            $exploded = explode(",", $img);

            if (str::contains($exploded[0], 'gif')) { // si la chaîne donnée contient la valeur donnée 'gif'
                $ext = 'gif'; // exter
            } else if (str::contains($exploded[0], 'png')) { // sinon si 'png'
                $ext = 'png'; 
            } else {
                $ext = 'jpeg'; // sinon 'jpeg'
            }

            $decode = base64_decode($exploded[1]);
            $filename = str::random() . "." . $ext;
            $path = public_path() . "\storage\images\\" . $filename;
// return $path; 

if (file_put_contents($path, $decode)) { // si Écrit le résultat dans le fichier
    $dataNewPrestation->image = "\storage\images\\" . $filename; // ajout photo dans /storage/images/
}
            // return 'image eite pas encore ';
        }


        // return $dataNewPrestation;
        //on enregistre en base de donne 
        $dataNewPrestation->save();

         return new PrestationResource($dataNewPrestation);
    }

    public function delete(Request $request)
    {


        $validator = Validator::make(
            $request->input(),
            [
                "id"  => "required",
               
            ],
            [
                'required' => 'Le champ :attribute est requis'
            ]
        )->validate();
        // return $request;

        $Prestation =  Prestation::where('id', '=', $request->id)->first()->delete();
        return  $Prestation;
    }
}
