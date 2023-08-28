<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Blade;

class Users extends Controller
{   
    //  public function index(){
    //      return view("sushmitha",['name'=> "Sushmitha"]);
    //  }
    // public function index(Request $req)
    // {
    //     $req->validate([
    //         'username'=>'required',
    //         'userpassword'=>'required'
    //     ]);
    //     return $req->input();
    // }
    public function loginvalidations(Request $data){
        $data->validate([
            'username'=>'required | max:10',
        'userpassword'=>'required | min:5 ']);
        return $data->input();
    }
}
