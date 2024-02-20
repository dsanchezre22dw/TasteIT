<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chef_detail extends Model
{
    use HasFactory;

    protected $fillable = [
        'restaurant',
        'description',
        'user_id',
    ];

    public function user() {
        return $this->belongsTo('App\Models\User');
    }
}
