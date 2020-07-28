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

    public function showDetails($id)
    {

        $prestation = Prestation::with('user')->where('id', '=', $id)->first();
        //   return new PrestationResource($prestation) ;
        return new PrestationResource($prestation);
    }




    public function prestationsProf(Request $request)
    {


//si id pas egal a 1

        // $userId = $user->id;
        // $user = User::with(['prestations'])->find($userId);
        // return   $user;

        //recupere l user connecte via le middleware  doc mettre la route dans un mid auth
        // $prestations = Prestation::with(['user'])->get();
        $user = $request->user();
        $userId = $user->id;

      
        //les utilisteurs avec des prestations  et tu trouve ... 
        // $user = User::with(['prestations'])->find($userId);
        // recupere les prestation de l user actuel 
        if($userId == 1){
            $prestations = Prestation::all();
        }
        else{
            $prestations = Prestation::where('id_user', '=', $userId)->get();
        }
           
        


        return PrestationResource::collection($prestations);


    }




    
        public function prestationsDuProf(Request $id)
        {
        
            $user = User::where('id','=',$id->id)->with( ['prestations'])->get();
            return   $user;
         
        }


    public function createOrUpdate(Request $request)
    {
        $validator = Validator::make(
            $request->input(),
            [
                "id"  => "integer",
                "name" => "required|min:4",
                "description" => "required|min:3|max:250",
                "prix" => "required|numeric",
                "nbrmax" => "required|integer",
                "id_user" => "integer",
                "image"  => "",
                "date"  => "",
                "places_dispo"  => "required",
            ],
            [
                'required' => 'Le champ :attribute est requis',
                'numeric'=> 'Le champ :attribute doit etre un nombre',
                'integer'=> 'Le champ :attribute doit etre un nombre entier',
                'min'=> 'Le champ :attribute doit faire :min charactères minimum',
                'max'=> 'Le champ :attribute doit faire :max  charactères maximun',
            ]
        )->validate();
     
        //on recherche si la prestation existe on le return grace a son id et avec son user 
        if (isset($validator['id'])) {
            $Prestation =  Prestation::where('id', '=', $validator['id'])->first();
        }
        //si prestation existe alors 
        if (isset($Prestation)) {

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
        $dataNewPrestation->places_dispo = $validator['places_dispo'];
        $dataNewPrestation->created_at = $validator['date'];
        //si prestation existe alors son user ne change pas 
        //sinon on la creer alors on affrme  que c bien user connecté qui est propritaire
        if (!isset($Prestation)) {
            // if (!$Prestation) {
            //recupere le user connecter 
            $user = $request->user();
            // passe l id du user connecter dans la presation
            $dataNewPrestation->id_user = $user->id;
        }



        if (isset($dataNewPrestation->image)) {
            if ($dataNewPrestation->image == $validator['image']) {
                $dataNewPrestation->save();
                return new PrestationResource($dataNewPrestation);
            }

            else {
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
                // return 'image exite pas encore ';
            }
        
         
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
