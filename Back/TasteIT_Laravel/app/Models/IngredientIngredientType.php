<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IngredientIngredientType extends Model
{
    use HasFactory;

    protected $table = "ingredient_ingredient_type";

    protected $fillable = [
        'ingredient_id',
        'ingredient_type_id',
    ];
}
