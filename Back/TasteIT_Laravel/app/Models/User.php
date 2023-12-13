<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $fillable = [
        'username',
        'firstName',
        'surname',
        'email',
        'password',
        'profileImg',
        'type',
        'enabled',
    ];

    protected $hidden = [
        'password',
    ];

    protected $casts = [
        'password' => 'hashed',
    ];

    public function shopping_list() {
        return $this->hasOne('App\Models\Shopping_list');
    }
    
    public function fridge() {
        return $this->hasOne('App\Models\Fridge');
    }

    public function recipe() {
        return $this->hasMany('App\Models\Recipe');
    }

}
