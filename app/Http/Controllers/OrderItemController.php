<?php

namespace App\Http\Controllers;

use App\OrderItem;
use Illuminate\Http\Request;

class OrderItemController extends Controller
{
    public function __construct(OrderItem $orderItem)
    {
        $this->model = $orderItem;
    }
   }
