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

    public function saves() {
        return $this->belongsToMany('App\Models\Recipe','saves');
    }

    public function comments() {
        return $this->belongsToMany('App\Models\Recipe','comments')->withPivot('comment');
    }

    public function valorations() {
        return $this->belongsToMany('App\Models\Recipe','valorations')->withPivot('id','valoration','description');
    }

    public function followers() {
        return $this->belongsToMany('App\Models\User','follows','followed_id','follower_id');
    }

    public function following() {
        return $this->belongsToMany('App\Models\User','follows','follower_id','followed_id');
    }

}
