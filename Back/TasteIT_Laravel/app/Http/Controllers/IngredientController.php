<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Recipe;
use App\Models\Ingredient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreIngredientRequest;
use App\Http\Requests\UpdateIngredientRequest;

class IngredientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $ingredients = Ingredient::with(['user'])->get();


        return Inertia::render('Dashboard/features/Ingredients/ingredientssection', [
            'ingredients' => $ingredients,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
        return Inertia::render('Dashboard/features/Ingredients/postingredient');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'name' => 'required|string|max:50',
            'image' => 'required|image'
        ],[
            'image.image' => 'The file must be an image.'
        ]);


        $ingredient = new Ingredient;
        $ingredient->name = $request->name;

        $file = $request->file('image');
        $path = 'assets/img/ingredients';

        $imageName = time() . '.' . $file->getClientOriginalExtension();

        // Guardar la imagen en la carpeta 'public/img'
        $file->move(public_path($path), $imageName);

        $ingredient->image = "/".$path."/".$imageName;


        if (Auth::user()->type === 'admin'){
            $ingredient->enabled = 1;
        }else{
            $ingredient->enabled = null;
        }

        Auth::user()->ingredients()->save($ingredient);

        return redirect()->route('ingredients.index');
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
        return Inertia::render('Dashboard/features/Ingredients/editingredient', [
            'ingredient' => $ingredient,
            'ingredients' => $ingredients,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {

        $request->validate([
            'name' => 'required|string|max:50',
            'image' => 'nullable|image'
        ],[
            'image.image' => 'The file must be an image.'
        ]);


        $ingredient = Ingredient::findOrFail($id);
        $ingredient->name = $request->name;

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $path = 'assets/img/ingredients';

            $imageName = time() . '.' . $file->getClientOriginalExtension();

            // Guardar la imagen en la carpeta 'public/img'
            $file->move(public_path($path), $imageName);

            $ingredient->image = "/".$path."/".$imageName;
        }
        $ingredient->save();

        return redirect()->route('ingredients.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($ingredientId)
    {
        $ingredient = Ingredient::findOrFail($ingredientId);
        $ingredient->delete();

        return redirect()->back();
    }

    public function accept($ingredientId)
    {
        $ingredient = Ingredient::findOrFail($ingredientId);
        $ingredient->enabled = true;
        $ingredient->save();

        return redirect()->back();
    }

    public function deny($ingredientId)
    {
        $ingredient = Ingredient::findOrFail($ingredientId);
        $ingredient->enabled = false;
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

    public function getNewIngredientsStats()
    {
        // Obtener la fecha de inicio y fin del último mes
        $lastMonth = Carbon::now()->subMonth();

        // Obtener la fecha de inicio y fin del mes anterior al último
        $previousMonth = Carbon::now()->subMonths(2);

        // Contar la cantidad de usuarios registrados en el último mes
        $ingredientsLastMonth = Ingredient::where('created_at', '>=', $lastMonth)->count();

        // Contar la cantidad de usuarios registrados en el mes anterior al último
        $ingredientsPreviousMonth = Ingredient::whereBetween('created_at', [$previousMonth, $lastMonth])->count();

        // Calcular el porcentaje de crecimiento
        if ($ingredientsPreviousMonth > 0) {
            $growthPercentage = (($ingredientsLastMonth - $ingredientsPreviousMonth) / $ingredientsPreviousMonth) * 100;
        } else {
            $growthPercentage = 0; // Evitar división por cero
        }

        return response()->json([
            'value' => $ingredientsLastMonth,
            'growth' => round($growthPercentage, 2),
            'title' => "New Ingredients",
        ]);
    }
}
