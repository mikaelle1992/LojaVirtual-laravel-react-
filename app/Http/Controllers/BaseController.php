<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BaseController extends Controller
{
    protected $model;
   
    public function index()
    {
        $models = $this->model::all();
        return response()->json($models, 200);
    }

    public function store(Request $request)
    {
        $data = $request ->all();
        $model = $this ->model::create($data);
        return response()->json($model, 201);
    }

    public function show($id)
    {
      $model = $this->model::find($id);
      return response()->json($model, 200);

    }
 
    public function update(Request $request, $id)
    {
         $data = $request->all();
        $model = $this->model::find($id);
        $model -> update($data);
         return response()->json($model, 200);

    }
    public function destroy($id)
    {
        $model = $this->model::find($id);
        $model->delete();
        return response()->json([], 204);
    }
}
