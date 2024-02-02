<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Foundation\Auth\User as AuthenticatableUser;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class User extends AuthenticatableUser implements MustVerifyEmail
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'username',
        'firstname',
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
        'email_verified_at' => 'datetime',
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

    public function valorations() {
        return $this->belongsToMany('App\Models\Recipe','valorations')->withPivot('id','title','valoration','description');
    }

    public function followers() {
        return $this->belongsToMany('App\Models\User','follows','followed_id','follower_id');
    }

    public function following() {
        return $this->belongsToMany('App\Models\User','follows','follower_id','followed_id');
    }

}
