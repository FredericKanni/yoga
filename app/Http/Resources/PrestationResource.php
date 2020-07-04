<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PrestationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {


        //permet de renvoyer le user avec ainsi que le with 
        //  $user = new UserResource($this->whenLoaded('user'));
        $user = new UserResource($this->whenLoaded('user'));
        // $user = 'App\User'::find($this->id_user);
      if(isset(  $this->created_at)){
          $this->created_at = \Carbon\Carbon::createFromFormat('Y-m-d H:i:s',  $this->created_at)->format('Y-m-d H:i:s');
   
      }
             return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'prix' => $this->prix,
            'nbrmax' => $this->nbrmax,
            'placesDispo' => $this->places_dispo,
            'id_user' => $this->id_user,
            'user' => $user,
            'image' => $this->image,
            'date' =>   $this->created_at,
           
        ];
    }
}
