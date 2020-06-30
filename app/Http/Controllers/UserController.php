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
   
}
