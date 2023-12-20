<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fridge_ingredient extends Model
{
    use HasFactory;

    protected $table = "fridge_ingredient";

    protected $fillable = [
        'fridge_id',
        'ingredient_id',
    ];
}