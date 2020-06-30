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

   
 
}
