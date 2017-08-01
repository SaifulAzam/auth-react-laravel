<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/users', 'UserController@show');
Route::get('/users/{user}/profile', 'UserController@user');


Route::post('/register', 'RegisterController@store');

Route::post('/login', 'LoginController@auth');
Route::get('/decode', 'LoginController@decode');

Route::post('/new-event', 'EventController@create')->middleware('jwt.auth');