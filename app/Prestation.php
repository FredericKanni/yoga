<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Prestation extends Model
{
    protected $table = "prestations";
    protected $fillable = ['id','name', 'description', 'nbrmax','prix', 'date'];
    public $timestamps = false;


    /***
     * relation one to many 
     */

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');

    }

    

}
