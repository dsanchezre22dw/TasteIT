<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;

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

Route::get('/dashboard/{any}', function ($any) {
    if (in_array($any, ['home', 'profile', 'tables', 'notifications'])) {
        // Redirigir a 'dashboard' para rutas específicas
        return Inertia::render('Dashboard/layouts/dashboard', []);

    } else {
        // Renderizar la vista para otras rutas
        return Redirect::route('dashboard');
    }
});



Route::get('/dashboard', function () {
    if (Gate::allows('access-admin')){
        return Inertia::render('Dashboard/layouts/dashboard', []);
        //return Inertia::render('Dashboard/pages/Admin/Admin', []);
    }

    if (Gate::allows('access-standard')){
        return Inertia::render('Dashboard/Standard/Standard', []);
    }

    if (Gate::allows('access-chef')){
        return Inertia::render('Dashboard/Chef/Chef', []);
    }

})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/dashboard/postrecipe', [RecipeController::class, 'store'])->middleware(['auth', 'verified'])->name('post.store');

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
