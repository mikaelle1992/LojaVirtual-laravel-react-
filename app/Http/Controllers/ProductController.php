<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends BaseController
{
  public function __construct(Product $product)
  {
      $this->model=$product;
  } 

  public function store(Request $request)
  {
      $data = $request ->all();
      $data['status']= 'active';
      $model = $this ->model::create($data);
      return response()->json($model, 201);
  }
 
}
