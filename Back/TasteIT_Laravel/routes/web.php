<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;
use App\Models\User;

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
    Route::get('/home', function () {return Inertia::render('Dashboard/layouts/dashboard', []);});
    Route::get('/profile', function () {return Inertia::render('Dashboard/layouts/dashboard', []);});
    Route::get('/tables', function () {return Inertia::render('Dashboard/layouts/dashboard', []);});
    Route::get('/notifications', function () {return Inertia::render('Dashboard/layouts/dashboard', []);});
    Route::get('/prueba', [UserController::class, 'index']);

    Route::prefix('users')->group(function () {
        Route::get('/', [UserController::class, 'index'])->name('users.index'); 
        Route::delete('/delete/{id}', [UserController::class, 'destroy'])->name('users.destroy'); 
        Route::get('/edit/{id}', [UserController::class, 'edit'])->name('users.edit'); 
        Route::post('/edit/{id}', [UserController::class, 'update'])->name('users.update'); 
        Route::post('/add', [UserController::class, 'store'])->name('users.add'); 
    });

});

Route::get('/dashboard', function () {
    $users = User::all();

    if (Gate::allows('access-admin')){
        return Inertia::render('Dashboard/layouts/dashboard', [
            'users' => $users,
        ]);
        //return Inertia::render('Dashboard/pages/Admin/Admin', []);
    }

    if (Gate::allows('access-standard')){
        return Inertia::render('Dashboard/Standard/Standard', [
            'users' => $users,
        ]);
    }

    if (Gate::allows('access-chef')){
        return Inertia::render('Dashboard/Chef/Chef', [
            'users' => $users,
        ]);
    }

})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__.'/auth.php';
