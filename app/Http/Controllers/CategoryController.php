<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends BaseController
{
     public function __construct(Category $category)
    {
        $this->model=$category;
    }
}
