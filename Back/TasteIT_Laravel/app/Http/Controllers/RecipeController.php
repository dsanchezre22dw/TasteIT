<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Recipe;
use App\Models\Ingredient;
use App\Models\Valoration;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreRecipeRequest;
use App\Http\Requests\UpdateRecipeRequest;


class RecipeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $recipes = Recipe::with(['recipe_types', 'valorations', 'ingredients', 'user'])->get();
    
        $recipesWithTypesAndAvgValorations = $recipes->map(function ($recipe) {
            $avgValoration = $recipe->valorations->avg('pivot.valoration');
            $avgValoration = number_format($avgValoration, 2);

            $amountValorations = $recipe->valorations->count();

            $recipe->avg_valoration = $avgValoration;
            $recipe->amount_valorations = $amountValorations;
    
            return $recipe;
        });
    
        return Inertia::render('Dashboard/pages/Standard/Recipe/indexrecipe', [
            'savedRecipesIds' => Auth::user()->saves()->pluck('recipe_id')->toArray(),
            'recipes' => $recipesWithTypesAndAvgValorations,
        ]);
    }

        /**
     * Display the specified resource.
     */
    public function show(Recipe $recipe, $recipeId)
    {
        
        $recipe = Recipe::with(['recipe_types', 'valorations', 'ingredients', 'user'])->findOrFail($recipeId);

        $recipe->avg_valoration = number_format($recipe->valorations->avg('pivot.valoration'), 2);
        $recipe->amount_valorations = $recipe->valorations->count();;
    
        return Inertia::render('Dashboard/pages/Standard/Recipe/seerecipe', [
            'savedRecipesIds' => Auth::user()->saves()->pluck('recipe_id')->toArray(),
            'recipe' => $recipe,
        ]);
    }
    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard/pages/Standard/Recipe/postrecipe', [
        ]);
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
            $path = $file->storeAs('/assets/img/recipes', $file->getClientOriginalName());

            $recipe->image = "/".$path;

            $recipe->save();
        }

        foreach ($request->amount as $ingredient => $amount) {
            $ing = Ingredient::where('name','like',$ingredient)->first();

            $recipe->ingredients()->attach($ing, ['amount' => $amount]);
        }

        return redirect()->route('recipes.index');
    }

    public function save(Request $request)
    {
        $user = Auth::user();

        if (!$request->saved){
            $user->saves()->attach($request->recipe_id);
        }else{
            $user->saves()->detach($request->recipe_id);
        }

        $user->save();

    }

    public function showValorate(Request $request, $recipeId)
    {
        
        $recipe = Recipe::with(['user'])->findOrFail($recipeId);
    
        return Inertia::render('Dashboard/pages/Standard/Recipe/valoraterecipe', [
            'recipe' => $recipe,
        ]);
    }


    public function valorate(Request $request)
    {

        $request->validate([
            'rating' => 'required|integer|between:1,5',
            'title' => 'nullable|string|max:50',
            'message' => 'nullable|string|max:250',
        ],[

            'rating.required' => 'Your punctuation cannot be 0 (at least 1)',
        ]);
        
        $user = Auth::user();

        if ($user->valorations()){
            $user->valorations()->detach();
        }

        $user->valorations()->attach($request->recipe_id, ["valoration" => $request->rating, "title" => $request->title, "description" => $request->message]);  
        $user->save(); 
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit($recipeId)
    {
        $recipe = Recipe::with(['recipe_types', 'valorations', 'ingredients', 'user'])->findOrFail($recipeId);

        return Inertia::render('Dashboard/pages/Standard/Recipe/editrecipe', [
            'recipe' => $recipe,
        ]);
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
    public function destroy($id)
    {
        $recipe = Recipe::findOrFail($id);
        $recipe->delete();
        return redirect()->back();
    }

    public function prueba()
    {
        return Inertia::render('Profile/Edit', [
        ]);
    }
}
