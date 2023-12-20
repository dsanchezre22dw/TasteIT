<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IngredientShoppingList extends Model
{
    use HasFactory;

    protected $table = "ingredient_shopping_list";

    protected $fillable = [
        'ingredient_id',
        'shopping_list_id',
        'amount,'
    ];

}
