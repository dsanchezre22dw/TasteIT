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
}
