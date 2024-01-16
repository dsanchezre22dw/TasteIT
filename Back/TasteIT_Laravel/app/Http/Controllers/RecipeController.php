<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;
use App\Http\Requests\StoreRecipeRequest;
use App\Http\Requests\UpdateRecipeRequest;

class RecipeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $recipe = new Recipe;

        $recipe->title = $request->title;
        $recipe->duration_mins = $request->duration_mins;
        $recipe->difficulty = $request->difficulty;
        $recipe->description = $request->description;
        //$recipe->ingredients = $request->ingredients;
        $recipe->user_id = $request->user_id;

        $recipe->save();
/*
        if ($request->hasFile('file')) {
            $file = $request->file('file');
    
            // Guardar la imagen en la carpeta 'public/img'
            $path = $file->store('public/img');

            $recipe->image = $path;
    
            return response()->json(['message' => 'Imagen subida con éxito', 'path' => $path]);
        }
    
        return response()->json(['error' => 'No se proporcionó ninguna imagen'], 400);
        */
    
        return redirect('/');
    }

    /**
     * Display the specified resource.
     */
    public function show(Recipe $recipe)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Recipe $recipe)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRecipeRequest $request, Recipe $recipe)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Recipe $recipe)
    {
        //
    }
}
