<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StatusCommande extends Model
{
    protected $table = "status_commande";
    protected $fillable = ['id','name'];
    public $timestamps = false;

    public function commandes()
    {
        return $this->hasMany(Commande::class, 'id_status');
    }
}
