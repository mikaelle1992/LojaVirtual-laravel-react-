<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends BaseController
{
    public function __construct(User $model)
    {
        $this->model = $model;
    }
    public function store(Request $request)
    {
        $data = $request ->all();
        $data['password'] = bcrypt($data['password']);
        $model = $this ->model::create($data);
        return response()->json($model, 201);
    }
    
   
}
