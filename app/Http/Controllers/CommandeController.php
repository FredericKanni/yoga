<?php

namespace App\Http\Controllers;

use Cartalyst\Stripe\Laravel\Facades\Stripe;
use Illuminate\Http\Request;
use Exception;
class CommandeController extends Controller
{
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
     try
        {
            $charge = Stripe::charges()->create([

                'amount' => 23,
                'currency'=>'CAD',
                'source'=>$validator["paiement"]['id'],
                'description'=>'Description',
                // 'receipt_mail'=>$request->email,
                'metadata'=>[
                    'data1'=> 'metadata1',
                    'data2'=> 'metadata2',
                    'data3'=> 'metadata3',
                ],
            ]);
           return $charge;
        }
         catch(Exception $e){
            return $e;
         }
    }
}
