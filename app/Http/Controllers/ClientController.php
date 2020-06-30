<?php

namespace App\Http\Controllers;

use App\Client;
use Illuminate\Http\Request;

class ClientController extends BaseController
{
    public function __construct(Client $client)
    {
        $this->model = $client;
    }
   
}
