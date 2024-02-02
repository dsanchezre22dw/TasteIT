<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'image',
    ];

    public function recipes() {
        return $this->belongsToMany('App\Models\Recipe')->withPivot('amount');
    }

    public function fridges() {
        return $this->belongsToMany('App\Models\Fridge')->withPivot('amount');
    }

    public function shopping_lists() {
        return $this->belongsToMany('App\Models\Shopping_list')->withPivot('amount');
    }

}
