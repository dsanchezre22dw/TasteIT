<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public function recipes() {
        return $this->belongsToMany('App\Models\Recipe')->withPivot('amount');
    }

    public function fridges() {
        return $this->belongsToMany('App\Models\Fridge');
    }

    public function shopping_lists() {
        return $this->belongsToMany('App\Models\Shopping_list')->withPivot('amount');
    }

    public function ingredient_types() {
        return $this->belongsToMany('App\Models\Ingredient_type');
    }
}
