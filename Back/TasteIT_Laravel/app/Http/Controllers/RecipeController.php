<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Recipe;
use App\Models\Ingredient;
use App\Models\Valoration;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\StoreRecipeRequest;
use App\Http\Requests\UpdateRecipeRequest;

class RecipeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $recipes = Recipe::with(['recipe_types', 'valorations'])->get();
    
        $recipesWithTypesAndAvgValorations = $recipes->map(function ($recipe) {
            $avgValoration = $recipe->valorations->avg('pivot.valoration');
            $avgValoration = number_format($avgValoration, 2);
            $recipe->avg_valoration = $avgValoration;
    
            return $recipe;
        });
    
        return Inertia::render('Dashboard/layouts/dashboard', [
            'recipes' => $recipesWithTypesAndAvgValorations,
        ]);
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
        $recipe->user_id = $request->user_id;
        
        if ($request->hasFile('image')) {
            $file = $request->file('image');

            // Guardar la imagen en la carpeta 'public/img'
            $path = $file->storeAs('public/assets', $file->getClientOriginalName());

            $recipe->image = $path;

            $recipe->save();
        }

        foreach ($request->amount as $ingredient => $amount) {
            $ing = Ingredient::where('name','like',$ingredient)->first();

            $recipe->ingredients()->attach($ing, ['amount' => $amount]);
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(Recipe $recipe)
    {
        return Inertia::render('Dashboard/layouts/dashboard');
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
