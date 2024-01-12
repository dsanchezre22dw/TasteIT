<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
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


use Illuminate\Support\Facades\Redirect;

/*
Route::get('dashboard/{any}', function () {
    return Redirect::route('dashboard');
})->where('any', '^(?!home|profile|tables|notifications).*') // Excluye 'home' y 'profile'
->name('prueba');
*/

Route::get('dashboard/home', function () {

    return Inertia::render('Dashboard/layouts/dashboard', []);

})->name('home');

Route::get('/home', function () {

    return Inertia::render('Dashboard/layouts/dashboard', []);

})->name('homee');

Route::get('dashboard/profile', function () {

    return Inertia::render('Dashboard/layouts/dashboard', []);

})->name('profile');

/*
Route::get('dashboard/profile', function () {

    return Inertia::render('Dashboard/layouts/dashboard', []);

})->name('prueba');

Route::get('dashboard/tables', function () {

    return Inertia::render('Dashboard/layouts/dashboard', []);

})->name('prueba');

Route::get('dashboard/notifications', function () {

    return Inertia::render('Dashboard/layouts/dashboard', []);

})->name('prueba');


Route::get('dashboard/dashboard/{any}', [DashboardController::class, 'redirectToCorrectRoute'])
    ->where('any', '.*')
    ->name('dashboard.redirect');
*/

Route::get('/dashboard', function () {
    if (Gate::allows('access-admin')){
        //return Inertia::render('Dashboard/pages/Admin/Admin', []);
        return Inertia::render('Dashboard/layouts/dashboard', []);
        //return Inertia::render('Dashboard/pages/dashboard/home', []);
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


require __DIR__.'/auth.php';
