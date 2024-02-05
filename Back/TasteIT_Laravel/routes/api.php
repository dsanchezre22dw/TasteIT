<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\IngredientController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/ingredients',[IngredientController::class, 'getSuggestions']);

Route::get('/search/{term}',[UserController::class, 'getSuggestions']);

Route::get('/top-users',[UserController::class, 'getUsers']);
Route::get('/new-users',[UserController::class, 'getNewUsersStats']);
Route::get('/new-recipes',[RecipeController::class, 'getNewRecipesStats']);
Route::get('/recipe-types',[RecipeController::class, 'getRecipeTypeRecipes']);