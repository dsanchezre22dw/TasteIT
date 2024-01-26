<?php

use App\Models\User;
use Inertia\Inertia;
use App\Models\Recipe;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ShoppingListController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {

    if (!(auth()->check())) {

        return Inertia::render("Landing", []);

    }

    return Redirect::route('dashboard');
})->name('index');



Route::prefix('dashboard')->group(function () {
    Route::get('/home', [UserController::class, 'index']);
    Route::get('/profile', [UserController::class, 'index']);
    Route::get('/tables', [UserController::class, 'index']);
    Route::get('/notifications', [UserController::class, 'index']);
    Route::get('/prueba', [UserController::class, 'index']);

    Route::prefix('users')->group(function () {
        Route::get('/', [UserController::class, 'index'])->name('users.index'); 
        Route::delete('/delete/{id}', [UserController::class, 'destroy'])->name('users.destroy'); 
        Route::get('/edit/{id}', [UserController::class, 'edit'])->name('users.edit'); 
        Route::post('/edit/{id}', [UserController::class, 'update'])->name('users.update');
        Route::get('/add', [UserController::class, 'show'])->name('users.show');  
        Route::post('/add', [UserController::class, 'store'])->name('users.add'); 
    });

    Route::prefix('recipes')->group(function () {
        Route::get('/', [RecipeController::class, 'index'])->name('recipes.index'); 
        Route::delete('/delete/{id}', [RecipeController::class, 'destroy'])->name('recipes.destroy'); 
        Route::get('/edit/{id}', [RecipeController::class, 'edit'])->name('recipes.edit'); 
        Route::post('/edit/{id}', [RecipeController::class, 'update'])->name('recipes.update'); 
        Route::get('/add', [RecipeController::class, 'show'])->name('recipes.show');  
        Route::post('/add', [RecipeController::class, 'store'])->name('recipes.add'); 
    });

    Route::prefix('shopping')->group(function (){
        Route::get('/', [ShoppingListController::class,'index']);
        Route::post('/update', [ShoppingListController::class,'store']);
        Route::post('/clear', [ShoppingListController::class,'update']);
    });

});

Route::get('/dashboard', function () {
    $users = User::all();
    $recipes = Recipe::with(['recipe_types', 'valorations'])->get();
    
    $recipesWithTypesAndAvgValorations = $recipes->map(function ($recipe) {
        $avgValoration = $recipe->valorations->avg('pivot.valoration');
        $avgValoration = number_format($avgValoration, 2);
        $recipe->avg_valoration = $avgValoration;

        return $recipe;
    });


    return Inertia::render('Dashboard/layouts/dashboard', [
        'users' => $users,
        'recipes' => $recipesWithTypesAndAvgValorations,

    ]);

})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/upload', function (Request $request) {
    if ($request->hasFile('file')) {
        $file = $request->file('file');

        // Guardar la imagen en la carpeta 'public/img'
        $path = $file->store('public/img');

        return response()->json(['message' => 'Imagen subida con éxito', 'path' => $path]);
    }

    return response()->json(['error' => 'No se proporcionó ninguna imagen'], 400);
})->middleware(['auth', 'verified']);

require __DIR__.'/auth.php';
