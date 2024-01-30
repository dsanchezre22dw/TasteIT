<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fridge extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
    ];

    public function user() {
        return $this->belongsTo('App\Models\User');
    }

    public function ingredients() {
        return $this->belongsToMany('App\Models\Ingredient')->withPivot('amount');
    }
}
