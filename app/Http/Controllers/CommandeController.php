<?php

namespace App\Http\Controllers;

use App\Commande;
use App\Prestation;
use Cartalyst\Stripe\Laravel\Facades\Stripe;
use Illuminate\Http\Request;
use Exception;
use PhpParser\Node\Stmt\Return_;

class CommandeController extends Controller
{


    public function create(Request $request)
    {
        //valider la resquest

// $user= $request->user();
// $request['user']=$user;
// return $request->user();


//1create une nouvelle commande
$commande = new Commande;
//2 recupere luser actuel pour recupere son id
$id= $request->user()->id;
//3assign id a id_user dans la commande
$commande->id_user = $id;

//on set l id du status commande a 1 = encours
$commande->id_status = 1;

//4sauve la nouvelle commande
$commande->save();


// return $commande;
$listPresta = $request['panier'];

//en js envoie l id de la presta 
//


//todo verivier les prestationb existe en bdd
foreach ($listPresta as $_listPresta) { //sert à recuperé les id des presta
    $idPresta= $_listPresta['id'];


   $quantity = $_listPresta['placeNbr'];


  if (!empty($idPresta)) {
    $commande->prestations()->attach($idPresta, ['quantity' => $quantity]);
} 
  
}

// return $listPresta;


// return  $idPresta;
//acette commande on va attacher les prestations
$com= $commande::where('id', '=', $commande->id)->with(['prestations'])->get();
        return $com;
    }

    public function pay(Request $request)
    {
        $validator = $request->validate(
            [

                'paiement' => 'required',
            ],
            [
                'required' => 'Le champ :attribute est requis'
            ]
        );
        // return $validator["paiement"]['id'];
        try {
            $charge = Stripe::charges()->create([

                'amount' => 23,
                'currency' => 'CAD',
                'source' => $validator["paiement"]['id'],
                'description' => 'Description',
                // 'receipt_mail'=>$request->email,
                'metadata' => [
                    'data1' => 'metadata1',
                    'data2' => 'metadata2',
                    'data3' => 'metadata3',
                ],
            ]);
            return $charge;
        } catch (Exception $e) {
            return $e;
        }
    }
}
