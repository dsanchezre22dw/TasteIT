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

        return Inertia::render('Dashboard/pages/Standard/Ingredients/CreateIngredients', [
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
    public function edit($ingredientId)
    {
        $ingredient = Ingredient::findOrFail($ingredientId);
        $ingredients = Ingredient::all();
        return Inertia::render('Dashboard/layouts/dashboard', [
            'ingredient' => $ingredient,
            'ingredients' => $ingredients,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $ingredient = Ingredient::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:50',
            'enabled' => 'required|boolean',
        ]);

        $ingredient->name = $request->input('name');
        $ingredient->enabled = $request->input('enabled');

        $ingredient->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($ingredientId)
    {
        Ingredient::destroy($ingredientId);

        return redirect()->back();
    }

    public function accept($ingredientId)
    {
        $ingredient = Ingredient::findOrFail($ingredientId);
        $ingredient->enabled = true;
        $ingredient->save();

        return redirect()->back();
    }

    public function getSuggestions(Request $request)
    {
        $searchTerm = $request->input('term');
        // Aquí deberías implementar la lógica para obtener sugerencias de ingredientes según el término de búsqueda.
        // Puedes obtener la lista de ingredientes desde tu base de datos o cualquier otra fuente.
        $ingredients = Ingredient::where('name','like','%'.$searchTerm.'%')->where('enabled',true)->get('name');
        $suggestions = [];

        $ingredients = $ingredients->sortByDesc(function ($ingredient) use ($searchTerm) {
            similar_text(strtolower($searchTerm), strtolower($ingredient->name), $similarity);
            return $similarity;
        });

        $suggestions = $ingredients->pluck('name');

        return response()->json(['suggestions' => $suggestions]);
    }
}
