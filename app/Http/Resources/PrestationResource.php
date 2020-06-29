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
         $user = new UserResource($this->whenLoaded('user'));

        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'prix' => $this->prix,
            'nbrmax' => $this->nbrmax,
            'places_dispo' => $this->places_dispo,
            'id_user' => $this->id_user,
            'user' => $user,
            'image' => $this->image,
          
        ];
    }
}
