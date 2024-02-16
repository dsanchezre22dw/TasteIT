<?php

use App\Models\User;
use Inertia\Inertia;
use App\Models\Recipe;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\UserController;
use App\Http\Controllers\FridgeController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\IngredientController;
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

        return Inertia::render("Landing/Landing", []);

    }

    return Redirect::route('dashboard');
})->name('index');

Route::middleware('auth', 'verified')->prefix('dashboard')->group(function () {

    Route::get('/', function () {
        return Redirect::route('statistics.index');
    })->name('dashboard')->middleware('admin');

    Route::get('/profile', [UserController::class, 'profile'])->name('profile'); 
    Route::get('/statistics', [UserController::class, 'statistics'])->name('statistics.index');

    Route::prefix('users')->group(function () {

        Route::middleware('admin')->group(function (){
            Route::get('/', [UserController::class, 'index'])->name('users.index');
            Route::delete('/delete/{id}', [UserController::class, 'destroy'])->name('users.destroy');
            Route::put('/status/{id}', [UserController::class, 'status'])->name('users.status');
            Route::put('/restore/{id}', [UserController::class, 'restore'])->name('users.restore');
            Route::get('/edit/{id}', [UserController::class, 'edit'])->name('users.edit');
            Route::post('/edit/{id}', [UserController::class, 'update'])->name('users.update');
            Route::get('/create', [UserController::class, 'create'])->name('users.create');  
            Route::post('/store', [UserController::class, 'store'])->name('users.store');  
        });
        

        Route::middleware('standard')->group(function (){
            Route::post('/follow/{id}', [UserController::class, 'follow'])->name('users.follow'); 
            Route::post('/block/{id}', [UserController::class, 'block'])->name('users.block'); 
        });

        Route::get('/{id}', [UserController::class, 'show'])->name('users.show'); 
    });

    Route::prefix('recipes')->group(function () {


        Route::middleware('standard')->group(function (){
            Route::post('/save/{id}', [RecipeController::class, 'save'])->name('recipes.save'); 
            Route::get('/valorate/{id}', [RecipeController::class, 'showValorate'])->name('recipes.showValorate');
            Route::post('/valorate/{id}', [RecipeController::class, 'valorate'])->name('recipes.valorate'); 
     
        });


        Route::get('/', [RecipeController::class, 'index'])->name('recipes.index'); 
        Route::get('/create', [RecipeController::class, 'create'])->name('recipes.create'); 
        Route::get('/{id}', [RecipeController::class, 'show'])->name('recipes.show');
        Route::delete('/delete/{id}', [RecipeController::class, 'destroy'])->name('recipes.destroy'); 
        Route::get('/edit/{id}', [RecipeController::class, 'edit'])->name('recipes.edit'); 
        Route::post('/update/{id}', [RecipeController::class, 'update'])->name('recipes.update'); 
        Route::post('/store', [RecipeController::class, 'store'])->name('recipes.store'); 

    });

    Route::prefix('shopping')->group(function (){

        Route::middleware('standard')->group(function (){
            Route::get('/', [ShoppingListController::class,'index'])->name('shopping.index'); 
            Route::post('/update', [ShoppingListController::class,'store']);
            Route::post('/clear', [ShoppingListController::class,'update']);
            Route::post('/add/{array}', [ShoppingListController::class,'add']);
     
        });
    });

    Route::prefix('fridge')->group(function (){

        Route::middleware('standard')->group(function (){
            Route::get('/', [FridgeController::class,'index'])->name('fridge.index'); 
            Route::post('/update', [FridgeController::class,'store']);
            Route::post('/clear', [FridgeController::class,'update']);
     
        });
    });

    Route::prefix('ingredients')->group(function (){

        Route::middleware('admin')->group(function (){
            Route::post('/accept/{id}', [IngredientController::class, 'accept'])->name('ingredients.accept'); 
        });

        Route::get('/', [IngredientController::class,'index'])->name('ingredients.index'); 
        Route::post('/create', [IngredientController::class,'store']);
        Route::delete('/delete/{id}', [IngredientController::class, 'destroy'])->name('ingredients.destroy'); 
        Route::get('/edit/{id}', [IngredientController::class, 'edit'])->name('ingredients.edit'); 
        Route::post('/edit/{id}', [IngredientController::class, 'update'])->name('ingredients.update');
    });

});


Route::middleware('auth', 'verified')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/profile', [ProfileController::class, 'update'])->name('profile.update');
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
})->middleware('auth', 'verified');

require __DIR__.'/auth.php';
