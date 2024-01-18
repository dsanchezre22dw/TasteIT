<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecipeRecipeType extends Model
{
    use HasFactory;

    protected $table = "recipe_recipe_type";

    protected $fillable = [
        'recipe_id',
        'recipe_type_id',
    ];
}
