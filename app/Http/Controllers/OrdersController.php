<?php

namespace App\Http\Controllers;

use App\Orders;
use Illuminate\Http\Request;

class OrdersController extends BaseController
{
    public function __construct(Orders $order)
    {
        $this->model=$order;
    } 
    public function store(Request $request)
  {
      $data = $request ->all();
      $data['status']= 'opened';
      $model = $this ->model::create($data);
      return response()->json($model, 201);
  }
}
