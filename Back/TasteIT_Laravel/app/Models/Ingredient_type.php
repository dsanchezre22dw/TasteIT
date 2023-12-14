<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingredient_type extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public function ingredients() {
        return $this->belongsToMany('App\Models\Ingredient');
    }
}
