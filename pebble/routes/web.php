<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Users;  

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return redirect("sushmitha");
// });

// Route::get('/sushmitha ', function () {
//     return view("sushmitha");
// });

Route::post("users/",[Users::class,'loginvalidations']);
Route::view('login','sushmitha');