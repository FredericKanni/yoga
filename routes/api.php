<?php

use App\Http\Controllers\AuthController;
use Illuminate\Auth\Events\Login;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::post('/login','AuthController@login');
Route::get('/logout','AuthController@logout')->middleware('auth:api');


// users
Route::prefix('users')->group(function()
{
    // Route::post('/login' , 'AuthController@login');
    Route::middleware('auth:api')->get('/all','UserController@index');
    //on lui rajoute le mi car on a besoin de recuperer les prestation en function de l user
    Route::middleware('auth:api')->get('/{id}/prestations' , 'PrestationController@pretationsProf');
}
);

//prestation
Route::prefix('prestation')->group(function()
{
    // Route::post('/' , 'PrestationController@create');
    Route::get('/' , 'PrestationController@index');
  
}

);

//roles = nom du middle ware ds le kernel 
Route::prefix('prestation')->group(function () {
   
    Route::post('/' , 'PrestationController@create');
}); 


//equipe

Route::prefix('equipe')->group(function()
{
  
    Route::get('/' , 'UserController@getEquipe');
  
}



);



