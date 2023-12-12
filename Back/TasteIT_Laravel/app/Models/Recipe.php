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
    ];
    
    public function user() {
        return $this->belongsTo('App\Models\User');
    }
}
