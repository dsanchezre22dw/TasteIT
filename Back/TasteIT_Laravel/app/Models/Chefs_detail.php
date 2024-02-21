<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chefs_detail extends Model
{
    use HasFactory;

    protected $fillable = [
        'restaurant',
        'description',
        'user_id',
    ];

    public $timestamps = false;

    public function user() {
        return $this->belongsTo('App\Models\User');
    }
}
