<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Fridge;
use App\Models\Recipe;
use App\Models\Ingredient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FridgeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $shopping_list = Auth::user()->shopping_list;
        $shopping_list->ingredients;

        $fridge = Auth::user()->fridge;
        $fridge->ingredients;
        
        $users = User::with(['saves'])->get();
        $recipes = Recipe::with(['recipe_types', 'valorations'])->get();
    
        $recipesWithTypesAndAvgValorations = $recipes->map(function ($recipe) {
            $avgValoration = $recipe->valorations->avg('pivot.valoration');
            $avgValoration = number_format($avgValoration, 2);
            $recipe->avg_valoration = $avgValoration;
    
            return $recipe;
        });
    
        return Inertia::render('Dashboard/layouts/dashboard', [
            'fridge' => $fridge,
            'shoppingList' => $shopping_list,
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
        $user = Auth::user();
        $fridge = $user->fridge;
        $fridge->ingredients()->detach();
        foreach ($request->amount as $ingredientName => $amount) {
            $ingredient = Ingredient::where('name','like',$ingredientName)->first();
            $fridge->ingredients()->attach($ingredient,['amount' => $amount]);
        }

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Fridge $fridge)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Fridge $fridge)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $user = Auth::user();
        $fridge = $user->fridge;
        
        foreach ($request->checked as $key => $name) {
            $ingredient = Ingredient::where('name','like',$name)->first();
            $fridge->ingredients()->detach($ingredient);
        }

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Fridge $fridge)
    {
        //
    }
}
