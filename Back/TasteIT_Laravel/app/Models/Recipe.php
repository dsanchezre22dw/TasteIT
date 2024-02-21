<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'duration_mins',
        'difficulty',
        'rating',
        'user_id',
    ];
    
    public function user() {
        return $this->belongsTo('App\Models\User');
    }

    public function ingredients() {
        return $this->belongsToMany('App\Models\Ingredient')->withPivot('amount');
    }

    public function saves() {
        return $this->belongsToMany('App\Models\User','saves');
    }

    public function valorations() {
        return $this->belongsToMany('App\Models\User','valorations')->withPivot('id','title','valoration','description');
    }

    public function recipe_types() {
        return $this->belongsToMany('App\Models\Recipe_type');
    }
}
