<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Recipe;
use App\Models\Ingredient;
use Illuminate\Http\Request;
use App\Http\Requests\StoreIngredientRequest;
use App\Http\Requests\UpdateIngredientRequest;

class IngredientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::with(['saves'])->get();
        $recipes = Recipe::with(['recipe_types', 'valorations'])->get();
        $ingredients = Ingredient::all();
    
        $recipesWithTypesAndAvgValorations = $recipes->map(function ($recipe) {
            $avgValoration = $recipe->valorations->avg('pivot.valoration');
            $avgValoration = number_format($avgValoration, 2);
            $recipe->avg_valoration = $avgValoration;
    
            return $recipe;
        });

        return Inertia::render('Dashboard/layouts/dashboard', [
            'ingredients' => $ingredients,
            'users' => $users,
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
        $ingredient = new Ingredient;
        $ingredient->name = $request->name;
        $ingredient->save();

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Ingredient $ingredient)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ingredient $ingredient)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateIngredientRequest $request, Ingredient $ingredient)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ingredient $ingredient)
    {
        //
    }

    public function getSuggestions(Request $request)
    {
        $searchTerm = $request->input('term');
        // Aquí deberías implementar la lógica para obtener sugerencias de ingredientes según el término de búsqueda.
        // Puedes obtener la lista de ingredientes desde tu base de datos o cualquier otra fuente.
        $ingredients = Ingredient::where('name','like','%'.$searchTerm.'%')->get('name');
        $suggestions = [];
        foreach ($ingredients as $key => $value) {
            $suggestions[] = $value->name;
        }

        return response()->json(['suggestions' => $suggestions]);
    }
}
