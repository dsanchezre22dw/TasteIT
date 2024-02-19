<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Configuration extends Model
{
    use HasFactory;

    protected $fillable = [
        'follow',
        'valorate',
        'post',
    ];

    public $timestamps = false;

    public function users() {
        return $this->hasMany('App\Models\User');
    }

}
