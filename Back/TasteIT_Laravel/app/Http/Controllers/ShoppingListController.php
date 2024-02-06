<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Recipe;
use App\Models\Ingredient;
use Illuminate\Http\Request;
use App\Models\Shopping_list;
use Illuminate\Support\Facades\Auth;

class ShoppingListController extends Controller
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
    
        return Inertia::render('Dashboard/pages/Standard/ShoppingList/shoppinglist', [
            'shoppingList' => $shopping_list,
            'fridge' => $fridge,
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
        $shopping_list = $user->shopping_list;
        $shopping_list->ingredients()->detach();
        foreach ($request->amount as $ingredientName => $amount) {
            $ingredient = Ingredient::where('name','like',$ingredientName)->first();
            $shopping_list->ingredients()->attach($ingredient,['amount' => $amount]);
        }

        return redirect()->back();
    }

    public function add($array)
    {
        $array = explode(',',$array);

        $user = Auth::user();
        $shopping_list = $user->shopping_list;

        $ingredient = Ingredient::find($array[0]);
        $shopping_list->ingredients()->attach($ingredient,['amount' => $array[1]]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Shopping_list $shopping_list)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Shopping_list $shopping_list)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $user = Auth::user();
        $shopping_list = $user->shopping_list;
        
        foreach ($request->checked as $key => $name) {
            $ingredient = Ingredient::where('name','like',$name)->first();
            $shopping_list->ingredients()->detach($ingredient);
        }

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Shopping_list $shopping_list)
    {
        //
    }
}
