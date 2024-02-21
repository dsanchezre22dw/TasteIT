<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Recipe;
use App\Models\Recipe_type;
use App\Models\Ingredient;
use App\Models\Valoration;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreRecipeRequest;
use App\Http\Requests\UpdateRecipeRequest;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

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

        $recipe_types = Recipe_type::all();
        $ingredients = Ingredient::all();
        $successMessage = session('success') ?? "";

    
        return Inertia::render('Dashboard/features/Recipes/indexrecipe', [
            'user' => \App\Models\User::with(['followers', 'following'])->findOrFail(Auth::id()),
            'savedRecipesIds' => Auth::user()->saves()->pluck('recipe_id')->toArray(),
            'recipes' => $recipesWithTypesAndAvgValorations,
            'recipe_types' => $recipe_types,
            'ingredients' => $ingredients,
            'successMessage' => $successMessage, 
        ]);
    }

        /**
     * Display the specified resource.
     */
    public function show(Recipe $recipe, $recipeId)
    {
        
        $recipe = Recipe::with(['recipe_types', 'valorations', 'ingredients', 'user'])->findOrFail($recipeId);

        $recipe->avg_valoration = number_format($recipe->valorations->avg('pivot.valoration'), 2);
        $recipe->amount_valorations = $recipe->valorations->count();

        $successMessage = session('success') ?? "";

        return Inertia::render('Dashboard/features/Recipes/seerecipe', [
            'savedRecipesIds' => Auth::user()->saves()->pluck('recipe_id')->toArray(),
            'recipe' => $recipe,
            'successMessage' => $successMessage,
        ]);
    }
    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $recipe_types = Recipe_type::all();
        
        return Inertia::render('Dashboard/features/Recipes/postrecipe', [
            'recipe_types' => $recipe_types,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'title' => 'required|string|max:60',
            'duration_mins' => 'required|numeric',
            'difficulty' => 'required|in:beginner,medium,expert',
            'description' => 'required|string|max:1024',
            'user_id' => 'required|numeric',
            'amount' => 'required|array|min:1',
            'image' => 'required|image'
        ],[
            'amount.required' => 'Please add at least one ingredient.',
            'image.image' => 'The file must be an image.'
        ]);

        $recipe = new Recipe;

        $recipe->title = $request->title;
        $recipe->duration_mins = $request->duration_mins;
        $recipe->difficulty = $request->difficulty;
        $recipe->description = $request->description;
        $recipe->user_id = $request->user_id;
        
        $file = $request->file('image');
        $path = 'assets/img/recipes';

        $imageName = time() . '.' . $file->getClientOriginalExtension();

        // Guardar la imagen en la carpeta 'public/img'
        $file->move(public_path($path), $imageName);

        $recipe->image = "/".$path."/".$imageName;

        $recipe->save();

        foreach ($request->amount as $ingredient => $amount) {
            $ing = Ingredient::where('name','like',$ingredient)->first();

            $recipe->ingredients()->attach($ing, ['amount' => $amount]);
        }

        if ($request->recipetype) {
            foreach ($request->recipetype as $key => $typeId) {
                $type = Recipe_type::find($typeId);

                $recipe->recipe_types()->attach($type);
            }
        }

        return redirect()->route('recipes.index')->with('success', ['message' => 'Recipe ' . "'" . $request->title . "'" . ' created successfully', 'type' => 'New recipe']);
    }

    public function save(Request $request, $recipe_id)
    {
        $user = Auth::user();

        if (!$request->saved){
            $user->saves()->attach($recipe_id);
        }else{
            $user->saves()->detach($recipe_id);
        }

        $user->save();
    }

    public function showValorate(Request $request, $recipeId)
    {
        
        $recipe = Recipe::with(['user'])->findOrFail($recipeId);
        
        $valoration = "";
        if (Auth::user()->valorations()->where('recipe_id', $recipeId)->count() > 0){
            $valoration = Auth::user()->valorations()->where('recipe_id', $recipeId)->first()->pivot;
        }

        return Inertia::render('Dashboard/features/Recipes/valoraterecipe', [
            'recipe' => $recipe,
            'valoration' => $valoration,
        ]);
    }


    public function valorate(Request $request)
    {

        $request->validate([
            'recipe_id' => 'required|integer|exists:recipes,id',
            'rating' => 'required|integer|between:1,5',
            'title' => 'nullable|string|max:50',
            'message' => 'nullable|string|max:250',
        ],[

            'rating.required' => 'Your punctuation cannot be 0 (at least 1)',
        ]);
        
        $user = Auth::user();

        if ($user->valorations()->where('recipe_id', $request->recipe_id)->count() > 0){
            $user->valorations()->updateExistingPivot($request->recipe_id, ['valoration'=>$request->rating, 'title'=>$request->title, 'description'=>$request->message]);
        }else{
            $user->valorations()->attach($request->recipe_id, ["valoration" => $request->rating, "title" => $request->title, "description" => $request->message]);  
        }

        $user->save(); 

        return redirect()->route('recipes.index');
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit($recipeId)
    {
        $recipe = Recipe::with(['recipe_types', 'valorations', 'ingredients', 'user'])->findOrFail($recipeId);
        $recipe_types = Recipe_type::all();

        return Inertia::render('Dashboard/features/Recipes/editrecipe', [
            'recipe' => $recipe,
            'recipe_types' => $recipe_types,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $recipeID)
    {
        $request->validate([
            'title' => 'required|string|max:60',
            'duration_mins' => 'required|numeric',
            'difficulty' => 'required|in:beginner,medium,expert',
            'description' => 'required|string|max:1024',
            'user_id' => 'required|numeric',
            'amount' => 'required|array|min:1',
            'image' => 'nullable|image'
        ],[
            'amount.required' => 'Please add at least one ingredient.',
            'image.image' => 'The file must be an image.'
        ]);
        $recipe = Recipe::find($recipeID);

        $recipe->title = $request->title;
        $recipe->duration_mins = $request->duration_mins;
        $recipe->difficulty = $request->difficulty;
        $recipe->description = $request->description;
        $recipe->user_id = $request->user_id;
        
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $path = 'assets/img/recipes';

            $imageName = time() . '.' . $file->getClientOriginalExtension();

            // Guardar la imagen en la carpeta 'public/img'
            $file->move(public_path($path), $imageName);

            $recipe->image = "/".$path."/".$imageName;

            
        }
        $recipe->save();

        $recipe->ingredients()->detach();

        foreach ($request->amount as $ingredient => $amount) {
            $ing = Ingredient::where('name','like',$ingredient)->first();

            $recipe->ingredients()->attach($ing, ['amount' => $amount]);
        }

        $recipe->recipe_types()->detach();

        if ($request->recipetype) {
            foreach ($request->recipetype as $key => $typeId) {
                $type = Recipe_type::find($typeId);

                $recipe->recipe_types()->attach($type);
            }
        }

        return redirect()->route('recipes.show',$recipeID)->with('success', ['message' => 'Recipe ' . "'" . $request->title . "'" . ' updated successfully', 'type' => 'Recipe Updated']);

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


    public function getNewRecipesStats()
    {
        // Obtener la fecha de inicio y fin del último mes
        $lastMonth = Carbon::now()->subMonth();

        // Obtener la fecha de inicio y fin del mes anterior al último
        $previousMonth = Carbon::now()->subMonths(2);

        // Contar la cantidad de usuarios registrados en el último mes
        $recipesLastMonth = Recipe::where('created_at', '>=', $lastMonth)->count();

        // Contar la cantidad de usuarios registrados en el mes anterior al último
        $recipesPreviousMonth = Recipe::whereBetween('created_at', [$previousMonth, $lastMonth])->count();

        // Calcular el porcentaje de crecimiento
        if ($recipesPreviousMonth > 0) {
            $growthPercentage = (($recipesLastMonth - $recipesPreviousMonth) / $recipesPreviousMonth) * 100;
        } else {
            $growthPercentage = 0; // Evitar división por cero
        }

        return response()->json([
            'value' => $recipesLastMonth,
            'growth' => round($growthPercentage, 2),
            'title' => "New Recipes",
        ]);
    }

    public function getRecipeTypeRecipes()
    {

        $recipeTypeCounts = DB::table('recipe_recipe_type')
            ->join('recipe_types', 'recipe_recipe_type.recipe_type_id', '=', 'recipe_types.id')
            ->select('recipe_types.id', 'recipe_types.name', DB::raw('COUNT(*) as recipe_count'))
            ->groupBy('recipe_types.id', 'recipe_types.name')
            ->get();

        return response()->json($recipeTypeCounts);
    }

    public function getMonthlyRecipes()
    {
        $newRecipesByMonth = Recipe::select(
            DB::raw('YEAR(created_at) as year'),
            DB::raw('MONTH(created_at) as month'),
            DB::raw('COUNT(*) as new_recipes')
        )
        ->where('created_at', '>=', now()->subYear())
        ->groupBy('year', 'month')
        ->orderBy('year')
        ->orderBy('month')
        ->get();
    
        // Mapeamos el nombre del mes
        $newRecipesByMonth->transform(function ($item) {
            $monthNames = [
                1 => 'January', 2 => 'February', 3 => 'March', 4 => 'April', 5 => 'May', 6 => 'June',
                7 => 'July', 8 => 'August', 9 => 'September', 10 => 'October', 11 => 'November', 12 => 'December'
            ];
            $item->month_name = $monthNames[$item->month];
            return $item;
        });
    
        return response()->json($newRecipesByMonth);
    }

    public function getRecipesWithUsers()
    {
        $recipesAndUsers = Recipe::select('recipes.title as action', 'users.username as author', 'recipes.created_at')
            ->join('users', 'recipes.user_id', '=', 'users.id')
            ->orderBy('recipes.created_at', 'DESC')
            ->get()
            ->map(function ($item) {
                $item['type'] = 'recipes';
                $item['formatted_date'] = Carbon::parse($item['created_at'])->isoFormat('D MMM h:mm A');
                return $item->toArray();
            });

        $seguidores = User::select('users.username as author', 'followed_users.username as action', 'follows.created_at')
            ->join('follows', 'users.id', '=', 'follows.follower_id')
            ->join('users as followed_users', 'followed_users.id', '=', 'follows.followed_id')
            ->orderBy('follows.created_at', 'DESC')
            ->get()
            ->map(function ($item) {
                $item['type'] = 'follower';
                $item['formatted_date'] = Carbon::parse($item['created_at'])->isoFormat('D MMM h:mm A');
                return $item->toArray();
            });
    
        $resultados = $recipesAndUsers->concat($seguidores)->sortByDesc('created_at')->take(5)->values();

        return $resultados->toArray();

    }

}
