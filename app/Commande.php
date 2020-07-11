<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Commande extends Model
{
    protected $table = "commandes";
    protected $fillable = ['id_user'];
    public $timestamps = false;
    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }

    public function status()
    {
        return $this->belongsTo(StatusCommande::class, 'id_status');
    }

    function prestations()
    {

        return $this->belongsToMany('App\Prestation', 'commandes_has_prestations', 'id_commande','id_prestation');
    }
}
