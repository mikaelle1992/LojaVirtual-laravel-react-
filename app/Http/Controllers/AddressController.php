<?php

namespace App\Http\Controllers;

use App\Address;
use Illuminate\Http\Request;

class AddressController extends Controller
{
    public function __construct(Address $address)
    {
        $this->model = $address;
    }

   }
