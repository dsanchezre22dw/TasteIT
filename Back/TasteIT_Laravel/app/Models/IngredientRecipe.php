<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IngredientRecipe extends Model
{
    use HasFactory;

    protected $table = "ingredient_recipe";

    protected $fillable = [
        'ingredient_id',
        'recipe_id',
        'amount,'
    ];
}
