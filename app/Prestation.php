<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Prestation extends Model
{

    use SoftDeletes;

    protected $table = "prestations";
    protected $fillable = ['id','name', 'description','places_dispo', 'nbrmax','prix', 'date','deleted_at'];
    public $timestamps = false;


    /***
     * relation one to many 
     */

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');

    }

    function commandes()
    {
        return $this->belongsToMany('App\Commande', 'commandes_has_prestations', 'id_prestation','id_commande');
    }

}
